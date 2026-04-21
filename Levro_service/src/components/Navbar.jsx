import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { initGoogleTranslate, changeLanguage } from "../utils/googleTranslate";
import logo from "../assets/Images/logo1.png";
import logo2 from "../assets/Images/logo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const navRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    initGoogleTranslate();
  }, []);

  // Intelligent Scroll & Color Tracking
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Navbar Visibility logic
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling Down
      } else {
        setIsVisible(true); // Scrolling Up
      }
      setLastScrollY(currentScrollY);

      // 2. Dark Background Detection (Platforms section)
      const platformsSection = document.getElementById('platforms');
      if (platformsSection) {
        const rect = platformsSection.getBoundingClientRect();
        // If Platforms section is occupying the top of the viewport
        if (rect.top < 80 && rect.bottom > 80) {
          setIsDarkBg(true);
        } else {
          setIsDarkBg(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Icons - using dark colors for light mode
  const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${isDarkBg ? "text-white" : "text-slate-600"} hover:text-sky-400 transition-colors cursor-pointer`}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );

  const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${isDarkBg ? "text-white" : "text-slate-600"} hover:text-sky-400 transition-colors cursor-pointer`}>
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const languages = [
    { name: "English", code: "en", flag: "EN" },
    { name: "Tamil", code: "ta", flag: "TA" },
    { name: "French", code: "fr", flag: "FR" },
    { name: "Hindi", code: "hi", flag: "HI" },
    { name: "Spanish", code: "es", flag: "ES" },
  ];

  const handleLangChange = (lang) => {
    setCurrentLang(lang.flag);
    changeLanguage(lang.code);
    setLangOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#platforms" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-[100] w-full font-sans pointer-events-none" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative flex items-center justify-between py-3 md:py-4">

        {/* Pinned Logo - Always Visible */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center cursor-pointer transition-all pointer-events-auto"
        >
          <img 
            src={isDarkBg ? logo2 : logo} 
            alt="Levrotec Logo" 
            className={`transition-all duration-500 h-28 md:h-36 w-auto object-contain`} 
          />
        </div>

        {/* collapsible Navigation Container */}
        <div className={`hidden md:flex items-center gap-12 transition-all duration-500 ease-in-out transform pointer-events-auto
          ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0 blur-lg"}`}
        >
          {/* Main Links */}
          <div className="flex items-center gap-8 py-2.5 px-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-bold text-[12px] uppercase tracking-widest transition-all duration-300 ${
                  isDarkBg ? "text-white hover:text-sky-400" : "text-slate-600 hover:text-sky-500"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side icons & CTA */}
          <div className="flex items-center gap-6 py-2 px-6">
            <div className="relative" ref={langRef}>
              <div
                className="flex items-center gap-1.5 cursor-pointer group"
                onClick={() => setLangOpen(!langOpen)}
              >
                <GlobeIcon />
                <span className={`text-[10px] font-bold ${isDarkBg ? "text-slate-200" : "text-slate-400"} group-hover:text-sky-400 transition-colors uppercase`}>{currentLang}</span>
              </div>

              {/* Language Dropdown */}
              {langOpen && (
                <div className="absolute top-12 right-0 w-40 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="py-2">
                    <div className="px-4 py-2 text-[10px] font-black text-slate-300 uppercase tracking-widest border-b border-slate-50 mb-1">Select Language</div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        role="menuitem"
                        className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors flex items-center justify-between ${currentLang === lang.flag ? "text-sky-500 bg-sky-50" : "text-slate-600 hover:bg-slate-50"}`}
                        onClick={() => handleLangChange(lang)}
                      >
                        {lang.name}
                        {currentLang === lang.flag && <div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <SettingsIcon />
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-sky-500 hover:bg-sky-600 text-white font-black uppercase text-[10px] tracking-[0.2em] px-6 py-2 rounded-sm transition-all shadow-lg shadow-sky-500/20 active:scale-95"
            >
              GET STARTED
            </button>
          </div>
        </div>

        {/* Hidden Google Translate Target */}
        <div id="google_translate_element" className="hidden"></div>

        {/* Mobile Hamburger button */}
        <button
          className={`md:hidden text-slate-800 focus:outline-none pointer-events-auto p-2.5 transition-all
            ${isVisible ? "translate-y-0" : "-translate-y-2"}
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[64px] md:top-[80px] left-4 right-4 bg-white border border-slate-200 p-6 flex flex-col gap-4 shadow-2xl rounded-[32px] pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-300 z-50">
          {navLinks.filter(link => link.name !== "Services").map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 font-bold uppercase text-xs tracking-widest px-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="w-full h-px bg-slate-100 my-2"></div>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest px-2">Select Language</span>
            <div className="flex flex-wrap gap-2 px-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${currentLang === lang.flag ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}
                  onClick={() => handleLangChange(lang)}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-slate-100 my-2"></div>
          <button 
            onClick={() => {
              setIsOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-sky-500 text-white font-black uppercase text-xs tracking-widest px-6 py-4 rounded-2xl w-full shadow-lg shadow-sky-500/20 active:scale-95 transition-all"
          >
            GET STARTED
          </button>
        </div>
      )}
    </nav>
  );
}