import React from "react";
import ContactSlide from "../components/ContactSlide";
import "./ContactUs.css";
import Accordion from "../components/Accordion";
import linkedin from "../assets/Images/linkedin.png";
import twitter from "../assets/Images/twitter.png";
import facebook from "../assets/Images/facebook.png";
import InfoSection from "../components/InfoSection";
import hari from "../assets/Images/Members/hari.png";


const ContactUs = () => {
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form[0].value;
    const lastName = form[1].value;
    const email = form[2].value;
    const jobTitle = form[3].value;
    const company = form[4].value;
    const country = form[5].value;
    const message = form[6].value;

    const whatsappMessage = `Hello Levro Team,
  
Name: ${firstName} ${lastName}
Email: ${email}
Job Title: ${jobTitle}
Company: ${company}
Country: ${country}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(`https://wa.me/9884661885?text=${encodedMessage}`, "_blank");
  };
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

      </div>

      {/* Company Information */}
      <div className="company-info">
        <div className="top-right">
          <h2 className="animated-heading">
            {"Who We Are!".split(" ").map((word, i) => (
              <span key={i} className="word">
                {word.split("").map((char, j) => (
                  <span key={j} className="letter">{char}</span>
                ))}
              </span>
            ))}
          </h2>
        </div>
        <p>
          Founded with a vision to empower businesses through technology, Levro Technologies combines modern development frameworks,
          performance-driven SEO strategies, and user-centric design to deliver scalable digital solutions. Our expertise spans custom
          website development, enterprise applications, backend systems, and search engine optimization services.
        </p>
      </div>
      {/* <Slideshow /> */}
      <ContactSlide />
      <section className="cto-mini">
        <div className="cto-mini-card">
          <div className="cto-mini-avatar">
            <img src={hari} alt="levrotec CFO" />
          </div>

          <span className="cto-mini-label">Hariharan / CFO</span>

          <p>
            For us, it’s never just about delivering a project. It’s about building something that lasts.
          </p><br />
          <a
            href="https://wa.me/9884661885?text=Hello%20Levro%20Team%2C%20I%20would%20like%20to%20get%20in%20touch."
            target="_blank"
            rel="noopener noreferrer"
            className="banner-btn"
          >
            Ping a Message
          </a>
        </div>
      </section>
      {/* Contact Form */}
      <div className="contact-flex">
        <div className="contact-left">
          <Accordion />
        </div>

        <div className="contact-right">
          <form id="contact-form" className="contact-form" onSubmit={handleWhatsAppSubmit}>
            <h3>How can we help you?</h3>

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
        </div>
      </div>

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
