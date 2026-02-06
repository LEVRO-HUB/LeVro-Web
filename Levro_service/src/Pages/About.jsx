import { useEffect, useRef, useState } from "react";
import "./About.css";

import hero1 from "../assets/images/hero1.avif";
import hero2 from "../assets/images/hero2.avif";
import hero3 from "../assets/images/hero3.avif";

import about1 from "../assets/images/about1.avif";
import about2 from "../assets/images/about2.avif";
import about3 from "../assets/images/about3.avif";
import about4 from "../assets/images/about4.avif";

import story1 from "../assets/images/story1.avif";
import story2 from "../assets/images/story2.avif";
import story3 from "../assets/images/story3.avif";
import story4 from "../assets/images/story4.avif";

export default function About() {

  /* ---------- DATA FIRST ---------- */
  const STORY_CONTENT = [
    {
      quote: "We don’t just ship features — we build clarity. Every pixel and every line of code is made to earn trust.",
      body: [
        "Levro started from a problem we experienced ourselves—good ideas slowed down by complex tools, unclear processes, and systems that were hard to maintain.",
        "That led us to build Levro differently. We keep technology simple, practical, and dependable by bringing clean design and solid engineering together to create solutions that work well and scale smoothly.",
        "As a growing startup, we work closely with our clients, listening carefully and building alongside them."
      ],
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
  const STORY_IMAGES = [story1, story2, story3, story4];

  /* ---------- STATE ---------- */
  const [heroIndex, setHeroIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [storyPaused, setStoryPaused] = useState(false);

  /* ---------------- HERO SLIDESHOW ---------------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  /* ---------------- Story slide ---------------- */
  useEffect(() => {
    if (storyPaused) return;

    const timer = setInterval(() => {
      setImageIndex((i) => (i + 1) % STORY_IMAGES.length);
      setStepIndex((i) => (i + 1) % STORY_STEPS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [storyPaused]);

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
          className="hero-bg"
          key={heroIndex}
          style={{ backgroundImage: `url(${HERO_IMAGES[heroIndex]})` }}
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>
            We Build Digital Products <br />
            <span>That People Trust</span>
          </h1>

          <p>
            From strategy to scalable engineering, we help teams turn ideas
            into high-impact digital experiences.
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
        <h2>Path & Promise</h2>
        <p>
          We’re all about progress you can trust — blending creativity, strategy, and engineering to deliver solutions that scale.Future‑ready, built with clarity, and designed to last.
          Our promise is simple: trust in progress, powered by creativity and smart engineering. We build solutions that grow with you and stand the test of time.
        </p>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="page-section overview-section fade-up section-plain">
        <h2>Who We Are</h2>

        <div className="overview-cards">
          <div className="overview-card">
            <img src={about1} alt="" />
            <h3>Who We Are</h3>
            <p>Focused builders crafting reliable digital systems.</p>
          </div>

          <div className="overview-card">
            <img src={about2} alt="" />
            <h3>What We Do</h3>
            <p>Scalable solutions for real business problems.</p>
          </div>

          <div className="overview-card">
            <img src={about3} alt="" />
            <h3>How We Build</h3>
            <p>Design clarity + strong engineering.</p>
          </div>

          <div className="overview-card">
            <img src={about4} alt="" />
            <h3>Working With You</h3>
            <p>Transparent, collaborative, dependable.</p>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section
        id="our-story"
        className="page-section story-section fade-up"
      >
        <div
          className="story-glass"
          onMouseEnter={() => setStoryPaused(true)}
          onMouseLeave={() => setStoryPaused(false)}
        >

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
      <section className="page-section values-section fade-up section-light">
        <span className="section-label">CORE VALUES</span>
        <h2>What We Stand For</h2>

        <div className="values-list">
          {[
            ["01", "Build with purpose"],
            ["02", "Stay transparent"],
            ["03", "Think like users"],
            ["04", "Ship quality"],
            ["05", "Keep improving"],
          ].map(([no, text]) => (
            <div className="value-item" key={no}>
              <span>{no}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="page-section team-section fade-up section-soft">
        <span className="section-label">OUR PEOPLE</span>
        <h2>People Behind Levro</h2>

        <div className="team-grid">
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" />
            <h4>Tharun Devakumar</h4>
            <p>CEO</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" />
            <h4>Seepal Dharsan</h4>
            <p>CTO</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" />
            <h4>Mathivanan</h4>
            <p>CMO</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" />
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
        <h2>Ready to Build Something Exceptional?</h2>
        <button className="btn-primary">Contact Levro</button>
      </section>

    </div>
  );
}
