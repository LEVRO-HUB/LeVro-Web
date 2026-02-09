// InfoSection.jsx
import React from "react";
import "./InfoSection.css";
import visitIcon from "../assets/Images/visit-icon.png";
import callIcon from "../assets/Images/call-icon.png";
import emailIcon from "../assets/Images/email-icon.png";

export default function InfoSection() {
  return (
    <div className="info-section">
      <div className="info-card">
        <div className="info-icon">
          <img src={visitIcon} alt="Visit Us" />
        </div>
        <h3>VISIT US</h3>
        <p>Vengaivasal Main Road, Valli Nagar, Gowriwakkam, Sembakkam, Chennai, Tamil Nadu 600073</p>
        <p>Tamilnadu ,IND</p>
      </div>

      <div className="info-card">
        <div className="info-icon">
          <img src={callIcon} alt="Call Us" />
        </div>
        <h3>CALL US</h3>
        <p>Building technology that connects people, drives progress, and shapes the future.</p>
        <p>+91 7530094591</p>
      </div>

      <div className="info-card">
        <div className="info-icon">
          <img src={emailIcon} alt="Email Us" />
        </div>
        <h3>EMAIL US</h3>
        <p>For any queries or support, please reach out to us at noreply@levro.com</p>
        <p>noreply@levro.com</p>
      </div>
    </div>
  );
}
