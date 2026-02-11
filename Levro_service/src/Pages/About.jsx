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
            <span className="text">Levro Technologies</span>
          </div>

          <h1 className="hero-title">
            <span>Your Vision</span>
            <span>Our Expertise</span>
            <span className="accent">
              Get Noticed.<br />Generate Leads.
            </span>
          </h1>

          <p className="hero-sub">
            We help brands design, build, and scale digital products
            that people trust and businesses rely on.
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
        <h2>Strategic <span className="highlight">Digital Solutions</span></h2>
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
            <p>4 years of experience and a large network of Tech professionals.</p>
          </div>

          <div className="why-item">
            <div className="why-icon"><img src={clock} className="why-icon" alt="Easy setup" /></div>
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
