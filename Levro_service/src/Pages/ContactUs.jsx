import React from "react";
import ContactSlide from "../components/ContactSlide";
import "./ContactUs.css";
import bannerImg from "../assets/images/Banner.jpg"; 
import Accordion from "../components/Accordion";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/facebook.png";
import InfoSection from "../components/InfoSection";

const ContactUs = () => {
  return (
    <div className="contact-us-page">

      {/* Top Banner */}
      <div className="top-banner">
        {/* <div className="top-left">
          <img src={bannerImg} alt="Startup Logo" className="banner-img" />
        </div> */}
        {/* <div className="top-right">
  <h1 className="animated-heading">Get in Touch</h1> 
  <a href="https://wa.me/7530094591?text=Hello%20Levro%20Team%2C%20I%20would%20like%20to%20get%20in%20touch." 
  target="_blank" 
  rel="noopener noreferrer" 
  className="banner-btn" > Send a Message 
  </a>
</div> */}
<div className="top-right">
  <h1 className="animated-heading">
    {"Get In Touch".split(" ").map((word, i) => (
      <span key={i} className="word">
        {word.split("").map((char, j) => (
          <span key={j} className="letter">{char}</span>
        ))}
      </span>
    ))}
  </h1>
  <a
    href="https://wa.me/7530094591?text=Hello%20Levro%20Team%2C%20I%20would%20like%20to%20get%20in%20touch."
    target="_blank"
    rel="noopener noreferrer"
    className="banner-btn"
  >
    Send a Message
  </a>
</div>


      </div>

      {/* Company Information */}
      <div className="company-info">
        <h2>Company Information</h2>
        <p>
          Levro is a forward‑thinking IT services startup based in Chennai, India,
          providing innovative IT solutions for businesses worldwide.
        </p>
        <p>
          We value transparency and customer satisfaction, and our team is
          always ready to assist you.
        </p>
      </div>
      {/* <Slideshow /> */}
      <ContactSlide />
      {/* Accordion Section */}
      <Accordion />

      {/* Contact Form */}
      <form className="contact-form">
        <h2>How can we help you?</h2>

        <div className="form-row">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>

        <div className="form-row">
          <input type="email" placeholder="Work Email" required />
          <input type="text" placeholder="Job Title" />
        </div>

        <div className="form-row">
          <input type="text" placeholder="Company" />
          <select required>
            <option value="">Select Country</option>
            <option value="IN">India</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
          </select>
        </div>

        <textarea placeholder="Message" rows="5"></textarea>

        <div className="form-check">
          <label>
            <input type="checkbox" required /> I confirm, I have read and agree to the Privacy Policy.
          </label>
        </div>

        <div className="form-check">
          <label>
            <input type="checkbox" /> I would like to receive alerts and updates.
          </label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <InfoSection />

      {/* Contact Methods */}
      <div className="contact-container">
  <div className="contact-methods">
    <div className="contact-icons">
      <a href="https://www.linkedin.com/company/levro" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="contact-icon" />
      </a>
      <a href="https://twitter.com/levro" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="Twitter" className="contact-icon" />
      </a>
      <a href="https://facebook.com/levro" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="Facebook" className="contact-icon" />
      </a>
    </div>
    {/* <h2>Reach Us Directly</h2>
    <p>
      Email: <a href="mailto:support@levro.com">support@levro.com</a>
    </p>
    <p>Phone: +91 98765 43210</p>
    <p>Office Hours: Mon–Fri, 9 AM – 6 PM IST</p> */}
  </div>
</div>
    </div>
  );
};

export default ContactUs;
