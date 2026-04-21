import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Helmet } from 'react-helmet';
import sepal from "../assets/Images/Members/sepal.jpeg";
import { useReveal } from "../hooks/useReveal";

const Platforms = () => {
  const rootRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  useReveal(rootRef);

  const zaptudeModules = [
    {
      id: "smart-exams",
      name: "SMART EXAMS",
      tagline: "Fully Customizable. Completely Secure.",
      description: "Deploy MCQ-based assessments with configurable subject sets, adaptive difficulty, time constraints, and randomized question delivery. Students operate in a controlled, distraction-free environment — anti-cheat protocols enforce integrity while auto-submission and instant scoring eliminate manual correction entirely.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
      ),
      bullets: ["Adaptive difficulty engine", "Anti-cheat controls", "Randomized question banks", "Instant auto-scored results"],
      doc: "/docs/zaptude-smart-exams.pdf",
      color: "sky"
    },
    {
      id: "performance-analytics",
      name: "PERFORMANCE ANALYTICS",
      tagline: "Don't Just See Marks. Understand Performance.",
      description: "Go beyond aggregate scores with a granular diagnostic layer. Track accuracy rates per topic, time-on-question behavior, subject-level strengths and gaps, and longitudinal improvement trends. Every data point feeds a continuous improvement cycle — turning raw attempt data into actionable intervention intelligence.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
      ),
      bullets: ["Subject-wise gap analysis", "Time-per-question tracking", "Longitudinal progress trends", "Readiness scoring dashboard"],
      doc: "/docs/zaptude-performance-analytics.pdf",
      color: "indigo"
    },
    {
      id: "student-management",
      name: "STUDENT MANAGEMENT",
      tagline: "Manage Every Student. Effortlessly.",
      description: "Onboard students individually or through bulk Excel import with auto-generated login credentials. Organize cohorts into skill-level batches, monitor engagement across assessment cycles, and manage the full student lifecycle from a single administrative interface — built to scale across large institutional populations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
      ),
      bullets: ["Bulk Excel onboarding", "Auto-credential generation", "Batch & cohort grouping", "Retest request workflows"],
      doc: "/docs/zaptude-student-management.pdf",
      color: "violet"
    },
    {
      id: "admin-control",
      name: "ADMIN CONTROL",
      tagline: "Full Control. Zero Complexity.",
      description: "A centralized command center for placement officers and institutional administrators. Gain complete visibility across all student batches — participation rates, pending attempts, readiness benchmarks, and performance patterns — with multi-institute architecture that keeps each organization's data environment fully isolated.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
      ),
      bullets: ["Multi-institute architecture", "Pending & completion tracking", "Batch performance reports", "Secure isolated environments"],
      doc: "/docs/zaptude-admin-control.pdf",
      color: "slate"
    }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(entry.target,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
          );
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0B0118] font-sans text-slate-100 min-h-screen w-full" ref={rootRef}>
      <Helmet>
        <title>Zaptude | Intelligent Exam &amp; Performance Platform</title>
        <meta name="description" content="Zaptude is a smart evaluation platform built for colleges and coaching centers. Transform exam data into actionable performance insights with our intelligent analytics." />
        <meta name="keywords" content="online exam platform, student performance analysis, Zaptude, Levrotec, exam analytics, college examination software, intelligent testing" />
      </Helmet>

      {/* Flagship Hero */}
      <section className="relative pt-12 pb-12 px-6 md:px-12 max-w-7xl mx-auto text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-violet-900/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <div className="reveal-section">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-[#B16BFF] text-[9px] font-bold tracking-[0.2em] uppercase mb-6">
            OUR FLAGSHIP PRODUCT
          </div>
          <h1 className="text-3xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-tight text-white">
            Introducing <span className="text-[#FFD700]">Zaptude</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Not just an exam tool — Zaptude is a complete intelligent evaluation platform built for colleges, coaching centers, and training institutes that want real performance insights, not just marks.
          </p>
        </div>
      </section>

      {/* CEO/CTO Note - Compact */}
      <section className="pb-12 px-6 md:px-12 reveal-section flex justify-center">
        <div className="w-full max-w-2xl p-0.5 bg-gradient-to-r from-violet-500/30 via-slate-800 to-transparent rounded-[24px]">
          <div className="bg-[#1A0B2E]/90 backdrop-blur-xl p-4 md:p-6 rounded-[22px] flex flex-col md:flex-row items-center gap-6 shadow-2xl shadow-purple-900/20 border border-violet-500/10">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFD700]/30 shrink-0 shadow-md">
              <img src={sepal} alt="Seepal Dharshan - Chief Technology Officer (CTO) of Levrotec Technologies, Architect of Zaptude" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-base md:text-lg italic font-light text-slate-200 mb-3 leading-relaxed">
                "Zaptude is an <span className="text-[#FFD700] font-bold not-italic underline decoration-[#FFD700]/30 underline-offset-8">intelligent exam platform</span> that doesn't just conduct tests — it transforms student performance data into meaningful learning insights."
              </p>
              <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-500 font-sans">Seepal Dharshan / CTO / Levrotec Core</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Module Suite */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto reveal-section">
        {/* Section Label */}
        <p className="text-[11px] tracking-[0.15em] uppercase text-slate-500 font-medium mb-7">System Modules</p>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-5 bg-[#0e0b1a] rounded-[20px] p-5 md:p-8 min-h-[420px]">

          {/* Left: Module List */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
            {zaptudeModules.map((module, index) => (
              <button
                key={module.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-3 md:py-3.5 rounded-xl transition-all text-left w-full border-[1.5px] select-none
                  ${activeTab === index
                    ? 'bg-[#1f1b36] border-[#7c3aed]'
                    : 'bg-transparent border-transparent hover:bg-[#1f1b36]/60'
                  }`}
              >
                <div className={`w-8 h-8 md:w-[38px] md:h-[38px] rounded-[10px] flex items-center justify-center text-sm md:text-base flex-shrink-0 transition-colors
                  ${activeTab === index ? 'bg-[#7c3aed]' : 'bg-white/5'}`}>
                  <div className="scale-75 md:scale-90">{module.icon}</div>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className={`text-[9px] md:text-[10px] tracking-[0.1em] uppercase font-medium leading-none mb-1 truncate
                    ${activeTab === index ? 'text-[#f5c518]' : 'text-slate-600'}`}>
                    Module 0{index + 1}
                  </span>
                  <span className={`text-[10px] md:text-[13px] font-semibold uppercase tracking-wide leading-tight
                    ${activeTab === index ? 'text-white' : 'text-slate-500'}`}>
                    {module.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detail Card */}
          <div className="bg-[#1a1630] rounded-2xl p-7 md:p-10 flex flex-col justify-center border border-white/5 min-h-[340px]">
            {/* Tag */}
            <span className="inline-block bg-[#f5c518]/15 text-[#f5c518] text-[11px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full mb-5 w-fit">
              {zaptudeModules[activeTab].tagline}
            </span>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-tight leading-tight mb-5">
              {zaptudeModules[activeTab].name}
            </h2>

            {/* Body */}
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-[480px]">
              {zaptudeModules[activeTab].description}
            </p>

            {/* Bullet Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {zaptudeModules[activeTab].bullets.map((chip, i) => (
                <span key={i} className="bg-[#7c3aed]/15 border border-[#7c3aed]/30 text-[#c8b9ff]/90 text-xs px-3 py-1.5 rounded-full font-medium">
                  {chip}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/919884661885?text=Hello%20Levrotec%20Team%2C%0A%0AI%20would%20like%20more%20details%20about%20the%20*${encodeURIComponent(zaptudeModules[activeTab].name)}*%20feature%20in%20Zaptude.%0A%0APlease%20share%20a%20detailed%20feature%20breakdown.%20Thank%20you!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#7c3aed] hover:bg-[#9d5cf6] text-white text-[12px] font-bold tracking-[0.1em] uppercase px-6 py-3 rounded-lg transition-colors text-center active:scale-95"
              >
                Feature Breakdown ↗
              </a>
              <a
                href={zaptudeModules[activeTab].doc}
                download
                className="inline-flex items-center gap-2 bg-transparent text-slate-400 text-[12px] font-bold tracking-[0.1em] uppercase px-6 py-3 rounded-lg border border-white/15 hover:border-white/35 hover:text-slate-200 transition-all active:scale-95"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Technical Docs
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-12 px-6 md:px-12 text-center reveal-section">
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-1 bg-[#FFD700] mx-auto mb-10 rounded-full"></div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.4em] mb-4">Enterprise Ready</p>
          <h2 className="text-2xl font-black uppercase text-white tracking-tight leading-relaxed max-w-2xl mx-auto">
            Ready to integrate <span className="text-[#FFD700]">Zaptude</span> into your <br className="hidden md:block" /> educational ecosystem?
          </h2>
          <div className="flex justify-center gap-6 mt-10">
            <a
              href="https://wa.me/919884661885?text=Hello%20Levrotec%20Team%2C%0A%0AI%20am%20reaching%20out%20on%20behalf%20of%20our%20institution%20to%20request%20access%20to%20the%20Zaptude%20platform.%0A%0A%F0%9F%8F%AB%20Institution%20Name%3A%20%0A%F0%9F%91%A4%20Contact%20Person%3A%20%0A%F0%9F%93%9E%20Phone%3A%20%0A%F0%9F%93%A7%20Email%3A%20%0A%F0%9F%93%8D%20Location%3A%20%0A%F0%9F%8E%93%20Type%20(College%2FCoaching%2FInstitute)%3A%20%0A%F0%9F%93%8A%20No.%20of%20Students%3A%20%0A%0APlease%20guide%20us%20on%20the%20next%20steps.%20Thank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-[#B16BFF] text-white rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-[#9D50BB] shadow-2xl shadow-purple-500/40 transition-all active:scale-95 inline-block text-center"
            >
              Request Institutional Access
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Platforms;
