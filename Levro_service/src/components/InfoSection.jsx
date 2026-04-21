import React from "react";

export default function InfoSection() {
  return (
    <div className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Visit Card */}
      <div className="group p-8 bg-white border border-slate-100 rounded-[40px] transition-all hover:bg-slate-50 hover:border-sky-300 shadow-sm shadow-slate-200/50 hover:shadow-xl">
        <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 text-sky-500 shadow-sm group-hover:scale-110 transition-transform">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        </div>
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Location_Node</h3>
        <p className="text-slate-500 text-[13px] leading-relaxed font-bold">Vengaivasal Main Road, Valli Nagar, <br />Gowriwakkam, Chennai, <br />Tamil Nadu 600073, IND</p>
      </div>

      {/* Call Card */}
      <div className="group p-8 bg-white border border-slate-100 rounded-[40px] transition-all hover:bg-slate-50 hover:border-blue-300 shadow-sm shadow-slate-200/50 hover:shadow-xl">
        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-500 shadow-sm group-hover:scale-110 transition-transform">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Direct_Voice</h3>
        <p className="text-slate-500 text-[13px] leading-relaxed font-bold mb-2">Building technology that connects the future.</p>
        <p className="text-sky-500 font-black font-mono text-[15px] tracking-tight">+91 9884661885</p>
      </div>

      {/* Email Card */}
      <div className="group p-8 bg-white border border-slate-100 rounded-[40px] transition-all hover:bg-slate-50 hover:border-indigo-300 shadow-sm shadow-slate-200/50 hover:shadow-xl">
        <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-500 shadow-sm group-hover:scale-110 transition-transform">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </div>
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Intel_Link</h3>
        <p className="text-slate-500 text-[13px] leading-relaxed font-bold mb-4">For any technical queries or strategic support.</p>
        <p className="text-sky-500 font-black font-mono text-[15px] tracking-tight break-all">contact.levrotec@gmail.com</p>
      </div>

    </div>
  );
}
