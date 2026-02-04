import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Left: Logo + Icon */}
        <div className="navbar-left">
          <span className="navbar-icon"></span>
          <div className="navbar-logo">LEVRO TECHNOLOGIES</div>
        </div>

        {/* Center: Links */}
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
           <li><Link to="/careers">Careers</Link></li>
           <li><Link to="/about">About Us</Link></li>
        </ul>

        {/* Right: Language Button */}
        {/* <div className="navbar-right">
          <button className="lang-btn">EN | தமிழ்</button>
          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </div>
        </div> */}
      </div>
    </nav>
  );
}
