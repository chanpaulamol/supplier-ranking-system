import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/registration/",
                formData
            );
            console.log(response);
            // Handle success scenario
            if (response.status === 201) {
                // Registration successful
                console.log("Registration successful");
            }
        } catch (error) {
            console.error(error);
            // Handle error scenario
            if (error.response) {
                // Request made and server responded with a status code
                console.log(error.response.data); // Response data from the server
                console.log(error.response.status); // Response status code
                console.log(error.response.headers); // Response headers
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.log("Error", error.message);
            }
        }
    };

    return (
        <div className="main-register">
            {/* Left section */}
            <div className="register-left">
                <div className="register-developer-notes">
                    <div className="register-card">
                        <div className="register-card-header">
                            <h3>Chan Paul Amol</h3>
                        </div>
                        <div className="register-card-title">Full-Stack Developer</div>
                        <div className="register-card-body">
                            Contributed to the design and implementation of the system's core functionality, ensuring seamless integration between front-end and back-end components.
                        </div>
                    </div>
                    <div className="register-card">
                        <div className="register-card-header">
                            <h3>Maryam Albaiti</h3>
                        </div>
                        <div className="register-card-title">Front-End Developer</div>
                        <div className="register-card-body">
                            Played a key role in crafting the intuitive user interface, focusing on usability and delivering an exceptional user experience.
                        </div>
                    </div>
                    <div className="register-card">
                        <div className="register-card-header">
                            <h3>Bagas</h3>
                        </div>
                        <div className="register-card-title">Front-End Developer</div>
                        <div className="register-card-body">
                            Worked closely with the team to develop the front-end components of the system, bringing the design to life and ensuring a visually appealing and user-friendly interface.
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="register-main-content">
                <div className="register-form-card">
                    <form onSubmit={handleSubmit}>
                        <div className="register-form-row">
                            <div className="register-form-field">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="register-form-row">
                            <div className="register-form-field">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="register-form-row">
                            <div className="register-form-field">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="register-form-field">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="register-form-row">
                            <button type="submit">Register</button>
                        </div>
                    </form>

                    {/* Footer */}
                    <div className="register-footer">
                        <h3>
                            Already have an account?{" "}
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    color: "#09ad",
                                    fontWeight: "bold"
                                }}
                            >
                                Login
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>

            {/* Right section */}
            <div className="register-right">
                <div className="register-content">
                    <Link
                        to="/about"
                        style={{
                            textDecoration: "none",
                            color: "#09ad",
                            fontWeight: "bold"
                        }}
                    >
                        About
                    </Link>
                    <p>
                        As an Admin or Supply Chain Manager, you have the privilege to register and utilize our powerful system for optimizing your business processes.
                    </p>
                    <p>
                        Our Supplier Ranking System provides valuable insights and tools to streamline your supplier management, enhance collaboration, and drive efficiency. With this system, you can easily evaluate and rank suppliers based on performance, quality, and reliability, enabling you to make informed decisions and foster stronger partnerships.
                    </p>
                    <p>
                        Register now to unlock the full potential of our Supplier Ranking System and revolutionize your supplier management practices.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
