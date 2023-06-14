import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import Chart from 'chart.js/auto';


const Dashboard = ({ username, email, handleLogout, rankingsData, priceLeadTimeData }) => {
    const rankingChartRef = useRef(null);
    const priceLeadTimeChartRef = useRef(null);

    useEffect(() => {
        // Ranking Chart
        if (rankingsData && rankingChartRef.current) {
            const chartData = rankingsData.map(({ supplier, ranking }) => ({
                label: supplier,
                data: [ranking],
            }));

            const chartOptions = {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 10, // Set the maximum value for the ranking scale
                    },
                },
            };

            new Chart(rankingChartRef.current, {
                type: 'bar',
                data: {
                    labels: chartData.map((data) => data.label),
                    datasets: [
                        {
                            label: 'Ranking',
                            data: chartData.map((data) => data.data[0]),
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: chartOptions,
            });
        }

        // Price and Lead Time Chart
        if (priceLeadTimeData && priceLeadTimeChartRef.current) {
            const chartData = priceLeadTimeData.map(({ supplier, price, leadTime }) => ({
                label: supplier,
                data: [price, leadTime],
            }));

            const chartOptions = {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                },
            };

            new Chart(priceLeadTimeChartRef.current, {
                type: 'bar',
                data: {
                    labels: chartData.map((data) => data.label),
                    datasets: [
                        {
                            label: 'Price',
                            data: chartData.map((data) => data.data[0]),
                            backgroundColor: 'rgba(255, 99, 132, 0.6)',
                            borderWidth: 1,
                        },
                        {
                            label: 'Lead Time',
                            data: chartData.map((data) => data.data[1]),
                            backgroundColor: 'rgba(54, 162, 235, 0.6)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: chartOptions,
            });
        }
    }, [rankingsData, priceLeadTimeData]);

    return (
        <div className="main-dashboard">
            <nav className="dashboard-nav">
                <ul>
                    <li>
                        <Link to="/dashboard/supplier">Supplier</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/ranking">Ranking</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <div className="dropdown">
                    <button className="dropdown-btn">User</button>
                    <div className="dropdown-content">
                        <div className="username">{username}</div>
                        <div className="email">{email}</div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </nav>

            <div className="dashboard-content">
                <div className="charts-container">
                    <div className="chart-card">
                        <h3>Suppliers Ranking Chart</h3>
                        <canvas ref={rankingChartRef}></canvas>
                    </div>
                    <div className="chart-card">
                        <h3>Suppliers with Price and Lead Time Chart</h3>
                        <canvas ref={priceLeadTimeChartRef}></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
