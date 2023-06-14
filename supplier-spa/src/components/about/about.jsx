import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
    return (
        <div className="main-about">
            <nav className="about-nav">
                <ul>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
            <div className="about-content">
                <h3>Our Story</h3>
                <p>
                    In today's highly competitive business landscape, the success of an organization heavily relies on its supply chain management. We understand the critical role suppliers play in ensuring seamless operations and delivering exceptional products and services to our customers.
                </p>
                <p>
                    With a firm belief in fostering collaborative and mutually beneficial relationships with our suppliers, we introduce the Supplier Ranking System—an innovative solution designed to transform how we manage and evaluate our supplier network.
                </p>
                <h3>Our Vision</h3>
                <p>
                    Our vision is to create a world-class supplier management ecosystem that drives operational excellence, enhances supplier performance, and fuels sustainable growth for our organization and our valued partners.
                </p>
                <h3>Our Mission</h3>
                <p>
                    Our mission is to empower supply chain managers with powerful tools and insights, enabling them to make informed decisions, build stronger supplier partnerships, and optimize our supply chain for superior efficiency, quality, and customer satisfaction.
                </p>
            </div>
        </div>
    );
}

export default About;
