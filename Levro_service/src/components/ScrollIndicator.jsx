import React from "react";

const ScrollIndicator = ({ activeSection }) => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "platforms", label: "Products" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-12 md:left-16 top-1/3 z-[90] hidden lg:flex flex-col gap-12 items-start group">
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <div
            key={section.id}
            className="relative flex flex-col items-start cursor-pointer group/item"
            onClick={() => handleClick(section.id)}
          >
            {/* The Indicator Line (Horizontal) */}
            <div className={`transition-all duration-700 ease-in-out
              ${isActive
                ? "w-24 h-[4px] bg-slate-900 shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
                : "w-10 h-[2px] bg-slate-200 hover:w-16 hover:bg-slate-300"}
            `} />

            {/* Label - Shown below the line when active */}
            <div className={`mt-3 transition-all duration-500 overflow-hidden
              ${isActive
                ? "max-h-20 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"}
            `}>
              <span className="text-[11px] font-black uppercase tracking-tight text-slate-800 leading-tight block w-24">
                {section.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollIndicator;
