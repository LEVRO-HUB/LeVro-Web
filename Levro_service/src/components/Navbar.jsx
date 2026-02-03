// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
<<<<<<< HEAD
        <div className="navbar-logo">LEVRO</div>
=======
        <div className="navbar-logo">LEVRO TECHNOLOGIES</div>
>>>>>>> 275fcc87678f740acde498c7fb5309441afa488f

        {/* Desktop Menu */}
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
}
