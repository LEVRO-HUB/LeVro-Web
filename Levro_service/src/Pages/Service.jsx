import "./Service.css";
import Slideshow from "../components/Slideshow";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import sepal from "../assets/Images/Members/sepal.png";
import img1 from "../assets/Images/img1.png";
import img2 from "../assets/Images/img2.png";
import img9 from "../assets/Images/img11.jfif";
import img4 from "../assets/Images/img10.jfif";
import img5 from "../assets/Images/img12.jfif";
import gif6 from "../assets/Images/gif6.gif";
import gif7 from "../assets/Images/gif8.gif";
import gif8 from "../assets/Images/gif7.gif";

function Service() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does it take to build a project?",
      answer:
        "Timelines depend on the project scope, but most projects are completed within 4-8 weeks, with regular updates along the way.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes. We provide ongoing support, maintenance, and scaling after launch to keep everything running smoothly.",
    },
    {
      question: "Can you work with existing systems?",
      answer:
        "Absolutely. We integrate with your existing tools and systems without disrupting your workflow.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. Data security is a priority, and we follow industry-standard practices to protect your information.",
    },
  ];

    useEffect(() => {
    const sections = document.querySelectorAll(".service-block");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const section = entry.target;
        const isBackend = section.id === "backend";

        const tl = gsap.timeline();

        if (isBackend) {
          const columns = section.querySelectorAll(".feature-column");

          tl.to(columns, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.25,
            ease: "power3.out",
          });
        } else {
          const heading = section.querySelector("h2");
          const text = section.querySelector("p");
          const cards = section.querySelectorAll(".linear-card");

          if (heading) {
            tl.to(heading, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            });
          }

          if (text) {
            tl.to(text, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            }, "-=0.3");
          }

          if (cards.length) {
            tl.to(cards, {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateY: 14,
              rotateX: 6,
              duration: 0.9,
              stagger: 0.25,
              ease: "power3.out",
            }, "-=0.2");
          }
        }

        observer.unobserve(section);
      });
    }, { threshold: 0.2 });

    sections.forEach((section) => {
      const isBackend = section.id === "backend";
      const isERP = section.id === "erp";

      if (isBackend) {
        gsap.set(section.querySelectorAll(".feature-column"), {
          opacity: 0,
          y: 40,
        });
      } else {
        gsap.set(section.querySelectorAll("h2, p, .linear-card"), {
          opacity: 0,
          y: 40,
          scale: 0.95,
        });
      }

      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-container">
      <section className="services-hero">
        <h1><button id="heading">VALUE-ADDED SERVICES</button></h1>

        <div className="servicepills">
          <button onClick={() => scrollTo("web")}>Web Development</button>
          <button onClick={() => scrollTo("uiux")}>UI / UX Design</button>
          <button onClick={() => scrollTo("backend")}>Backend Services</button>
          <button onClick={() => scrollTo("erp")}>ERP Solutions</button>
          <button onClick={() => scrollTo("backend")}>Custom Apps</button>
        </div>
      </section>

      <section className="cto-mini">
        <div className="cto-mini-card">
          <div className="cto-mini-avatar">
            <img src={sepal} alt="CTO" />
          </div>

          <span className="cto-mini-label">Seepal Dharsan / CTO</span>

          <p>
            We don’t just create solutions-<span> We build trust and grow together with a bigger vision.</span>”
          </p>

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
        <h2>How do <span className="highlight">ERP Solutions</span> streamline your entire business?</h2>
        <p>Our ERP solutions unify all your core business processes into a single, integrated system, improving operational efficiency, real-time visibility, and decision-making across departments.</p>
        <Slideshow /> 
      </section>

      <section id="backend" className="service-block">
        <div className="dual-feature">
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
        </div>
        </section>

        <section className="services-faq">
          <h2>
            Frequently <span className="highlight">Asked Questions</span>
          </h2>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <div className="faq-header" onClick={() => toggleFAQ(index)}>
                  <h4>{faq.question}</h4>
                  <span className="faq-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                {activeIndex === index && <p>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </section>
    </div>
  );
}

export default Service;