import "./Footer.css";
import wave from "../assets/Images/wave.png";
import logo from "../assets/Images/logo1.png";

const Footer = () => {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="waves">
        <div className="wave" id="wave1" style={{ backgroundImage: `url(${wave})` }}></div>
        <div className="wave" id="wave2" style={{ backgroundImage: `url(${wave})` }}></div>
        <div className="wave" id="wave3" style={{ backgroundImage: `url(${wave})` }}></div>
        <div className="wave" id="wave4" style={{ backgroundImage: `url(${wave})` }}></div>
      </div>

      <footer>
        <div className="footer-columns">
          <div className="footer-col footer-left">
            <h3>Company</h3>
            <ul>
              {/* ✅ IDs must match App.jsx section ids */}
              <li><button type="button" onClick={() => scrollToId("home")}>Home</button></li>
              <li><button type="button" onClick={() => scrollToId("services")}>Services</button></li>
              <li><button type="button" onClick={() => scrollToId("about")}>About Us</button></li>
              <li><button type="button" onClick={() => scrollToId("contact")}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-col footer-center">
            <div className="logo">
              <img src={logo} alt="Levrotec technologies Logo" />
            </div>
          </div>

          <div className="footer-col footer-right">
            <h3>Address</h3>
            <ul>
              <li>Vengaivasal Main Road</li>
              <li>Gowriwakkam</li>
              <li>Chennai, Tamil Nadu 600073</li>
              <li>Tamil Nadu, IND</li>
            </ul>
          </div>
        </div>

        <p className="copyright">©2026 Levro | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;