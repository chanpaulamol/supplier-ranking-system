import React, { useState } from "react";
import axios from "axios";
import "./newsupplier.css";
import { Link, useLocation } from 'react-router-dom';

function Supplier() {
    const [formData, setFormData] = useState({
        name: "",
        financial_status: "",
        quality: "",
        service: "",
        reputation: "",
        technical_capability: "",
        price_cost: "",
    });
    const location = useLocation();
    const handleChange = (event) => {
        const { name, value } = event.target;

        // Convert the value to an integer, excluding the "name" field
        const intValue = name === "name" ? value : parseInt(value);

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: intValue
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/suppliers/",
                formData
            );

            console.log(response.data);

            setFormData({
                name: "",
                financial_status: "",
                quality: "",
                service: "",
                reputation: "",
                technical_capability: "",
                price_cost: "",
            });
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="main-supplier">
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
            <div className="supplier-row">
                <div className="supplier-column-left">
                    <div className="supplier-card">
                        <table className="supplier-styled-table">
                            <thead>
                                <tr>
                                    <th>Intensity of Importance</th>
                                    <th>Definition</th>
                                    <th>Explanation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Lowest Importance</td>
                                    <td>Two activities contribute equally to the objective</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Moderate Importance</td>
                                    <td>Experience and judgment slightly favor one activity over another</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Strong Importance</td>
                                    <td>Experience and judgment strongly favor one activity over another</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Very Strong Importance</td>
                                    <td>An activity is strongly favored and its dominance demonstrated in practice</td>
                                </tr>
                                <tr >
                                    <td>9</td>
                                    <td>Extreme Importance</td>
                                    <td>The evidence favoring one activity over another is of the highest possible order of affirmation</td>
                                </tr>
                                <tr>
                                    <td>2, 4, 6, 8</td>
                                    <td>Intermediate values between two adjacent judgments</td>
                                    <td>When compromise is required</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="supplier-column-right">
                    <div className="supplier-form-card">
                        <form className="supplier-form" onSubmit={handleSubmit}>
                            <div className="form-field-group">
                                <label htmlFor="name">Supplier Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-column-left">
                                <div className="form-field-group">
                                    <label htmlFor="financial_status">Financial Status</label>
                                    <div className="tooltip-container">
                                        <select
                                            id="financial_status"
                                            name="financial_status"
                                            value={formData.financial_status}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select</option>
                                            <option value="1">Poor</option>
                                            <option value="2">Fair</option>
                                            <option value="3">Stable</option>
                                            <option value="4">Strong</option>
                                            <option value="5">Robust</option>
                                        </select>
                                        <span className="tooltip-text">Financial status refers to the stability and strength of the supplier's financial position.</span>
                                    </div>
                                </div>
                                <div className="form-field-group">
                                    <label htmlFor="service">Service</label>
                                    <div className="tooltip-container">
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select</option>
                                            <option value="1">Poor</option>
                                            <option value="2">Fair</option>
                                            <option value="3">Good</option>
                                            <option value="4">Excellent</option>
                                            <option value="5">Outstanding</option>
                                        </select>
                                        <span className="tooltip-text">Service refers to the level of customer support and assistance provided by the supplier.</span>
                                    </div>
                                </div>
                                <div className="form-field-group">
                                    <label htmlFor="technical_capability">Technical Capability</label>
                                    <div className="tooltip-container">
                                        <select
                                            id="technical_capability"
                                            name="technical_capability"
                                            value={formData.technical_capability}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select</option>
                                            <option value="1">Inadequate</option>
                                            <option value="2">Basic</option>
                                            <option value="3">Competent</option>
                                            <option value="4">Advanced</option>
                                            <option value="5">Expert</option>
                                        </select>
                                        <span className="tooltip-text">Technical capability refers to the supplier's expertise, skills, and resources in delivering technical solutions.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-column-right">
                                <div className="form-field-group">
                                    <label htmlFor="quality">Quality</label>
                                    <div className="tooltip-container">
                                        <select
                                            id="quality"
                                            name="quality"
                                            value={formData.quality}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select</option>
                                            <option value="1">Unsatisfactory</option>
                                            <option value="2">Acceptable</option>
                                            <option value="3">Good</option>
                                            <option value="4">High</option>
                                            <option value="5">Exceptional</option>
                                        </select>
                                        <span className="tooltip-text">Quality refers to the level of excellence or superiority of the supplier's products or services.</span>
                                    </div>
                                </div>
                                <div className="form-field-group">
                                    <label htmlFor="reputation">Reputation</label>
                                    <div className="tooltip-container">
                                        <select
                                            id="reputation"
                                            name="reputation"
                                            value={formData.reputation}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select</option>
                                            <option value="1">Poor</option>
                                            <option value="2">Below Average</option>
                                            <option value="3">Average</option>
                                            <option value="4">Above Average</option>
                                            <option value="5">Excellent</option>
                                        </select>
                                        <span className="tooltip-text">Reputation refers to the overall perception and credibility of the supplier in the market.</span>
                                    </div>
                                </div>
                                <div className="form-field-group">
                                    <label htmlFor="price_cost">Price</label>
                                    <div className="tooltip-container">
                                        <select
                                            id="price_cost"
                                            name="price_cost"
                                            value={formData.price_cost}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select</option>
                                            <option value="1">Highly Expensive</option>
                                            <option value="2">Expensive</option>
                                            <option value="3">Fair</option>
                                            <option value="4">Reasonable</option>
                                            <option value="5">Affordable</option>
                                        </select>
                                        <span className="tooltip-text">Price cost refers to the competitiveness of the supplier's pricing in the market.</span>
                                    </div>
                                </div>
                            </div>
                            <button type="submit">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Supplier;
