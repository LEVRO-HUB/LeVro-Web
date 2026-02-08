import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close menu after click
  };

  return (
    <nav className="navbar">
      <div className="navbar-pill">
        <div className="navbar-logo">LEVRO</div>
        {/* <div className="navbar-spacer"></div> */}

        {/* Hamburger button */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li><button onClick={() => handleScroll("home")}>Home</button></li>
          <li><button onClick={() => handleScroll("services")}>Services</button></li>
          <li><button onClick={() => handleScroll("about")}>About Us</button></li>
          <li><button onClick={() => handleScroll("contact")}>Contact</button></li>
          <li className="careers-link">
            <Link to="/careers">Careers</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
