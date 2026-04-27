import tharun from "../assets/Images/Members/tharun.jpeg";
import softwareMonolith from "../assets/Images/software_monolith.png";
import { Helmet } from 'react-helmet';
import { useReveal } from "../hooks/useReveal";
import { useRef } from "react";

const Home = () => {
  const rootRef = useRef(null);
  useReveal(rootRef);
  return (
    <div className="bg-white font-sans text-slate-900 min-h-screen w-full relative overflow-hidden" ref={rootRef}>
      <Helmet>
        <title>Levrotec | Software Products, ERP Solutions &amp; IT Services</title>
        <meta name="description" content="Levrotec is a leader in scalable ERP solutions and IT services. We build smart software products to help businesses grow faster and operate smarter." />
        <meta name="keywords" content="software products, ERP solutions, IT services, Levrotec, Chennai IT company, enterprise software, custom software development" />
      </Helmet>

      {/* Main Hero Section - monolith Layout */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-32 pb-12 flex flex-col lg:flex-row items-center gap-10 mt-12">

        {/* Left Content */}
        <div className="w-full lg:w-[60%] flex flex-col items-start z-10 relative">

          <div className="text-sky-600 text-xs font-bold tracking-[0.3em] uppercase mb-8 flex items-center gap-2">
            <span className="w-8 h-px bg-sky-500"></span>
            SMART SOFTWARE PRODUCTS & ERP SOLUTIONS
          </div>

          <div className="flex flex-col mb-10">
            <h1 className="text-3xl md:text-[54px] font-bold leading-tight tracking-tight text-slate-800">
              Powering Business with
            </h1>
            <div className="relative inline-block my-2">
              <h1 className="text-5xl md:text-[110px] font-black leading-[0.8] tracking-tighter text-sky-500 uppercase">
                INTELLIGENT
              </h1>
            </div>
            <h1 className="text-4xl md:text-[90px] font-black leading-[0.8] tracking-tighter text-slate-900 uppercase mt-4">
              SOFTWARE PRODUCTS
            </h1>
          </div>

          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-[650px] mb-12 font-medium">
            Levrotec delivers cutting-edge software products, ERP solutions, and IT services designed to streamline operations, boost productivity, and accelerate digital growth for businesses of all sizes.
          </p>

          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <button
              onClick={() => document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-black uppercase text-[12px] tracking-[0.2em] px-10 py-5 rounded-sm transition-all shadow-xl shadow-sky-500/20 active:scale-95"
            >
              EXPLORE OUR PRODUCTS
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:flex items-center gap-3 text-slate-800 font-black uppercase text-[12px] tracking-[0.2em] group"
            >
              OUR SERVICES →
            </button>
          </div>
        </div>

        {/* Right - Abstract Monolith Visual */}
        <div className="w-full lg:w-[35%] relative flex justify-center lg:justify-end">
          {/* Background glow to soften the white base */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-sky-50 blur-[120px] rounded-full pointer-events-none -z-10"></div>

          <div className="w-full relative reveal-section group">
            <img
              src={softwareMonolith}
              alt="Software Architecture Monolith"
              className="w-full h-auto object-contain transform lg:scale-105 transition-transform duration-1000 group-hover:scale-100 drop-shadow-2xl"
            />
          </div>
        </div>

      </section>

      {/* Leadership Section (CEO) */}
      <section className="py-4 px-6 md:px-12 relative z-10 flex justify-center">
        <div className="w-full max-w-2xl p-0.5 bg-gradient-to-r from-sky-200 via-slate-100 to-transparent rounded-[24px]">
          <div className="bg-white/90 backdrop-blur-xl p-4 md:p-6 rounded-[22px] flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-sky-500/30 shrink-0 shadow-md">
              <img src={tharun} alt="Tharun Devakumar - Chief Executive Officer (CEO) of Levrotec Technologies, Chennai" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-base md:text-lg italic font-light text-slate-700 mb-3 leading-relaxed">
                "At Levrotec, <span className="text-sky-500 font-bold not-italic underline decoration-sky-200 underline-offset-8"> we build software</span> that simplifies complexity and delivers real outcomes."
              </p>
              <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400 font-sans">Tharun Devakumar / CEO / Levrotec Core</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
