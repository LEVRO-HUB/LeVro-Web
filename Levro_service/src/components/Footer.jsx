import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import wave from "../assets/images/wave.png";

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
              {/* <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/careers">Careers</Link></li> */}
            </ul>
          </div>

          {/* Center: Icons */}
          <div className="footer-col footer-center">
            <h3>LEVRO</h3>
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
              <li>101 The Amazing Road</li>
              <li>Premier Building</li>
              <li>Manchester</li>
              <li>400105</li>
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
