import "./Footer.css";
import wave from "../assets/Images/wave.png";
import logo from "../assets/Images/logo1.png"

const Footer = () => {
  return (
    <>
      {/* Waves above footer */}
      <div className="waves">
        <div className="wave" id="wave1" style={{ backgroundImage: `url(${wave})` }}></div>
        <div className="wave" id="wave2" style={{ backgroundImage: `url(${wave})` }}></div>
        <div className="wave" id="wave3" style={{ backgroundImage: `url(${wave})` }}></div>
        <div className="wave" id="wave4" style={{ backgroundImage: `url(${wave})` }}></div>
      </div>

      {/* Footer Section */}
      <footer>
        <div className="footer-columns">
          {/* Left: Company links */}
          <div className="footer-col footer-left">
            <h3>Company</h3>
            <ul>
              <li><button onClick={() => handleScroll("home")}>Home</button></li>
              <li><button onClick={() => handleScroll("services")}>Services</button></li>
              <li><button onClick={() => handleScroll("about")}>About Us</button></li>
              <li><button onClick={() => handleScroll("contact")}>Contact</button></li>
            </ul>
          </div>

          {/* Center: Icons */}
          <div className="footer-col footer-center">
            <div className="logo">
                <img src={logo} alt="Levrotec technologies Logo" />
            </div>
            {/* <div className="social-icons">
              <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
              <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
              <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
            </div> */}
          </div>

          {/* Right: Address */}
          <div className="footer-col footer-right">
            <h3>Address</h3>
            <ul>
              <li>Vengaivasal Main Road</li>
              <li>Gowriwakkam</li>
              <li>Chennai,Tamil Nadu 600073</li>
              <li>Tamilnadu ,IND</li>
            </ul>
          </div>
        </div>

        <p className="copyright">
          ©2026 Levro | All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
