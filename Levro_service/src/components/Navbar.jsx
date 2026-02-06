import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-pill">
        
        {/* Left: Links */}
        <div className="navbar-logo">LEVRO</div>
        
        <ul className="navbar-links">
          <li>
            <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
          </li>
          <li>
            <Link className={location.pathname === "/services" ? "active" : ""} to="/services">Services</Link>
          </li>
          <li>
            <Link className={location.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
          </li>
          <li>
            <Link className={location.pathname === "/career" ? "active" : ""} to="/career">Careers</Link>
          </li>
          <li>
            <Link className={location.pathname === "/about" ? "active" : ""} to="/about">About us</Link>
          </li>
        </ul>
      
      </div>
    </nav>
  );
}
