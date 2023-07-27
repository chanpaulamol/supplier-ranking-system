import React, { useEffect, useState, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./dashboard.css";
const Dashboard = ({ user }) => {
    const [chartData, setChartData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const chartRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    // const { username, email } = user;
    const fetchData = async () => {
        try {
            toast.info('Loading data...', { autoClose: false, position: toast.POSITION.TOP_RIGHT });

            const [chartResponse, tableResponse] = await Promise.all([
                fetch('http://127.0.0.1:8000/api/ahp/rankings'),
                fetch('http://127.0.0.1:8000/api/suppliers/'),
            ]);

            const chartData = await chartResponse.json();
            const tableData = await tableResponse.json();

            setChartData(chartData);
            setTableData(tableData);
            setLoading(false);
            toast.dismiss();
        } catch (error) {
            setError('Error fetching data.');
            setLoading(false);
            toast.dismiss();
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const renderChart = () => {
            const ctx = chartRef.current;
            if (ctx) {
                const top3Suppliers = chartData.slice(0, 3);
                const supplierNames = top3Suppliers.map((supplier) => supplier.supplier_name);
                const results = top3Suppliers.map((supplier) => supplier.results);
                const ranks = top3Suppliers.map((supplier) => supplier.rank);

                // Destroy existing chart instance if it exists
                if (ctx.chart) {
                    ctx.chart.destroy();
                }

                ctx.chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: supplierNames,
                        datasets: [
                            {
                                label: 'Results (%)',
                                data: results.map((result) => (result * 100).toFixed(2)),
                                backgroundColor: [
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                ],
                                borderWidth: 1,
                            },
                            {
                                label: 'Rank',
                                data: ranks.map((rank, index) => index + 1),
                                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                                borderColor: 'rgba(255, 205, 86, 1)',
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                    },
                });
            }
        };

        if (chartData.length > 0) {
            renderChart();
        }
    }, [chartData]);

    const getOptionLabel = (fieldName, value) => {
        const options = {
            financial_status: ['', 'Poor', 'Fair', 'Stable', 'Strong', 'Robust'],
            quality: ['', 'Unsatisfactory', 'Acceptable', 'Good', 'High', 'Exceptional'],
            service: ['', 'Poor', 'Fair', 'Good', 'Excellent', 'Outstanding'],
            reputation: ['', 'Poor', 'Below Average', 'Average', 'Above Average', 'Excellent'],
            technical_capability: ['', 'Inadequate', 'Basic', 'Competent', 'Advanced', 'Expert'],
            price_cost: ['', 'Highly Expensive', 'Expensive', 'Fair', 'Reasonable', 'Affordable'],
        };
        const optionList = options[fieldName];
        return optionList[value] || '';
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleLogout = () => {
        // Perform the logout action
        navigate('/')
    };

    return (
        <div>
            <Link
                to="/dashboard"
                style={{
                    textDecoration: 'none',
                    color: '#09ad',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    backgroundColor: location.pathname === '/dashboard' ? '#ccc' : '#f2f2f2',
                    padding: '10px',
                    margin: '5px',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease',
                }}
                // Hover style
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#ccc';
                }}
                // Reset style on hover out
                onMouseOut={(e) => {
                    if (location.pathname !== '/dashboard') {
                        e.target.style.backgroundColor = '#f2f2f2';
                    }
                }}
            >
                Dashboard
            </Link>
            <Link
                to="/supplier"
                style={{
                    textDecoration: 'none',
                    color: '#09ad',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    backgroundColor: location.pathname === '/supplier' ? '#ccc' : '#f2f2f2',
                    padding: '10px',
                    margin: '5px',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease',
                }}
                // Hover style
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#ccc';
                }}
                // Reset style on hover out
                onMouseOut={(e) => {
                    if (location.pathname !== '/supplier') {
                        e.target.style.backgroundColor = '#f2f2f2';
                    }
                }}
            >
                Supplier
            </Link>
            <Link
                to="/ranking"
                style={{
                    textDecoration: 'none',
                    color: '#09ad',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    backgroundColor: location.pathname === '/ranking' ? '#ccc' : '#f2f2f2',
                    padding: '10px',
                    margin: '5px',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease',
                }}
                // Hover style
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#ccc';
                }}
                // Reset style on hover out
                onMouseOut={(e) => {
                    if (location.pathname !== '/ranking') {
                        e.target.style.backgroundColor = '#f2f2f2';
                    }
                }}
            >
                Ranking
            </Link>
            <Link
                to="/about"
                style={{
                    textDecoration: 'none',
                    color: '#09ad',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    backgroundColor: location.pathname === '/about' ? '#ccc' : '#f2f2f2',
                    padding: '10px',
                    margin: '5px',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease',
                }}
                // Hover style
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#ccc';
                }}
                // Reset style on hover out
                onMouseOut={(e) => {
                    if (location.pathname !== '/about') {
                        e.target.style.backgroundColor = '#f2f2f2';
                    }
                }}
            >
                About
            </Link>
            <div className="user-info">
                {/* <span>{username}</span>
                <span>{email}</span> */}
                <button onClick={handleLogout}>Logout</button>
            </div>

            <div className="chart-container">
                <canvas ref={chartRef} />
            </div>
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>Supplier Name</th>
                        <th>Financial Status</th>
                        <th>Quality</th>
                        <th>Service</th>
                        <th>Reputation</th>
                        <th>Technical Capability</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((supplier) => (
                        <tr key={supplier.name}>
                            <td>{supplier.name}</td>
                            <td>{getOptionLabel('financial_status', supplier.financial_status)}</td>
                            <td>{getOptionLabel('quality', supplier.quality)}</td>
                            <td>{getOptionLabel('service', supplier.service)}</td>
                            <td>{getOptionLabel('reputation', supplier.reputation)}</td>
                            <td>{getOptionLabel('technical_capability', supplier.technical_capability)}</td>
                            <td>{getOptionLabel('price_cost', supplier.price_cost)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
};

export default Dashboard;
