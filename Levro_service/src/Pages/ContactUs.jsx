import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Helmet } from 'react-helmet';
import hari from "../assets/Images/Members/hari.png";
import facebook from "../assets/Images/facebook.png";
import { useReveal } from "../hooks/useReveal";

const ContactUs = () => {
  const rootRef = useRef(null);
  useReveal(rootRef);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form[0].value;
    const lastName = form[1].value;
    const email = form[2].value;
    const jobTitle = form[3].value;
    const company = form[4].value;
    const country = form[5].value;
    const message = form[6].value;

    const whatsappMessage = `Hello Levrotec Team,
  
Name: ${firstName} ${lastName}
Email: ${email}
Job Title: ${jobTitle}
Company: ${company}
Country: ${country}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919884661885?text=${encodedMessage}`, "_blank");
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(entry.target,
            { opacity: 0, scale: 0.98 },
            { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
          );
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white font-sans text-slate-900 min-h-screen w-full relative overflow-hidden pb-20" ref={rootRef}>
      <Helmet>
        <title>Connect with Levrotec | Build Your Digital Future</title>
        <meta name="description" content="Ready to start your next software project? Connect with Levrotec for expert ERP solutions, custom software development, and technical consulting." />
        <meta name="keywords" content="contact Levrotec, software inquiry, business ERP consulting, Chennai IT support, technical partnership" />
      </Helmet>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-50 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Hero Header */}
      <section className="relative pt-12 pb-12 px-6 md:px-12 max-w-7xl mx-auto text-center reveal-section">
        <h1 className="text-3xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter uppercase leading-[0.9] text-slate-800">
          Initialize <span className="text-sky-500">Communication</span>
        </h1>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 font-medium leading-relaxed">
          Ready to engineer the future of your digital infrastructure? Connect with our intelligence core and start your project today.
        </p>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </section>

      {/* Intro Stats/Text */}
      <section className="py-8 px-6 md:px-12 max-w-7xl mx-auto reveal-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="text-xs font-bold text-sky-600 uppercase tracking-[0.3em] mb-2">Protocol: Identification</div>
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-sky-500 drop-shadow-sm">WHO WE ARE!</h2>
            <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
              Founded with a vision to empower businesses through technology, Levrotec combines modern development frameworks, performance-driven SEO strategies, and user-centric design to deliver scalable digital solutions.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-5 md:p-6 rounded-2xl shadow-sm">
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Status</span>
                <span className="text-xs font-mono font-bold text-emerald-600">ONLINE</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Response Time</span>
                <span className="text-xs font-mono font-bold text-sky-600">&lt; 12 HOURS</span>
              </div>
              <div className="flex justify-between items-center text-slate-500">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Encryption</span>
                <span className="text-xs font-mono font-bold text-indigo-600">256-BIT SECURE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CFO Mini Note */}
      <section className="py-8 px-6 md:px-12 reveal-section flex justify-center">
        <div className="w-full max-w-2xl p-0.5 bg-gradient-to-r from-sky-200 via-slate-100 to-transparent rounded-[24px]">
          <div className="bg-white/90 backdrop-blur-xl p-4 md:p-6 rounded-[22px] flex flex-col md:flex-row items-center gap-6 shadow-sm transition-all hover:shadow-2xl">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-sky-500/30 shrink-0 shadow-md">
              <img src={hari} alt="Hariharan - Chief Financial Officer (CFO) of Levrotec Technologies, Chennai" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-base md:text-lg italic font-light text-slate-700 mb-3 leading-relaxed">
                "For us, it’s never just about delivering a project. It’s about building something that <span className="text-sky-500 font-bold not-italic underline decoration-sky-200 underline-offset-8">lasts</span>."
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-4 justify-center md:justify-start">
                <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400">Hariharan / CFO / Levrotec Intelligence</div>
                <a href="https://wa.me/919884661885" target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1.5 border border-sky-200 text-sky-500 text-[9px] font-bold uppercase tracking-widest rounded-full hover:bg-sky-50 transition-colors">Ping a Message</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto reveal-section flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-[32px] shadow-2xl shadow-slate-200/50 overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-slate-200"></div>
              <div className="w-2 h-2 rounded-full bg-slate-200"></div>
            </div>

            <h3 className="text-2xl font-black uppercase mb-10 tracking-tight text-slate-700 text-center">How can we help you?</h3>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all placeholder:text-slate-400" required />
                <input type="text" placeholder="Last Name" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all placeholder:text-slate-400" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" placeholder="Work Email" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all placeholder:text-slate-400" required />
                <input type="text" placeholder="Job Title" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all placeholder:text-slate-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Company" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all placeholder:text-slate-400" />
                <select className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all text-slate-600 h-[56px] appearance-none cursor-pointer" required>
                  <option value="">Select Country</option>
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                </select>
              </div>

              <textarea placeholder="Message" rows="4" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all placeholder:text-slate-400"></textarea>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group/label">
                  <input type="checkbox" className="hidden peer" required />
                  <div className="w-4 h-4 mt-1 border border-slate-200 rounded flex-shrink-0 peer-checked:bg-sky-500 peer-checked:border-sky-500 transition-all flex items-center justify-center text-[10px] text-white font-black">✓</div>
                  <span className="text-[11px] text-slate-500 font-medium">I confirm, I have read and agree to the Privacy Policy.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group/label">
                  <input type="checkbox" className="hidden peer" />
                  <div className="w-4 h-4 mt-1 border border-slate-200 rounded flex-shrink-0 peer-checked:bg-sky-500 peer-checked:border-sky-500 transition-all flex items-center justify-center text-[10px] text-white font-black">✓</div>
                  <span className="text-[11px] text-slate-500 font-medium">I would like to receive alerts and updates.</span>
                </label>
              </div>

              <div className="flex justify-center pt-4">
                <button type="submit" className="px-12 py-4 bg-violet-700 hover:bg-violet-800 text-white font-black uppercase text-[12px] tracking-[0.2em] rounded-2xl transition-all shadow-lg shadow-violet-700/20 active:scale-[0.98]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
