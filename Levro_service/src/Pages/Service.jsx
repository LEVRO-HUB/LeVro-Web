import "./Service.css";
import Slideshow from "../components/Slideshow";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img9 from "../assets/images/img11.jfif";
import img4 from "../assets/images/img10.jfif";
import img5 from "../assets/images/img12.jfif";
import gif6 from "../assets/images/gif6.gif";
import gif7 from "../assets/images/gif8.gif";
import gif8 from "../assets/images/gif7.gif";
import { Link } from "react-router-dom";

function Service() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".service-block").forEach((section) => {
      const heading = section.querySelector("h2");
      const text = section.querySelector("p");
      const cards = section.querySelectorAll(".linear-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      });

      if (heading) {
        tl.fromTo(
          heading,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          }
        );
      }

      if (text) {
        tl.fromTo(
          text,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        );
      }

      if (cards.length) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 14,
            duration: 0.9,
            stagger: 0.25,
            ease: "power3.out",
          },
          "-=0.2"
        );
      }
    });

    gsap.fromTo(
      ".why-choose-us",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-choose-us",
          start: "top 80%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      ".feature-column",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".dual-feature",
          start: "top 75%",
          once: true,
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="services-container">
      <section className="services-hero">
        <h1><button id="heading">VALUE-ADDED SERVICES</button></h1>

        <div className="services-pills">
          <button onClick={() => scrollTo("web")}>Web Development</button>
          <button onClick={() => scrollTo("uiux")}>UI / UX Design</button>
          <button onClick={() => scrollTo("backend")}>Backend Services</button>
          <button onClick={() => scrollTo("erp")}>ERP Solutions</button>
          <button onClick={() => scrollTo("backend")}>Custom Apps</button>
        </div>
      </section>

    <section id="web" className="service-block">
      <h2>How does <span className="highlight">Web Development</span> help your business?</h2>
      <p>
        We build high-performance, scalable websites that strengthen your brand presence, attract and retain customers, and support business growth through speed, reliability, and modern design.
      </p>
      <div className="linear-stack">
        <div className="linear-card">
          <img src={img4} alt="Preview 1" />
        </div>
        <div className="linear-card">
          <img src={img5} alt="Preview 2" />
        </div>
        <div className="linear-card">
          <img src={img9} alt="Preview 3" />
        </div>
      </div>
    </section>
 
      <section id="uiux" className="service-block">
        <svg viewBox="0 0 1440 100"><path fill="#f7f7ff" d="M0,40 C240,80 480,0 720,20 960,40 1200,80 1440,40 L1440,0 L0,0 Z" /></svg>
        <h2>How can <span className="highlight">UI/UX</span> design That Turns Visitors Into Loyal Customers?</h2>
        <p>We design intuitive, user-centric interfaces that enhance usability, build trust, and keep users engaged—driving long-term loyalty.</p>
        <div className="linear-stack">
          <div className="linear-card">
            <img src={gif6} alt="Preview 1" />
          </div>
          <div className="linear-card">
            <img src={gif7} alt="Preview 2" />
          </div>
          <div className="linear-card">
            <img src={gif8} alt="Preview 3" />
          </div>
        </div>      
      </section>

      <section id="erp" className="service-block">
        <svg viewBox="0 0 1440 100"><path fill="#f7f7ff" d="M0,40 C240,80 480,0 720,20 960,40 1200,80 1440,40 L1440,0 L0,0 Z" /></svg>
        <h2>How do <span className="highlight">ERP Solutions</span> streamline your entire business?</h2>
        <p>Our ERP solutions unify all your core business processes into a single, integrated system, improving operational efficiency, real-time visibility, and decision-making across departments.</p>
        <Slideshow /> 
      </section>

      <section id="backend" className="dual-feature">
        <div className="feature-column">
          <h2>Backend Services</h2>
          <p>
            We build secure, scalable backend architectures that ensure smooth
            operations, fast performance, and reliable data flow across all systems.
          </p>

          <div className="feature-card">
            <img src={img1} alt="Backend preview" />
          </div>
        </div>

        <div className="feature-divider" />

        <div className="feature-column">
          <h2>App Development</h2>
          <p>
            Our mobile and web applications streamline workflows, enhance user
            experience, and help teams operate efficiently while supporting growth.
          </p>
          <div className="feature-card">
            <img src={img2} alt="App preview" />
          </div>
        </div>
      </section>

      <section className="services-cta">
        <h2>Ready to build <span className="highlight">something</span> impactful?</h2>
        <p>
          Let’s turn your ideas into scalable, high-performance digital solutions.
          Talk to us and take the next step for your business.
        </p>

        <div className="cta-buttons">
          <Link to="/about" className="cta-primary">
            Who We Are?
          </Link>

          <Link to="/contact" className="cta-secondary">
            Contact Our Team
          </Link>
        </div>
      </section>
      <section className="services-faq">
        <h2>Frequently <span className="highlight">Asked Questions</span>!</h2>

        <div className="faq-list">
          <div className="faq-item">
            <h4>How long does it take to build a project?</h4>
            <p>
              Timelines depend on the project scope, but most projects are completed within 4-8 weeks, with regular updates along the way.
            </p>
          </div>

          <div className="faq-item">
            <h4>Do you provide post-launch support?</h4>
            <p>
              Yes. We provide ongoing support, maintenance, and scaling after launch to keep everything running smoothly.
            </p>
          </div>

          <div className="faq-item">
            <h4>Can you work with existing systems?</h4>
            <p>
              Absolutely. We integrate with your existing tools and systems without disrupting your workflow.
            </p>
          </div>

          <div className="faq-item">
            <h4>Is my data secure?</h4>
            <p>
              Yes. Data security is a priority, and we follow industry-standard practices to protect your information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
