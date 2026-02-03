// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">LEVRO TECHNOLOGIES</div>

        {/* Desktop Menu */}
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
           <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          {/* <li><Link to="/about">About</Link></li> */}
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
}
