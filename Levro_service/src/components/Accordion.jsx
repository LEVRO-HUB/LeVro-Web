import React, { useState } from "react";

const AccordionItem = ({ number, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-slate-100 last:border-0 transition-all ${isOpen ? "bg-slate-50" : ""}`}>
      <button 
        className="w-full flex items-center gap-6 p-6 text-left hover:bg-slate-100/50 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xs font-mono font-bold text-sky-500">{number}</span>
        <span className="flex-1 font-bold tracking-tight text-slate-700 uppercase text-xs sm:text-sm">{title}</span>
        <span className={`text-xl transition-transform duration-300 font-bold ${isOpen ? "rotate-45 text-sky-500" : "text-slate-400"}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-6 pt-0 space-y-6">
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">{content}</p>
          <a 
            href="#contact-form" 
            className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-sky-600 border-b-2 border-sky-200 pb-1 hover:text-sky-700 hover:border-sky-700 transition-all"
          >
            Terminal Interface
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Accordion() {
  return (
    <div className="w-full bg-white rounded-[32px] overflow-hidden">
      <div className="p-6 md:p-10 border-b border-slate-100">
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-slate-800">
          System <span className="text-sky-500">Request</span> Protocols
        </h2>
      </div>

      <div className="flex flex-col">
        <AccordionItem
          number="01"
          title="Strategic Partnership"
          content="Seeking a high-level collaboration or have a complex project architecture in mind? Our technicians are ready to evaluate your requirements."
        />
        <AccordionItem
          number="02"
          title="Talent Acquisition"
          content="Interested in joining the Levrotec engineering core? Explore our open nodes and contribute to the future of digital infrastructure."
        />
        <AccordionItem
          number="03"
          title="Media & External Comms"
          content="For press inquiries and secure media documentation, please initialize a request through our communications channel."
        />
        <AccordionItem
          number="04"
          title="Investor Relations"
          content="Direct access for capital partners and those interested in the scaling of our intelligent platform ecosystem."
        />
      </div>
    </div>
  );
}
