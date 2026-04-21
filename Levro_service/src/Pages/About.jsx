import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Helmet } from 'react-helmet';
import prem from "../assets/Images/Members/prem.jpeg";
import mathi from "../assets/Images/Members/mathi.png";
import story1 from "../assets/Images/story1.avif";
import story2 from "../assets/Images/story2.avif";
import story3 from "../assets/Images/story3.avif";
import { useReveal } from "../hooks/useReveal";

const About = () => {
  const rootRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  const STORY_IMAGES = [story1, story2, story3];
  useReveal(rootRef);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((i) => (i + 1) % STORY_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(entry.target,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
          );
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white font-sans text-slate-900 min-h-screen w-full relative overflow-hidden" ref={rootRef}>
      <Helmet>
        <title>About Levrotec | Leadership Team – CEO Tharun Devakumar, CTO Seepal Dharshan, COO Prem Rajeevan, CMO Mathivanan, CFO Hariharan </title>
        <meta name="description" content="Meet the Levrotec leadership team — CEO Tharun Devakumar, CMO Mathivanan, CTO Seepal Dharshan, COO Prem Rajeevan, and CFO Hariharan. Chennai-based IT company building smart software products and ERP solutions." />
        <meta name="keywords" content="Levrotec team, Tharun Devakumar CEO Levrotec, Seepal Dharshan CTO Levrotec, Prem Rajeevan COO Levrotec, Mathivanan CMO Levrotec, Hariharan CFO Levrotec, Levrotec leadership, Chennai IT company founders" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal-section">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-[9px] font-bold tracking-[0.2em] uppercase mb-6">
              WHO WE ARE
            </div>
            <h1 className="text-3xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter uppercase text-slate-800">
              The <span className="text-sky-500">Levrotec</span> <br />Story
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium max-w-xl">
              Levrotec is a Chennai-based product-driven IT company on a mission to build smart, scalable software that solves real business and educational challenges. Founded with a vision to make technology more meaningful, we develop powerful software products, ERP solutions, IT services, and custom software — all engineered to deliver real results. Our flagship product, Zaptude, is already transforming how institutes conduct exams and analyze student performance across India.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 py-8 border-y border-slate-100">
              <div>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">1</div>
                <div className="text-[8px] md:text-[9px] text-slate-400 uppercase tracking-widest font-bold">Flagship Product</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">3+</div>
                <div className="text-[8px] md:text-[9px] text-slate-400 uppercase tracking-widest font-bold">Service Verticals</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">100%</div>
                <div className="text-[8px] md:text-[9px] text-slate-400 uppercase tracking-widest font-bold">Product-First</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">∞</div>
                <div className="text-[8px] md:text-[9px] text-slate-400 uppercase tracking-widest font-bold">Innovation</div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-sky-400/5 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50">
              <img src={story1} alt="foundation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-sky-600 uppercase tracking-[0.3em] font-bold">Operational_Node_Alpha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership 1 (COO) */}
      <section className="py-8 px-6 md:px-12 reveal-section flex justify-center">
        <div className="w-full max-w-2xl p-0.5 bg-gradient-to-r from-sky-200 via-slate-100 to-transparent rounded-[24px]">
          <div className="bg-white/90 backdrop-blur-xl p-4 md:p-6 rounded-[22px] flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-sky-500/30 shrink-0 shadow-md">
              <img src={prem} alt="Prem Rajeevan - Chief Operating Officer (COO) of Levrotec Technologies" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-base md:text-lg italic font-light text-slate-700 mb-3 leading-relaxed">
                "Strategy isn’t just planning — it’s <span className="text-sky-500 font-bold not-italic underline decoration-sky-200 underline-offset-8">disciplined execution</span> that drives real, scalable growth in a digital-first economy."
              </p>
              <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400">Prem Rajeevan / COO / Levrotec Core</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto reveal-section hidden md:block">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-slate-800 text-center">Designed for <span className="text-sky-500">Impact</span></h2>
          <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "INNOVATIVE", text: "We don't follow trends — we build them. Levrotec creates software products from the ground up, designed to solve problems that matter and deliver value from day one.", icon: "⚡", color: "text-sky-500", bg: "bg-sky-50" },
            { title: "REPUTABLE", text: "Built on transparency, honest delivery, and client trust. At Levrotec, every commitment we make is one we keep — from project timelines to product quality.", icon: "💎", color: "text-indigo-500", bg: "bg-indigo-50" },
            { title: "SECURE", text: "Security is not an afterthought at Levrotec. Every product and solution we build follows industry-standard security practices — keeping your data and your users always protected.", icon: "🛡️", color: "text-violet-500", bg: "bg-violet-50" },
            { title: "END-TO-END SOLUTIONS", text: "From custom software development to ERP implementation and IT consulting — Levrotec is your single technology partner for building, scaling, and managing your digital ecosystem.", icon: "🏗️", color: "text-sky-500", bg: "bg-sky-50" },
            { title: "RESULTS-DRIVEN", text: "We measure our success by yours. Every solution Levrotec delivers is focused on generating measurable outcomes — better efficiency, smarter decisions, and real business growth.", icon: "🎯", color: "text-indigo-500", bg: "bg-indigo-50" },
            { title: "DEDICATED SUPPORT", text: "We're not just a vendor — we're your technology partner. Levrotec stays with you beyond delivery, offering hands-on support, training, and continuous improvements to everything we build.", icon: "🤝", color: "text-violet-500", bg: "bg-violet-50" },
          ].map((val, i) => (
            <div key={i} className="group p-8 bg-white border border-slate-100 rounded-[32px] transition-all hover:bg-slate-50/50 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/50 h-full flex flex-col">
              <div className={`w-12 h-12 ${val.bg} rounded-xl flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform shadow-sm flex-shrink-0`}>{val.icon}</div>
              <h3 className={`text-xl font-black uppercase mb-3 tracking-tight text-slate-800 group-hover:${val.color} transition-colors`}>{val.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-4">{val.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Slider Section */}
      <section className="py-16 bg-slate-50 relative reveal-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-white shadow-2xl shadow-slate-300/50">
            <img src={STORY_IMAGES[imageIndex]} alt="story" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-sky-500/5 mix-blend-overlay"></div>
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-100 shadow-xl">
              <div className="text-[10px] font-bold text-sky-600 uppercase tracking-widest mb-2">Internal Log: History</div>
              <div className="text-slate-800 font-bold text-sm leading-relaxed">"Your growth is our success — we don’t just build solutions, we build lasting partnerships."</div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold text-sky-600 uppercase tracking-[0.4em] mb-6">Our Evolution</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="text-2xl font-black text-sky-200 group-hover:text-sky-500 transition-colors">01</div>
                  <div>
                    <h4 className="text-xl font-black uppercase mb-2 text-slate-800">Growing with Purpose</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Partnerships built on trust, clarity, and long-term vision. Every project is a step towards a bigger future.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-2xl font-black text-sky-200">02</div>
                  <div>
                    <h4 className="text-xl font-black uppercase mb-2 text-slate-800">Built on Understanding</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">We choose a path focused on understanding first, building thoughtfully, and delivering consistently.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-2xl font-black text-sky-200">03</div>
                  <div>
                    <h4 className="text-xl font-black uppercase mb-2 text-slate-800">Proven Results</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">From web architecture to AI optimization, our mission is to drive real-world impact for your brand.</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-sky-500 text-white font-bold uppercase text-[11px] tracking-widest rounded-full transition-all hover:bg-sky-600 shadow-lg shadow-sky-500/20 active:scale-95"
            >
              Connect With Us
            </button>
          </div>
        </div>
      </section>

      {/* Leadership 2 (CMO) */}
      <section className="py-8 px-6 md:px-12 reveal-section flex justify-center">
        <div className="w-full max-w-2xl p-0.5 bg-gradient-to-r from-indigo-200 via-slate-100 to-transparent rounded-[24px]">
          <div className="bg-white/90 backdrop-blur-xl p-4 md:p-6 rounded-[22px] flex flex-col md:flex-row items-center gap-6 shadow-sm transition-all hover:shadow-2xl">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-500/30 shrink-0 shadow-lg">
              <img src={mathi} alt="Mathivanan - Chief Marketing Officer (CMO) of Levrotec Technologies" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-base md:text-lg italic font-light text-slate-700 mb-3 leading-relaxed">
                "We didn’t start with everything figured out — just a <span className="text-slate-900 font-black not-italic px-2 py-1 bg-indigo-50 rounded-lg">clear purpose</span> and the drive to build something meaningful."
              </p>
              <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-indigo-500">Mathivanan / CMO / Levrotec Intelligence</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
