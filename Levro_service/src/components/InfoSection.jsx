// InfoSection.jsx
import React from "react";
import "./InfoSection.css";
import visitIcon from "../assets/images/visit-icon.png";
import callIcon from "../assets/images/call-icon.png";
import emailIcon from "../assets/images/email-icon.png";

export default function InfoSection() {
  return (
    <div className="info-section">
      <div className="info-card">
        <div className="info-icon">
          <img src={visitIcon} alt="Visit Us" />
        </div>
        <h3>VISIT US</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel elit euismod arcu non rutrum.</p>
        <p>2 Elizabeth St. London, UK</p>
      </div>

      <div className="info-card">
        <div className="info-icon">
          <img src={callIcon} alt="Call Us" />
        </div>
        <h3>CALL US</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel elit euismod arcu non rutrum.</p>
        <p>+44 (0) 203 116 7711</p>
      </div>

      <div className="info-card">
        <div className="info-icon">
          <img src={emailIcon} alt="Email Us" />
        </div>
        <h3>EMAIL US</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel elit euismod arcu non rutrum.</p>
        <p>noreply@noland.com</p>
      </div>
    </div>
  );
}
