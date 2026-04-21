import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useReveal } from "../hooks/useReveal";

// Asset Imports
import customSoft from "../assets/Images/Services/custom_soft.png";
import erp from "../assets/Images/Services/erp.png";
import webMobile from "../assets/Images/Services/web_mobile.png";
import consulting from "../assets/Images/Services/consulting.png";
const IMG_SUPPORT = "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop";

const Services = () => {
  const rootRef = useRef(null);
  useReveal(rootRef);

  const services = [
    {
      id: "custom-dev",
      title: "Custom Software Development",
      badge: "Built for you. Built to last.",
      desc: "Every business is unique — and your software should be too. Levrotec builds fully custom web and mobile applications tailored exactly to your business logic, workflows, and goals. From idea to deployment, we handle everything with precision and speed.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      img: customSoft
    },
    {
      id: "erp-solutions",
      title: "ERP Solutions & Implementation",
      badge: "One system. Total control.",
      desc: "Struggling with disconnected systems and manual processes? Levrotec implements powerful ERP solutions that unify your finance, HR, inventory, and operations into one intelligent platform — giving you full visibility and control over your entire business.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      img: erp
    },
    {
      id: "web-mobile-dev",
      title: "Web & Mobile App Development",
      badge: "Beautiful interfaces. Powerful backends.",
      desc: "Your digital presence starts with a great product. Levrotec designs and develops high-performance web and mobile applications that are fast, secure, and user-friendly — built to engage your customers and grow your business online.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      img: webMobile
    },
    {
      id: "consulting",
      title: "IT Consulting & Digital Strategy",
      badge: "Strategy first. Technology second.",
      desc: "Not sure where to start your digital transformation? Levrotec's consulting team works closely with you to understand your business challenges, map out the right technology roadmap, and guide you toward smart, scalable digital decisions — without the guesswork.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      img: consulting
    },
    {
      id: "support-maintenance",
      title: "Product Support & Maintenance",
      badge: "We stay with you. Always.",
      desc: "Launching a product is just the beginning. Levrotec provides ongoing support, bug fixes, performance monitoring, and feature upgrades to keep your software running at its best — so you can focus on your business while we take care of the technology.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      img: IMG_SUPPORT
    }
  ];

  return (
    <div className="bg-white relative overflow-hidden py-12" ref={rootRef}>
      <Helmet>
        <title>IT Services | Custom Software, ERP &amp; Web Solutions</title>
        <meta name="description" content="Levrotec provides professional IT services including custom software development, ERP systems, and web/mobile apps. Build a scalable digital foundation for your business." />
        <meta name="keywords" content="IT services Chennai, custom software, ERP implementation, web development, mobile app development, digital transformation" />
      </Helmet>

      {/* Subtle Background Accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-sky-50/50 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-indigo-50/30 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 reveal-section">
          <div className="inline-block px-4 py-1.5 bg-sky-50 rounded-full text-sky-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            WHAT WE DO
          </div>
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-slate-800 mb-6">
            ARCHITECTING<br />
            <span className="text-sky-500">SERVICE SOLUTIONS</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Beyond products, we bring the technical expertise and hands-on experience to help your business grow, scale, and succeed in the digital world.
          </p>
        </div>

        {/* Zigzag Services */}
        <div className="space-y-12">
          {services.map((service, i) => {
            const isEven = i % 2 === 1;
            return (
              <section key={service.id} className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16 reveal-section`}>
                
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative group">
                  <div className={`absolute inset-0 bg-sky-500/5 rounded-[24px] transform transition-transform duration-700 group-hover:scale-105 ${isEven ? 'md:-rotate-3 group-hover:-rotate-1' : 'md:rotate-3 group-hover:rotate-1'}`}></div>
                  <div className="relative aspect-[16/9] rounded-[24px] overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/30 bg-white max-w-md mx-auto">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="inline-flex items-center gap-4">
                    <div className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/20">
                      {service.icon}
                    </div>
                    <div className="h-px w-12 bg-slate-200 hidden md:block"></div>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-3xl font-black text-slate-800 mb-3 leading-tight uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-sky-50 text-sky-600 text-[10px] font-bold uppercase tracking-widest rounded-lg mb-4">
                      {service.badge}
                    </div>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div>
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center gap-3 text-sky-500 font-black uppercase text-xs tracking-[0.2em] group/btn transition-colors hover:text-sky-600 cursor-pointer"
                    >
                      Learn More
                      <span className="transform transition-transform duration-500 group-hover/btn:translate-x-2">→</span>
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
