import React, { useState } from "react";
import axios from "axios";
import "./supplier.css";

function Supplier() {
    const [formData, setFormData] = useState({
        name: "",
        financial_status: "",
        quality: "",
        service: "",
        reputation: "",
        technical_capability: "",
        price_cost: ""
    });

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
            <div className="left">
                <div className="table-notes">
                    <div className="supplier-card">
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>Intensity of Importance</th>
                                    <th>Definition</th>
                                    <th>Explanation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-row">
                                    <td>1</td>
                                    <td>Lowest Importance</td>
                                    <td>Two activities contribute equally to the objective</td>
                                </tr>
                                <tr className="table-row">
                                    <td>3</td>
                                    <td>Moderate Importance</td>
                                    <td>Experience and judgment slightly favor one activity over another</td>
                                </tr>
                                <tr className="table-row">
                                    <td>5</td>
                                    <td>Strong Importance</td>
                                    <td>Experience and judgment strongly favor one activity over another</td>
                                </tr>
                                <tr className="table-row">
                                    <td>7</td>
                                    <td>Very Strong Importance</td>
                                    <td>An activity is strongly favored and its dominance demonstrated in practice</td>
                                </tr>
                                <tr className="table-row">
                                    <td>9</td>
                                    <td>Extreme Importance</td>
                                    <td>The evidence favoring one activity over another is of the highest possible order of affirmation</td>
                                </tr>
                                <tr className="table-row">
                                    <td>2, 4, 6, 8</td>
                                    <td>Intermediate values between two adjacent judgments</td>
                                    <td>When compromise is required</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="supplier-content">
                <div className="supplier-form-card">
                    <form className="main-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="financial_status">Financial Status</label>
                                <input
                                    type="number"
                                    id="financial_status"
                                    name="financial_status"
                                    value={formData.financial_status}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* Additional form fields */}
                        </div>
                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="quality">Quality</label>
                                <input
                                    type="number"
                                    id="quality"
                                    name="quality"
                                    value={formData.quality}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="service">Service</label>
                                <input
                                    type="number"
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="reputation">Reputation</label>
                                <input
                                    type="number"
                                    id="reputation"
                                    name="reputation"
                                    value={formData.reputation}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* Additional form fields */}
                        </div>
                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="technical_capability">Technical Capability</label>
                                <input
                                    type="number"
                                    id="technical_capability"
                                    name="technical_capability"
                                    value={formData.technical_capability}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="price_cost">Price/Cost</label>
                                <input
                                    type="number"
                                    id="price_cost"
                                    name="price_cost"
                                    value={formData.price_cost}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* Additional form fields */}
                        </div>

                        <div className="form-row">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="supplier-right">
                <div className="content">
                    <h3>Notes</h3>
                    <ul className="criteria_list">
                        <li>
                            <strong>Price/Cost:</strong> Quantity of payment given by the customer to the supplier in return for goods and services.
                        </li>
                        <li>
                            <strong>Quality:</strong> Measure of how well the supplier's products or services meet the desired standards.
                        </li>
                        <li>
                            <strong>Service:</strong> The level of customer support and assistance provided by the supplier.
                        </li>
                        <li>
                            <strong>Reputation:</strong> The overall perception and standing of the supplier in the market.
                        </li>
                        <li>
                            <strong>Technical Capability:</strong> The supplier's expertise and ability to meet technical requirements.
                        </li>
                        <li>
                            <strong>Financial Status:</strong> The financial stability and health of the supplier.
                        </li>
                    </ul>
                    <blockquote>
                        <p>
                            In the dynamic and competitive business landscape, making the right decisions when selecting suppliers is crucial for the success of your organization.
                        </p>
                        <p>
                            As supply chain managers, you play a vital role in ensuring the smooth flow of goods and services from suppliers to customers.
                        </p>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default Supplier;
