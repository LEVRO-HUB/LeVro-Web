import { useEffect, useState } from "react";
import "./About.css";

import hero1 from "../assets/Images/hero1.avif";
import hero2 from "../assets/Images/hero2.avif";

import prem from "../assets/Images/Members/prem.jpeg";
import mathi from "../assets/Images/Members/mathi.png";

import cube from "../assets/Images/about_shapes/cube.png";
import triangle from "../assets/Images/about_shapes/triangle.png";
import spring from "../assets/Images/about_shapes/spring.png";
import hook from "../assets/Images/about_shapes/hook.png";

import story1 from "../assets/Images/story1.avif";
import story2 from "../assets/Images/story2.avif";
import story3 from "../assets/Images/story3.avif";

import clock from "../assets/Images/about_icons/clockicon.svg"; //
import right from "../assets/Images/about_icons/righticon.svg"; 
import office from "../assets/Images/about_icons/officeicon.svg"; 
import smile from "../assets/Images/about_icons/smileicon.svg"; 
import user from "../assets/Images/about_icons/Usericon.svg";
import top from "../assets/Images/about_icons/topicon.svg"; 


export default function About() {

  /* ---------- DATA FIRST ---------- */
  const STORY_CONTENT = [
    {
      quote: "Your growth is our success — we don’t just build solutions, we build lasting partnerships.",
      steps: [
        { no: "01", title: "Growing Together With Purpose", text: "At Levro Technologies, we believe growth is never one-sided. When you grow, we grow. Every project we take on is more than just development work — it’s a partnership built on trust, clarity, and long-term vision." },
        { no: "02", title: "Built on Understanding and Trust", text: "We started with a simple belief: businesses deserve digital solutions that truly support their goals. Too often, companies struggle with complex systems, poor communication, and services that feel disconnected from their real needs. We chose a different path — one focused on understanding first, building thoughtfully, and delivering consistently." },
        { no: "03", title: "Digital Solutions That Drive Real Results", text: "From web development and SEO optimization to scalable backend systems and custom applications, our mission is to create digital platforms that help you get noticed, generate leads, and build lasting impact." }
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
  const STORY_IMAGES = [story1, story2, story3];

  /* ---------- STATE ---------- */
  const [imageIndex, setImageIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

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
      <section className="about-hero">
        <div className="about-hero-container">

          {/* LEFT CONTENT */}
        <div className="about-hero-left exact-left">

          <div className="story-label">
            <span className="bar"></span>
            <span className="text">Levrotec Technologies</span>
          </div>

          <h1 className="hero-title">
            <span>About Levrotec Technologies </span>
            <span className="accent">
              Digital Solutions &<br />Web Development Experts
            </span>
          </h1>

          <p className="hero-sub">
            Levro Technologies is a results-driven digital solutions company specializing in web development, SEO optimization, 
            and scalable web applications for businesses worldwide. We help brands design, build, and grow high-performance digital platforms that generate measurable results.
          </p>

        </div>

          {/* RIGHT CONTENT */}
          <div className="about-hero-right">

            {/* IMAGE CARDS */}
            <div className="hero-cards">
              <div className="hero-card">
                <span className="chip">Tech Blog</span>
                <img src={hero1} alt="blog" />
              </div>

              <div className="hero-card">
                <span className="chip">Trends</span>
                <img src={hero2} alt="trends" />
              </div>
            </div>

            {/* STATS */}
            <div className="hero-stats">
              <div>
                <strong>100+</strong>
                <span>Projects</span>
              </div>
              <div>
                <strong>250+</strong>
                <span>Customers</span>
              </div>
              <div>
                <strong>2+</strong>
                <span>Years</span>
              </div>
              <div>
                <strong>50+</strong>
                <span>Members</span>
              </div>
            </div>

            {/* CTA */}
            <div className="hero-intro">
              <button className="watch-btn">▶ Watch Intro</button>
            </div>

          </div>
        </div>
      </section>

      <section className="cto-mini">
        <div className="cto-mini-card">
          <div className="cto-mini-avatar">
            <img src={prem} alt="CTO" />
          </div>

          <span className="cto-mini-label">Prem Rajeevan / COO</span>

          <p>
            Strategy isn’t just planning — it’s disciplined execution that drives real growth.
          </p>

        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="strategy-section fade-up">
          <div className="strategy-container">

            <div className="strategy-header">
              <span className="strategy-tag">OUR PORTFOLIO</span>
              <h2>
                Thoughtful Digital <span>Strategies</span>
              </h2>
            </div>

            <div className="strategy-cards">

              <div className="strategy-card primary">
                <div className="icon-wrap">
                  <img src={triangle} alt="Resolution" />
                </div>
                <small>RESOLUTION</small>
                <p>Our Experts Deliver All Solutions</p>
              </div>

              <div className="strategy-card">
                <div className="icon-wrap">
                  <img src={cube} alt="Reputable" />
                </div>
                <small>REPUTABLE</small>
                <p>Develop, Engross & Fulfill Service</p>
              </div>

              <div className="strategy-card">
              <div className="icon-wrap">
                <img src={hook} alt="Assistance" />
              </div>
                <small>ASSISTANCE</small>
                <p>24/7 Instantaneous Customer Service</p>
              </div>

              <div className="strategy-card">
                <div className="icon-wrap">
                  <img src={spring} alt="Reach" />
                </div>
                <small>REACH</small>
                <p>Conveniently Reachable Globally</p>
              </div>

            </div>
          </div>
        </section>

      {/* ================= WHY LEVRO ================= */}
      <section className="why-section fade-up">
        <h2>Strategic Digital Solutions by<span className="highlight"> Levro Technologies</span></h2>
        <div className="why-grid">

          <div className="why-item">
            <div className="why-icon"><img src={right} className="why-icon" alt="Easy setup" /></div>
            <h4>FAST & EFFICIENT PROJECT ONBOARDING</h4>
            <p>Our structured onboarding process ensures rapid project setup, streamlined planning, and efficient execution for web development and SEO projects.</p>
          </div>

          <div className="why-item">
            <div className="why-icon"><img src={user} className="why-icon" alt="Easy setup" /></div>
            <h4>SCALABLE DIGITAL ARCHITECTURE</h4>
            <p>We build scalable web applications and backend systems designed to grow with your business and support increasing traffic and operational demands.</p>
          </div>

          <div className="why-item">
            <div className="why-icon"><img src={top} className="why-icon" alt="Easy setup" /></div>
            <h4>EXPERIENCED WEB & SEO SPECIALISTS</h4>
            <p>Our team of skilled developers and SEO strategists brings industry expertise in building high-performance websites and data-driven digital growth strategies.</p>
          </div>

          <div className="why-item">
            <div className="why-icon"><img src={clock} className="why-icon" alt="Easy setup" /></div>
            <h4>SEAMLESS GLOBAL COLLABORATION</h4>
            <p>We work with international clients across multiple time zones, ensuring transparent communication and consistent project updates.</p>
          </div>

          <div className="why-item">
            <div className="why-icon"><img src={office} className="why-icon" alt="Easy setup" /></div>
            <h4>ENTERPRISE-GRADE INFRASTRUCTURE</h4>
            <p>Our development environment includes secure hosting, optimized servers, cloud integration, and performance monitoring for reliable digital solutions.</p>
          </div>

          <div className="why-item">
            <div className="why-icon"><img src={smile} className="why-icon" alt="Easy setup" /></div>
            <h4>CLIENT-CENTRIC DEVELOPMENT APPROACH</h4>
            <p>We align with your business goals and brand values to deliver custom digital solutions that reflect your vision and market positioning.</p>
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
                Your success is our success. That’s why we focus on long-term collaboration, scalable solutions, and performance-driven results. Whether you are launching a startup or expanding an established brand, we stand beside you as a trusted digital partner.
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
      <section className="cto-mini">
        <div className="cto-mini-card">
          <div className="cto-mini-avatar">
            <img src={mathi} alt="CTO" />
          </div>

          <span className="cto-mini-label">Mathivanan / MD</span>

          <p>
            We didn’t start with everything figured out — just a clear purpose and the drive to build something meaningful.
          </p>

        </div>
      </section>
    </div>
  );
}
