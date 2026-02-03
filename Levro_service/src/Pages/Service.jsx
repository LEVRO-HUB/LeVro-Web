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

function Services() {
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
        <h1>Value-Added Services</h1>

        <div className="services-pills">
          <button onClick={() => scrollTo("web")}>Web Development</button>
          <button onClick={() => scrollTo("uiux")}>UI / UX Design</button>
          <button onClick={() => scrollTo("backend")}>Backend Services</button>
          <button onClick={() => scrollTo("erp")}>ERP Solutions</button>
          <button onClick={() => scrollTo("backend")}>Custom Apps</button>
        </div>
      </section>

    <section id="web" className="service-block">
      <h2>How does Web Development help your business?</h2>
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
        <h2>How can UI/UX design boost customer engagement and turn visitors into loyal customers?</h2>
        <p>By designing intuitive, user-centric, and visually appealing interfaces that make interactions effortless, build trust, and keep users engaged. A well-crafted UI/UX improves usability, enhances brand credibility, and encourages users to return—ultimately fostering long-term customer loyalty.</p>
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
        <h2>How do ERP Solutions streamline your entire business?</h2>
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

      <section className="why-choose-us">
        <div className="why-content">
          <h2>Why businesses choose Levro Technologies</h2>
          <p className="why-sub">
            We don’t just build software — we build reliable, scalable solutions
            that help businesses grow faster and operate smarter.
          </p>
          <div className="why-points">
            <div>
              <h4>Business-first mindset</h4>
              <p>Every solution is aligned with real business goals, not just code.</p>
            </div>

            <div>
              <h4>Scalable & secure architecture</h4>
              <p>Built to handle growth, performance, and security from day one.</p>
            </div>

            <div>
              <h4>Clean UI & great experience</h4>
              <p>Designs that users love and teams find easy to maintain.</p>
            </div>

            <div>
              <h4>Long-term support</h4>
              <p>We stay with you beyond launch for updates, scaling, and support.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="services-cta">
        <h2>Ready to build something impactful?</h2>
        <p>
          Let’s turn your ideas into scalable, high-performance digital solutions.
          Talk to us and take the next step for your business.
        </p>

        <div className="cta-buttons">
          <button className="cta-primary">Get a Free Consultation</button>
          <button className="cta-secondary">Contact Our Team</button>
        </div>
      </section>
      <section className="services-faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">
          <div className="faq-item">
            <h4>How long does it take to build a project?</h4>
            <p>
              Timelines depend on complexity, but most projects are delivered within
              4–8 weeks with clear milestones and regular updates.
            </p>
          </div>

          <div className="faq-item">
            <h4>Do you provide post-launch support?</h4>
            <p>
              Yes. We offer long-term support, maintenance, and scaling assistance
              after launch to ensure smooth operations.
            </p>
          </div>

          <div className="faq-item">
            <h4>Can you work with existing systems?</h4>
            <p>
              Absolutely. We integrate seamlessly with your current tools, platforms,
              and workflows without disrupting your operations.
            </p>
          </div>

          <div className="faq-item">
            <h4>Is my data secure?</h4>
            <p>
              Security is a priority. We follow industry-standard practices for data
              protection, authentication, and infrastructure security.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
