import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ranking.css";

function Ranking() {
    const [suppliers, setSuppliers] = useState([]);
    const [rankings, setRanking] = useState([]);
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        fetchSuppliers();
    }, []);

    const fetchSuppliers = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/suppliers/");
            setSuppliers(response.data);
        } catch (error) {
            console.error("Error fetching suppliers:", error);
        }
    };

    const GetRankingResults = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/ahp/rankings/");
            setRanking(response.data);
            setShowButtons(true); // Show the buttons when results are retrieved
        } catch (error) {
            console.error("Error fetching Ranking results:", error);
        }
    };

    const Rank = () => {
        GetRankingResults();
    };

    const clearResults = () => {
        setRanking([]); // Clear the rankings
        setShowButtons(false); // Hide the buttons
    };

    const saveResults = async () => {
        if (rankings.length === 0) {
            console.log("No rankings to save");
            return;
        }

        try {
            // Send a POST request with the rankings data to the backend API endpoint
            await axios.post("http://127.0.0.1:8000/api/ahp/save/", rankings);
            console.log(rankings)
            console.log("Results saved successfully");
        } catch (error) {
            console.error("Error saving results:", error);
        }
    };

    return (
        <div className="ranking-container">
            <div className="column-left">
                {/* Display criteria and weights */}
            </div>

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
                                <th>Price/Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {suppliers.map((supplier) => (
                                <tr key={supplier.name}>
                                    <td>{supplier.name}</td>
                                    <td>{supplier.financial_status}</td>
                                    <td>{supplier.quality}</td>
                                    <td>{supplier.service}</td>
                                    <td>{supplier.reputation}</td>
                                    <td>{supplier.technical_capability}</td>
                                    <td>{supplier.price_cost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="analyse-button" onClick={Rank}>
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
                        {rankings.map((rank, index) => (
                            <tr key={rank.name}>
                                <td>{rank.name}</td>
                                <td>{rank.result}</td>
                                <td>{rank.ranking}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {showButtons && (
                    <div className="ranking-buttons">
                        <button className="clear-button" onClick={clearResults}>
                            Clear
                        </button>
                        <button className="save-button" onClick={saveResults}>
                            Save
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Ranking;
