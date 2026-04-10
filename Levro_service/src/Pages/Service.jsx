import "./Service.css";
import Slideshow from "../components/Slideshow";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import sepal from "../assets/Images/Members/sepal.jpeg";
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
      question: "What is included in your web development services?",
      answer:
        "Our web development services include responsive website design, frontend and backend development, performance optimization, SEO-ready architecture, secure hosting setup, and scalable web application development tailored to business goals.",
    },
    {
      question: "Do you build SEO-friendly websites?",
      answer:
        "Yes. Every website we develop is built with SEO best practices, including clean URL structure, optimized heading hierarchy, fast loading speed, mobile-first design, structured data markup, and search engine–friendly coding standards.",
    },
    {
      question: "What is SEO optimization and why is it important?",
      answer:
        "SEO optimization is the process of improving a website’s visibility in search engines through technical improvements, keyword targeting, content strategy, and link building. Effective SEO helps businesses increase organic traffic, generate qualified leads, and achieve long-term digital growth.",
    },
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO is a long-term strategy. Most businesses begin seeing measurable improvements in rankings and traffic within 3–6 months, depending on competition, industry, and current website performance.",
    },
    {
      question: "Can you provide both web development and SEO services together?",
      answer:
        "Absolutely. Levrotec Technologies offers integrated web development and SEO optimization services, ensuring your website is built for performance, scalability, and high search engine visibility from day one.",
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
          const heading = section.querySelector("h3");
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
        gsap.set(section.querySelectorAll("h3, p, .linear-card"), {
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
        <h2><button id="heading">PROFESSIONAL WEB DEVELOPMENT & STRATEGIC SEO SERVICES</button></h2>

        <div className="servicepills">
          <button onClick={() => scrollTo("web")}>Web Development Services</button>
          <button onClick={() => scrollTo("uiux")}>UI/UX Design Solutions</button>
          <button onClick={() => scrollTo("backend")}>Backend Development Services</button>
          <button onClick={() => scrollTo("erp")}>ERP Software Solutions</button>
          <button onClick={() => scrollTo("backend")}>Custom Web & Mobile Applications</button>
        </div>
      </section>

      <section className="cto-mini">
        <div className="cto-mini-card">
          <div className="cto-mini-avatar">
            <img src={sepal} alt="levrotec CTO" />
          </div>

          <span className="cto-mini-label">Seepal Dharsan / CTO</span>

          <p>
            We don’t just create solutions-<span> We build trust and grow together with a bigger vision.</span>”
          </p>

        </div>
      </section>
        
    <section id="web" className="service-block">
      <h3>How Professional <span className="highlight">Web Development Drives</span>Business Growth</h3>
      <p>
        We build high-performance, scalable websites that enhance brand visibility, improve user experience, increase conversions, and support long-term digital growth through speed, security, and modern architecture.
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
        <h3><span className="highlight">UI/UX</span> Design Services That Turn Visitors into Loyal Customers</h3>
        <p>Levrotec Technologies delivers professional UI/UX design services focused on creating intuitive, user-centered digital experiences that increase engagement, reduce bounce rates, and drive higher conversion rates. Our responsive interface design ensures seamless performance across web and mobile platforms, helping businesses build trust and long-term customer loyalty.</p>
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
        <h3>Enterprise <span className="highlight">ERP Solutions</span> for Integrated Business Management</h3>
        <p>Our custom ERP development services integrate finance, inventory, HR, sales, and operations into a unified platform, enabling businesses to automate processes, improve efficiency, and scale with confidence in competitive global markets.</p>
        <Slideshow /> 
      </section>

      <section id="backend" className="service-block">
        <div className="dual-feature">
          <div className="feature-column">
            <h3>Backend Services</h3>
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
            <h3>App Development</h3>
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
          <h3>
            Frequently Asked Questions About<span className="highlight"> Web Development & SEO Optimization</span>
          </h3>

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