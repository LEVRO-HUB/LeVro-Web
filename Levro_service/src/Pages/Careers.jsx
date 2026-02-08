// src/pages/Careers.jsx
import "./Careers.css";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

/* ASSETS */
import heroBg from "../assets/images/careers-TorB.gif";
import internshipImg from "../assets/images/careers-work.jpg";
import growthImg from "../assets/images/careers-collaboration.jfif";
import techGif from "../assets/images/careers-growth.gif";
import ctaBg from "../assets/images/careers-hero.jfif";

function CareerForm() {
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
    };
  
    return (
      <form className="career-form" onSubmit={handleSubmit}>
        {!submitted ? (
          <>
            <div className="form-group">
              <input placeholder="First Name" required />
            </div>
  
            <div className="form-group">
              <input placeholder="Last Name" required />
            </div>
  
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
  
            <div className="form-group">
              <input placeholder="Phone Number" />
            </div>
  
            <div className="form-group">
              <input placeholder="City" />
            </div>
  
            <div className="form-group">
              <input placeholder="State" />
            </div>
  
            <div className="form-group full">
              <input placeholder="LinkedIn / Portfolio URL" />
            </div>
  
            <div className="form-group full file-upload">
              <label>
                Upload Resume (PDF)
                <input type="file" accept=".pdf,.doc,.docx" />
              </label>
            </div>
  
            <div className="form-group full">
              <textarea placeholder="Tell us about yourself" />
            </div>
  
            <button className="cta-primary" type="submit">
              Submit Application
            </button>
          </>
        ) : (
          <div className="submit-success">
            <h3>Thanks for applying 👋</h3>
            <p>
              We don’t accept applications through the website yet.<br />
              Please send your resume to{" "}
              <a href="mailto:careers@levro.tech">careers@levro.tech</a>.
            </p>
          </div>
        )}
      </form>
    );
  }

function Careers() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Floating image animation
    gsap.utils.toArray(".float-media").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 120, rotate: -4 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    
    // CTA background parallax (subtle)
gsap.to(".services-cta", {
    backgroundPosition: "50% 60%",
    ease: "none",
    scrollTrigger: {
      trigger: ".services-cta",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.3,
    },
  });

  // Micro-stagger paragraphs inside career text blocks
gsap.utils.toArray(".career-text").forEach((block) => {
    const paragraphs = block.querySelectorAll("p");
  
    gsap.fromTo(
      paragraphs,
      { opacity: 0, y: 22 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          once: true,
        },
      }
    );
  });

  // Animate highlight underline on scroll
gsap.utils.toArray(".highlight").forEach((el) => {
    gsap.to(el, {
      "--underline": 1,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      onStart: () => {
        el.style.setProperty("--active", 1);
        el.querySelector?.(":after");
      },
    });
  });
  
  
// Magnetic button effect
document.querySelectorAll(".magnetic").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
  
      gsap.to(btn, {
        x: x * 0.25,
        y: y * 0.25,
        duration: 0.3,
        ease: "power3.out",
      });
    });
  
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "elastic.out(1, 0.4)",
      });
    });
  });
  
    // Text sections
    gsap.utils.toArray(".career-block").forEach((block) => {
      gsap.fromTo(
        block,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="careers-container">
      {/* ================= HERO ================= */}
      <section
  className="careers-hero new-hero"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  <div className="hero-content">
    <h1>
      Build a <span className="highlight">career</span>, not just a job
    </h1>

    <p>
    We’re building a new-age product and engineering company — and we’re looking for curious,
    driven people to grow with us.
    </p>

    <div className="services-pills">
      <button onClick={() => scrollTo("grow-smarter-faster")}>Why LeVro</button>
      <button onClick={() => scrollTo("journey")}>Your Journey</button>
      <button onClick={() => scrollTo("apply")}>Apply</button>
    </div>
  </div>

  <div className="hero-lines"></div>
</section>

      {/* ================= WHY ================= */}
      <section id="why" className="career-block center">
        <h2>
          Why <span className="highlight">LeVro</span> works
        </h2>
        <p>
          We combine ownership, learning, and freedom — so your growth is never
          blocked by hierarchy.
        </p>
      </section>

      {/* ================= LEFT IMAGE ================= */}
      <section id="journey" className="career-split">
  <div className="float-media">
    <img src={internshipImg} alt="Internship experience" />
  </div>

  <div className="career-text">
    <h2>
      Internships that <span className="highlight">matter</span>
    </h2>

    <p>
      At LeVro, our vision is simple — create meaningful success for everyone
      who builds with us. We believe potential is shaped by mindset,
      curiosity, and ambition — not just grades.
    </p>

    <p>
      Our internship program runs for <strong>3 months</strong>, with guided
      learning, real projects, and mentorship tailored to your interests in
      technology and product development.
    </p>

    <p>
      High-performing interns often extend their journey to
      <strong> 6–12 months</strong>, building stronger portfolios and deeper
      real-world experience.
    </p>

    <p>
      The journey concludes with a <strong>capstone project</strong> —
      a real product designed to showcase everything you’ve learned at LeVro.
    </p>
  </div>
</section>


      {/* ================= RIGHT IMAGE ================= */}
      <section className="career-split reverse">
  <div className="float-media">
    <img src={growthImg} alt="Career growth" />
  </div>

 <section id="grow-smarter-faster">
  <div className="career-text">
     <h2>
      Grow <span className="highlight">faster</span>, smarter
    </h2>

    <p>
      Careers aren’t linear — and we don’t expect them to be.
      Whether you’re starting fresh, switching paths, or returning
      after a break, we focus on <strong>what you can build today</strong>.
    </p>

    <p>
      At LeVro, growth is hands-on. You’ll sharpen your skills by
      solving real problems, collaborating with small focused teams,
      and taking ownership early.
    </p>

    <p>
      No rigid ladders. No outdated timelines.
      Just clear progress, meaningful feedback, and room to evolve.
    </p>
    </div>
    </section>
</section>

      {/* ================= LEFT IMAGE (GIF) ================= */}
      <section className="career-split">
  <div className="float-media">
    <img src={techGif} alt="Work culture" />
  </div>

  <div className="career-text">
    <h2>
      Work on <span className="highlight">real systems</span>
    </h2>

    <p>
      From design-driven interfaces to scalable backend services,
      we don’t build demos — we ship production-ready systems.
    </p>

    <p>
      You’ll collaborate across design, engineering, and product,
      learning how modern digital systems are actually built,
      deployed, and improved.
    </p>

    <p>
      Every contribution matters — whether it’s a UI decision,
      a performance fix, or a system-level improvement.
    </p>

    <Link to="/contact" className="cta-primary magnetic">
      View Opportunities
    </Link>
  </div>
</section>

      {/* ================= FORM ================= */}
      <section id="apply" className="career-form-section">
        <h2>
          Apply to <span className="highlight">LeVro</span>
        </h2>
        <p>
          Share your details — if there’s a match, we’ll reach out.
        </p>

        <CareerForm />
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        className="services-cta"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <h2>
          Let’s build something <span className="highlight">great</span> together
        </h2>
        <p>
          If you’re excited by ownership and impact, you’ll fit right in.
        </p>

        <div className="cta-buttons">
          <Link to="/#contact" className="cta-primary">
            Talk to Us
          </Link>
          <Link to="/#about" className="cta-secondary">
            About LeVro
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Careers;
