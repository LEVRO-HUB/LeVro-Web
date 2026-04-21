import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white pt-16 md:pt-24 pb-10 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-20">
          
          {/* Left Side: Brand & Mission */}
          <div className="space-y-10">
            <div>
               <div className="text-3xl md:text-5xl font-black tracking-tighter mb-4 md:mb-6 flex items-center gap-3">
                 LEVROTEC
                 <div className="w-8 md:w-12 h-1 bg-sky-500 rounded-full mt-2"></div>
               </div>
               <p className="text-slate-400 text-base md:text-xl font-medium leading-relaxed max-w-md">
                 Architecting the digital infrastructure of tomorrow. We specialize in high-performance enterprise systems that bridge the gap between vision and reality.
               </p>
            </div>

            {/* Icon Grid matching Image 1 */}
            <div className="flex gap-4">
              {[
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>,
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg>,
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              ].map((icon, i) => (
                <div key={i} className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 transition-all hover:bg-white/10 hover:text-white cursor-pointer group">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-6">
             <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Resources</h4>
                <ul className="space-y-4">
                   <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium">Privacy Policy</a></li>
                   <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium">Terms of Service</a></li>
                   <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium">Security Audit</a></li>
                </ul>
             </div>
             <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Connect</h4>
                <ul className="space-y-4">
                   <li><a href="https://www.linkedin.com/company/levrotec/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium">LinkedIn</a></li>
                   <li><a href="https://twitter.com/levro" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium">X / Twitter</a></li>
                   <li><a href="https://github.com/levrotec" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium">GitHub Repo</a></li>
                </ul>
             </div>
             <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Support</h4>
                <ul className="space-y-4">
                   <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium">Global Support</a></li>
                   <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium">Documentation</a></li>
                   <li><a href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium">Help Center</a></li>
                </ul>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 text-center md:text-left">
            © {currentYear} LEVROTEC TECHNOLOGIES. ALL RIGHTS RESERVED. <span className="mx-2 opacity-20">|</span> ARCHITECTED IN CHENNAI
          </div>
          
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
             <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500/80">All Systems Operational</div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://wa.me/919884661885?text=Hi%20Levrotec%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-green-500/40 cursor-pointer transition-transform hover:scale-110 active:scale-95 block"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.940 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;