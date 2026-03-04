import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/Images/logo2.png";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Ref to detect outside click
  const navRef = useRef(null);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      // simple retry scroll (more reliable than single timeout)
      setTimeout(() => scrollToId(id), 200);
      setTimeout(() => scrollToId(id), 500);
    } else {
      scrollToId(id);
    }
    setIsOpen(false);
  };

  // ✅ Close menu when clicking outside navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // mousedown works great for desktop
    document.addEventListener("mousedown", handleClickOutside);
    // touchstart makes it work instantly on mobile
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-pill">
        <div className="logo">
          <img
            src={logo}
            alt="Levrotec Technologies Logo"
            onClick={() => handleScroll("home")}
            style={{ cursor: "pointer" }}
          />
        </div>

        <button
          type="button"
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <button type="button" onClick={() => handleScroll("home")}>
              Home
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleScroll("services")}>
              Services
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleScroll("about")}>
              About Us
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleScroll("contact")}>
              Contact
            </button>
          </li>
          {/* <li className="careers-link">
            <Link to="/careers">Careers</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}