import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ProgressBar from "./ProgressBar";

function Login({ username, email }) {
    const [emailval, setemailval] = useState("");
    const [passval, setpassval] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showProgressBar, setShowProgressBar] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login/", {
                email: emailval,
                password: passval,
            });

            // Check the response status and navigate accordingly
            if (response.status === 200) {
                // Display the progress bar for 5 seconds
                setShowProgressBar(true);
                setTimeout(() => {
                    // Redirect to the dashboard page
                    navigate('/dashboard', { state: { use_data: response.data } });
                }, 3000);
            } else {
                // Set error message
                setErrorMessage("Login failed.");
            }
        } catch (error) {
            // Handle request error
            console.log("An error occurred:", error);
            setErrorMessage("Login failed.");
        }
    };

    return (
        <div className="main-login">
            {!showProgressBar && (
                <div className="login-container">
                    <div className="left-side">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email..."
                                value={emailval}
                                onChange={(e) => setemailval(e.target.value)}
                                required
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter password"
                                value={passval}
                                onChange={(e) => setpassval(e.target.value)}
                                autoComplete="current-password"
                                required
                            />
                            <button type="submit" id="submit-button">
                                Login
                            </button>
                        </form>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="footer">
                            <h3>
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    style={{
                                        textDecoration: "none",
                                        color: "#09ad",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Register
                                </Link>
                            </h3>
                        </div>
                    </div>
                    <div className="right-side">
                        <h3>Welcome to the Supplier Ranking System, {username}!</h3>
                        <p>
                            As a Supply Chain Manager, you play a crucial role in managing our
                            suppliers and ensuring their performance aligns with our
                            organization's goals. The Supplier Ranking System is here to
                            streamline and enhance our supplier evaluation process.
                        </p>
                        <p>
                            With this system, you'll have access to valuable insights and
                            data-driven analytics that will help you make informed decisions
                            when it comes to supplier selection, performance assessment, and
                            improvement strategies. We aim to optimize our supply chain by
                            fostering stronger partnerships with top-performing suppliers.
                        </p>
                        <p>
                            Together, let's drive efficiency, collaboration, and continuous
                            improvement in our supplier network. Get ready to unlock a new
                            level of supplier management excellence with the Supplier Ranking
                            System.
                        </p>
                    </div>
                </div>
            )}
            {showProgressBar && <ProgressBar initialNow={0} min={0} max={100} />}
        </div>
    );
}

export default Login;
