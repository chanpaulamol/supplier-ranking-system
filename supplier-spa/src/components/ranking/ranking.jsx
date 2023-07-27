import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ranking.css";
import { Link, useLocation } from 'react-router-dom';
function Ranking() {
    const [suppliers, setSuppliers] = useState([]);
    const [ahpResults, setAhpResults] = useState([]);
    const [showButtons, setShowButtons] = useState(false);
    const [hasRankingData, setHasRankingData] = useState(false);
    const location = useLocation();
    useEffect(() => {
        fetchSuppliers();
        fetchRankingDataExist();
    }, []);
    const options = {
        financial_status: ['', 'Poor', 'Fair', 'Stable', 'Strong', 'Robust'],
        quality: ['', 'Unsatisfactory', 'Acceptable', 'Good', 'High', 'Exceptional'],
        service: ['', 'Poor', 'Fair', 'Good', 'Excellent', 'Outstanding'],
        reputation: ['', 'Poor', 'Below Average', 'Average', 'Above Average', 'Excellent'],
        technical_capability: ['', 'Inadequate', 'Basic', 'Competent', 'Advanced', 'Expert'],
        price_cost: ['', 'Highly Expensive', 'Expensive', 'Fair', 'Reasonable', 'Affordable'],
    };
    const fetchSuppliers = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/suppliers/");
            setSuppliers(response.data);
        } catch (error) {
            console.error("Error fetching suppliers:", error);
        }
    };

    const fetchRankingDataExist = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/ahp/save/");
            const rankingDataExist = response.data.length > 0;
            setHasRankingData(rankingDataExist);
        } catch (error) {
            console.error("Error checking ranking data existence:", error);
        }
    };

    const rank = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/ahp/rankings/");
            const ahpResultsData = response.data;
            setAhpResults(ahpResultsData);
            setShowButtons(true);
            toast.info("Ranking completed successfully");
        } catch (error) {
            console.error("Error fetching AHP results:", error);
        }
    };

    const clearResults = () => {
        setAhpResults([]);
        setShowButtons(false);
        setHasRankingData(false);
        toast.info("Results cleared");
    };

    const saveResults = async () => {
        try {
            await axios.post("http://127.0.0.1:8000/api/ahp/save/", ahpResults);
            console.log("Results saved successfully");
            setHasRankingData(true);
            toast.success("Results saved successfully");
        } catch (error) {
            console.error("Error saving results:", error);
            toast.error("Error saving results");
        }
    };

    const deleteResults = async () => {
        try {
            await axios.delete("http://127.0.0.1:8000/api/ahp/delete-all/");
            console.log("Results deleted successfully");
            clearResults();
            toast.error("Results deleted successfully");
        } catch (error) {
            console.error("Error deleting results:", error);
            toast.error("Error deleting results");
        }
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

            <div className="ranking-container">
                <div className="column-middle">
                    <div className="scrollable-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Supplier</th>
                                    <th>Financial Status</th>
                                    <th>Quality</th>
                                    <th>Service</th>
                                    <th>Reputation</th>
                                    <th>Technical Capability</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {suppliers.map((supplier) => (
                                    <tr key={supplier.name}>
                                        <td>{supplier.name}</td>
                                        <td>{options.financial_status[supplier.financial_status]}</td>
                                        <td>{options.quality[supplier.quality]}</td>
                                        <td>{options.service[supplier.service]}</td>
                                        <td>{options.reputation[supplier.reputation]}</td>
                                        <td>{options.technical_capability[supplier.technical_capability]}</td>
                                        <td>{options.price_cost[supplier.price_cost]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button className="analyse-button" onClick={rank}>
                        Rank
                    </button>
                </div>

                <div className="column-right">
                    <h3>Ranking</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Supplier</th>
                                <th>AHP Result</th>
                                <th>Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ahpResults.map((result) => (
                                <tr key={result.supplier_name}>
                                    <td>{result.supplier_name}</td>
                                    <td>{result.results}</td>
                                    <td>{result.ranking}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {showButtons && (
                        <div className="ranking-buttons">
                            <button className="clear-button" onClick={clearResults}>
                                Clear
                            </button>
                            {hasRankingData ? (
                                <button className="delete-button" onClick={deleteResults}>
                                    Delete
                                </button>
                            ) : (
                                <button className="save-button" onClick={saveResults}>
                                    Save
                                </button>
                            )}
                        </div>
                    )}
                </div>

                <ToastContainer />
            </div>
        </div>
    );
}

export default Ranking;
