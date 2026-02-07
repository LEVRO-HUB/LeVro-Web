import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      // Go home first
      navigate("/");

      // Wait for page to render, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-pill">
        <div className="navbar-logo">LEVRO</div>
        <div className="navbar-spacer"></div>
        <ul className="navbar-links">
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
