import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Dashboard from "./components/dashboard/dashboard";
import Supplier from "./components/supplier/supplier";
import Ranking from "./components/ranking/ranking";
import About from "./components/about/about";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Supply Chain Management System</header>
      <Router>
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", color: "#09ad", fontWeight: "bold" }}
        >
          Dashboard
        </Link>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/supplier" element={<Supplier />} />
          <Route path="/dashboard/ranking" element={<Ranking />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;