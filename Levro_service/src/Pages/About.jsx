import { useEffect, useRef, useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";

import hero1 from "../assets/Images/hero1.avif";
import hero2 from "../assets/Images/hero2.avif";
import hero3 from "../assets/Images/hero3.avif";
import tharun from "../assets/Images/tharun.jpeg";
import sepal from "../assets/Images/sepal.jpeg";
import prem from "../assets/Images/prem.jpeg";

import story1 from "../assets/Images/story1.avif";
import story2 from "../assets/Images/story2.avif";
import story3 from "../assets/Images/story3.avif";
import user from "../assets/Images/Usericon.svg";
import top from "../assets/Images/topicon.svg"; 
// import clock from "../assets/Images/clockicon.svg"; //
import right from "../assets/Images/righticon.svg"; 
import office from "../assets/Images/officeicon.svg"; 
import smile from "../assets/Images/smileicon.svg"; 



export default function About() {

  /* ---------- DATA FIRST ---------- */
  const STORY_CONTENT = [
    {
      quote: "We don’t just ship features — we build clarity. Every pixel and every line of code is made to earn trust.",
      steps: [
        { no: "01", title: "Start with the real problem", text: "We listen first — understanding users, goals, and constraints before we design anything." },
        { no: "02", title: "Design for speed & simplicity", text: "Clean UI, clean flows. We remove friction so your product feels effortless to use." },
        { no: "03", title: "Engineer to scale", text: "Reliable architecture, secure foundations, and performance that holds up when you grow." }
      ]
    }
  ];
  const prevStory = () => {
    setImageIndex((i) => (i - 1 + STORY_IMAGES.length) % STORY_IMAGES.length);
    setStepIndex((i) => (i - 1 + STORY_STEPS.length) % STORY_STEPS.length);
  };
  const nextStory = () => {
    setImageIndex((i) => (i + 1) % STORY_IMAGES.length);
    setStepIndex((i) => (i + 1) % STORY_STEPS.length);
  };


  /* ---------- DERIVED CONSTANTS ---------- */
  const STORY_STEPS = STORY_CONTENT[0].steps;
  const HERO_IMAGES = [hero1, hero2, hero3];
  const STORY_IMAGES = [story1, story2, story3];

  /* ---------- STATE ---------- */
  const [heroIndex, setHeroIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  /* ---------------- HERO SLIDESHOW ---------------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  /* ---------------- Story slide ---------------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((i) => (i + 1) % STORY_IMAGES.length);
      setStepIndex((i) => (i + 1) % STORY_STEPS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);


  /* ---------------- SCROLL ANIMATION ---------------- */
  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div
          className="hero-bg is-active"
          style={{ backgroundImage: `url(${HERO_IMAGES[heroIndex]})` }}
        />

        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>
            We Build Digital Products <span>That People Trust</span>
          </h1>

          <p>
            Turning ideas into scalable digital products.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Explore Our Work</button>
            <button
              className="btn-outline"
              onClick={() =>
                document
                  .getElementById("our-story")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* ================= PATH & PROMISE ================= */}
      <section className="page-section section-light fade-up path-promise">
        <div className="path-promise-overlay" />
        <h2>Path & <span className="promise">Promise</span></h2>
        <p className="path">
          Our path is simple: understand the problem, build with clarity, and deliver solutions you can rely on today and scale tomorrow.
        </p>
        <p className="promises">
          Our promise is consistency: simple design, strong foundations, and systems that scale without complexity.
        </p>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="page-section overview-section fade-up section-plain">
        <h2>Who We Are!</h2>

        <div className="overview-cards">
          <div className="overview-card">
            <img src="https://www.google.com/imgres?q=corporation%20images&imgurl=https%3A%2F%2Fwww.lawdepot.com%2Fimages%2FlawLibrary%2FArticles%2Fshareholders-versus-directors-in-a-corporation.jpeg&imgrefurl=https%3A%2F%2Fwww.lawdepot.com%2Fus%2Fresources%2Fbusiness-articles%2Fshareholders-versus-directors-in-a-corporation%2F&docid=0bjhxoKeL1GcsM&tbnid=9PTolCoxAl41DM&vet=12ahUKEwirvM2ah8eSAxVqRmcHHfbWJJYQnPAOegQIUBAB..i&w=2257&h=1505&hcb=2&ved=2ahUKEwirvM2ah8eSAxVqRmcHHfbWJJYQnPAOegQIUBAB" alt="" />
            <h3>Our Team</h3>
            <p>We are a focused team of designers and engineers building dependable digital products for growing businesses.</p>
          </div>

          <div className="overview-card">
            <img src="https://www.google.com/imgres?q=corporation%20images&imgurl=https%3A%2F%2Fwww.thebritishacademy.ac.uk%2Fmedia%2Fimages%2FSkyscrapers-City-of-London.2e16d0ba.fill-768x432.jpg&imgrefurl=https%3A%2F%2Fwww.thebritishacademy.ac.uk%2Fprogrammes%2Ffuture-of-the-corporation%2F&docid=7vDzTd98CJrLWM&tbnid=8oT8_ZZZ8itrCM&vet=12ahUKEwirvM2ah8eSAxVqRmcHHfbWJJYQnPAOegQIHxAB..i&w=768&h=432&hcb=2&ved=2ahUKEwirvM2ah8eSAxVqRmcHHfbWJJYQnPAOegQIHxAB" alt="" />
            <h3>What We Deliver</h3>
            <p>We create scalable web and mobile solutions that solve real business and user problems.</p>
          </div>

          <div className="overview-card">
            <img src="https://www.google.com/imgres?q=corporation%20images&imgurl=https%3A%2F%2Fwww.financialpoise.com%2Fwp-content%2Fuploads%2F2020%2F04%2Fgroup-of-people-in-a-meeting-1367272-1024x682.jpg&imgrefurl=https%3A%2F%2Fwww.financialpoise.com%2Fcorporation-management-formation-taxation%2F&docid=9grO4w7YMW4GXM&tbnid=w3xxFs6Jtj_L3M&vet=12ahUKEwirvM2ah8eSAxVqRmcHHfbWJJYQnPAOegQIGRAB..i&w=1023&h=682&hcb=2&ved=2ahUKEwirvM2ah8eSAxVqRmcHHfbWJJYQnPAOegQIGRAB" alt="" />
            <h3>Our Approach</h3>
            <p>We combine thoughtful design with strong engineering to deliver fast, reliable, and maintainable systems.</p>
          </div>

          <div className="overview-card">
            <img src="https://www.google.com/imgres?q=corporation%20images&imgurl=https%3A%2F%2Fmpm.ph%2Fwp-content%2Fuploads%2F2013%2F05%2Fcorporate-documents.jpg&imgrefurl=https%3A%2F%2Fmpm.ph%2Fhow-to-register-a-corporation%2F&docid=xowNGjlXKRTa1M&tbnid=sqbMDX6Bb0luYM&vet=12ahUKEwirvM2ah8eSAxVqRmcHHfbWJJYQnPAOegQIVBAB..i&w=1920&h=959&hcb=2&ved=2ahUKEwirvM2ah8eSAxVqRmcHHfbWJJYQnPAOegQIVBAB" alt="" />
            <h3>How We Work With You</h3>
            <p>We collaborate closely, communicate clearly, and build solutions aligned with your goals.</p>
          </div>
        </div>
      </section>
      {/* ================= WHY LEVRO ================= */}
      <section className="why-section fade-up">
        <div className="why-grid">

          <div className="why-item">
            <div className="why-icon"><img src={right} className="why-icon" alt="Easy setup" /></div>
            <h4>EASY SET UP</h4>
            <p>Your team works from our headquarters and is ready to go within weeks.</p>
          </div>

          <div className="why-item">
            <div className="why-icon"><img src={user} className="why-icon" alt="Easy setup" /></div>
            <h4>SCALEABLE</h4>
            <p>Start nimble and grow your team as your company does.</p>
          </div>

          <div className="why-item">
            <div className="why-icon"><img src={top} className="why-icon" alt="Easy setup" /></div>
            <h4>TOP TALENT</h4>
            <p>12 years of experience and a large network of English-speaking professionals.</p>
          </div>

          <div className="why-item">
            {/* <div className="why-icon"><img src={clock} className="why-icon" alt="Easy setup" /></div> */}
            <h4>SAME TIME ZONE</h4>
            <p>We share your office hours for smooth collaboration.</p>
          </div>

          <div className="why-item">
            <div className="why-icon"><img src={office} className="why-icon" alt="Easy setup" /></div>
            <h4>SOLID INFRASTRUCTURE</h4>
            <p>Modern office space with reliable connectivity.</p>
          </div>

          <div className="why-item">
            <div className="why-icon"><img src={smile} className="why-icon" alt="Easy setup" /></div>
            <h4>YOUR CULTURE</h4>
            <p>Your team becomes an extension of your company and values.</p>
          </div>

        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section
        id="our-story"
        className="page-section story-section fade-up"
      >
        <div className="story-glass">

          {/* LEFT */}
          <div className="story-left">
            <div className="story-image">

              {/* MINI CHIPS */}
              <div className="story-chips">
                <span className="chip">Planning</span>
                <span className="chip">Design</span>
                <span className="chip">Sprint</span>
              </div>

              <img src={STORY_IMAGES[imageIndex]} alt="" />

              <div className="story-nav">
                <button onClick={prevStory}>‹</button>
                <button onClick={nextStory}>›</button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="story-right">
            <h2 className="story-heading">OUR STORY</h2>

            {/* QUOTE CARD */}
            <div className="story-quote-card">
              <span className="quote-mark">“</span>
              <p>{STORY_CONTENT[0].quote}</p>
            </div>

            {/* MAIN GLASS CARD */}
            <div className="story-glass-card">
              <p>
                Levro started from a problem we experienced ourselves — good ideas slowed
                down by complex tools and unclear systems. We chose a different path:
                clean design, strong engineering, and reliable scale.
              </p>
            </div>

            {/* STEP CARD */}
            <div className="story-step-card" key={stepIndex}>
              <span className="step-no">{STORY_STEPS[stepIndex].no}</span>

              <div>
                <strong>{STORY_STEPS[stepIndex].title}</strong>
                <p>{STORY_STEPS[stepIndex].text}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="story-cta-card">
              <span>Want a product that feels premium?</span>
              <button className="story-outline-btn">Talk to Us</button>
            </div>

          </div>
        </div>
      </section>
      {/* ================= CORE VALUES ================= */}
      <section className="company-values-section fade-up">
        {/* PINK OVERLAY */}
        <div className="company-values-overlay"></div>

        {/* WAVE OVERLAY */}
        <svg
          className="wave-overlay"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.12)"
            d="M0,160L60,144C120,128,240,96,360,90.7C480,85,600,107,720,138.7C840,171,960,213,1080,202.7C1200,192,1320,128,1380,96L1440,64L1440,0L0,0Z"
          />
          <path
            fill="rgba(255,255,255,0.08)"
            d="M0,192L80,170.7C160,149,320,107,480,112C640,117,800,171,960,181.3C1120,192,1280,160,1360,144L1440,128L1440,0L0,0Z"
          />
        </svg>

        {/* CONTENT */}
        <div className="company-values-content">
          {/* LEFT */}
          <div className="values-left">
            <h2>
              Our <br /> Company <br /> Values
            </h2>
          </div>

          {/* RIGHT */}
          <div className="values-right">
            <div className="value-box">
              <h4>Transparency</h4>
              <p>
                Openness with our team & clients. We raise issues and
                provide solutions promptly.
              </p>
            </div>

            <div className="value-box">
              <h4>Commitment</h4>
              <p>
                Our word and hard work over everything else.
                Our clients and vision are our guiding beacons.
              </p>
            </div>

            <div className="value-box">
              <h4>Self Improvement</h4>
              <p>
                Never stop learning, never stop evolving
                into who we want to be.
              </p>
            </div>

            <div className="value-box">
              <h4>Over Deliver</h4>
              <p>
                Deliver more value than expected.
                Every day, over every delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="page-section team-section fade-up section-soft">
        <h2>People Behind <span className="highlight">Levro</span></h2>

        <div className="team-grid">
          <div className="team-card">
            <img src={tharun} />
            <h4>Tharun Devakumar</h4>
            <p>CEO</p>
          </div>
          <div className="team-card">
            <img src={sepal} />
            <h4>Seepal Dharsan</h4>
            <p>CTO</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" />
            <h4>Mathivanan</h4>
            <p>CMO</p>
          </div>
          <div className="team-card">
            <img src={prem} />
            <h4>Prem Rajeevan</h4>
            <p>COO</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" />
            <h4>Hariharan</h4>
            <p>CFO</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
        <section className="page-section cta-section fade-up">
          {/* Background */}
          <div className="cta-bg-image" />
          <div className="cta-bg-overlay" />

          {/* Floating shapes */}
          <div className="cta-shapes" aria-hidden="true">
            <span className="s1" />
            <span className="s2" />
            <span className="s3" />
            <span className="s4" />
            <span className="s5" />
          </div>

          {/* Content */}
          <h2>
            Ready to build <span className="highlight">something</span> Exceptional?
          </h2>

          <div className="cta-buttons">
            {/* <Link to="/services" className="cta-primary">Our Services</Link>
            <Link to="/contact" className="cta-secondary">Contact Our Team</Link> */}
          </div>
        </section>
    </div>
  );
}
