import React from "react";
import "./ContactUs.css";
import bannerImg from "../assets/images/Banner.jpg"; // Ensure you have an image at this path

const ContactUs = () => {
  return (
    <div className="contact-us">

      {/* Top Banner */}
      <div className="top-banner">
        {/* <img src={bannerImg} alt="Startup Logo" className="banner-img" /> */}
        <h1>Contact Our Startup</h1>
        <p>We’re here to help with support, pricing, and more.</p>
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

      {/* Sections Grid */}
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

      {/* Contact Methods */}
      <div className="contact-methods">
        <h2>Reach Us Directly</h2>
        <p>
          Email:{" "}
          <a href="mailto:support@levro.com">support@levro.com</a>
        </p>
        <p>Phone: +91 98765 43210</p>
        <p>Office Hours: Mon–Fri, 9 AM – 6 PM IST</p>
      </div>

      {/* Contact Form + Options side by side */}
      <div className="contact-layout">
        {/* Left: Form */}
        <div className="contact-form-container">
          <h2>Get in Touch with Our Sales Team</h2>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" name="firstName" placeholder="First name" required />
              <input type="text" name="lastName" placeholder="Last name" required />
            </div>

            <div className="form-row">
              <input type="email" name="workEmail" placeholder="Work email" required />
            </div>

            <div className="form-row">
              <textarea name="message" placeholder="Your message" rows="4"></textarea>
            </div>

            <div className="form-row">
              <select name="country" required>
                <option value="">Select country</option>
                <option value="US">United States</option>
                <option value="IN">India</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
              </select>
            </div>

            <p className="consent-text">
              By submitting my personal data, I consent to Levro collecting, processing,
              and storing my information in accordance with the Levro Privacy Notice.
            </p>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        {/* Right: Contact Options
        <div className="contact-options">
          <div className="option">
            <h3>Product & Account Support</h3>
            <p>Always open for business. Find answers to common questions in our knowledge base.</p>
            <a href="#">Visit Help Center →</a>
          </div>

          <div className="option">
            <h3>Talk with Us</h3>
            <p>
              Give us a call at <strong>1-888-851-9456</strong><br />
              Available Mon–Fri, 8am–6pm ET
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactUs;
