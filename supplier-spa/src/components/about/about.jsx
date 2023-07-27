import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "./about.css";

const About = () => {
    const location = useLocation();

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

            <div className="main-about">
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
        </div>
    );
}

export default About;