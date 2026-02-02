import React from "react";
import "./ContactUs.css";
import bannerImg from "../assets/images/Banner.jpg"; // Ensure you have an image at this path

const ContactUs = () => {
  return (
    <div className="contact-us">

      {/* Top Banner Container */}
      <div className="top-banner">
        {/*<img src={bannerImg} alt="Startup Logo" className="banner-img" />*/}
        <h1>Contact Our Startup</h1>
        <p>We’re here to help with support, pricing, and more.</p>
      </div>

      {/* Sections in 3-column grid */}
      <div className="sections-grid">
        <div className="section technical-support">
          <h2>Technical Support</h2>
          <p>Already using our products and experiencing technical issues?</p>
          <ul>
            <li><a href="#">Find helpful resources →</a></li>
            <li><a href="#">Request deletion of personal data →</a></li>
            <li><a href="#">Raise a support ticket →</a></li>
          </ul>
        </div>

        <div className="section pricing-support">
          <h2>Pricing, Billing & Licensing</h2>
          <p>Have a pricing question or need help managing your account?</p>
          <ul>
            <li><a href="#">Find answers →</a></li>
            <li><a href="#">Contact us →</a></li>
          </ul>
        </div>

        <div className="section product-advice">
          <h2>Product Advice</h2>
          <p>Evaluating our products and need advice before you buy?</p>
          <ul>
            <li><a href="#">View product demos →</a></li>
            <li><a href="#">Contact us →</a></li>
          </ul>
        </div>

        <div className="section general-inquiries">
          <h2>General Inquiries</h2>
          <p>Have a question or want to say hi?</p>
          <ul>
            <li><a href="#">Supplier resources →</a></li>
          </ul>
        </div>

        <div className="section feedback">
          <h2>Feedback</h2>
          <p>Let us know how we're doing.</p>
          <ul>
            <li><a href="#">Submit feedback →</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
