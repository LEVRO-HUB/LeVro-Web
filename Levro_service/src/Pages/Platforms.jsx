import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Helmet } from 'react-helmet';
import sepal from "../assets/Images/Members/sepal.jpeg";
import boo from "../assets/Images/Members/Boo.jpeg";
import { useReveal } from "../hooks/useReveal";

const Platforms = () => {
  const rootRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [activeErpTab, setActiveErpTab] = useState(1);
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

  const erpFeaturePills = [
    "Live Availability",
    "Multi-Site Support",
    "Automated Billing",
    "Secure Access",
    "Operational Visibility"
  ];

  const erpModules = [
    {
      id: "sales-lead",
      name: "Sales & Lead Management",
      tagline: "Accelerate conversions and streamline the enterprise sales pipeline.",
      description: "Supercharge your business growth with an automated sales engine. Capture, track, and nurture leads from acquisition through final contracting. Advanced pipeline visualization combined with intelligent forecasting allows multi-site sales teams to operate with full transparency.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
      ),
      bullets: [
        "Real-time conversion analytics",
        "Automated lead assignment routing",
        "Customer interaction database",
        "One-click corporate quote generation",
        "Intelligent performance tracking dashboards"
      ]
    },
    {
      id: "booking-reservation",
      name: "Booking & Reservation",
      tagline: "Optimize asset scheduling, reservations, and multi-site bookings seamlessly.",
      description: "Manage high-volume bookings and resource allocation across your entire organization. Our central booking engine provides operational command over properties, scheduling, and asset reservation lifecycles, ensuring zero booking collisions and absolute scheduling precision.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
      ),
      bullets: [
        "Real-time availability tracking",
        "Multi-property management",
        "Booking lifecycle automation",
        "Extension & modification workflows",
        "Guest history management"
      ]
    },
    {
      id: "finance-payments",
      name: "Finance & Payments",
      tagline: "Achieve complete financial control with automated billing and auditing.",
      description: "Consolidate your multi-site financial operations into a single source of truth. From granular automated ledger reconciliation to enterprise-grade billing, invoicing, and tax compliance, manage your cash flow with peak corporate accuracy.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
      ),
      bullets: [
        "Consolidated multi-site invoicing",
        "Automated ledger reconciliation",
        "Multi-currency & tax compliance",
        "Real-time liquid cash flow metrics",
        "PCI-compliant gateway integrations"
      ]
    },
    {
      id: "procurement-vendors",
      name: "Procurement & Vendors",
      tagline: "Centralize supply chains, control expenditures, and manage vendor lifecycles.",
      description: "Streamline procurement protocols across departments and branches. Track inventory consumption in real time, automate purchase requisition workflows, and measure supplier performance metrics against strict corporate SLAs.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
      ),
      bullets: [
        "Automated supplier onboarding",
        "Purchase order routing & approvals",
        "Multi-location inventory counts",
        "Supplier performance scorecards",
        "Contract compliance monitoring"
      ]
    },
    {
      id: "infrastructure-control",
      name: "Infrastructure Control",
      tagline: "Unify multi-site assets and manage critical business infrastructure.",
      description: "Monitor your operational hardware, facilities, and physical assets from a central interface. Integrate preventive maintenance scheduling and real-time facility telemetry to eliminate downtime and maximize physical infrastructure efficiency.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
      ),
      bullets: [
        "Multi-site physical monitoring",
        "IoT-enabled status integration",
        "Automated maintenance alerts",
        "Resource utilization metrics",
        "Asset depreciation tracking"
      ]
    },
    {
      id: "security-access",
      name: "Security & Access",
      tagline: "Protect enterprise data and enforce strict administrative protocols.",
      description: "Enforce a robust security posture across your organizational hierarchy. With dynamic role-based access controls, comprehensive administrative logging, and zero-trust verification procedures, safeguard your proprietary data environments.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
      ),
      bullets: [
        "Granular Role-Based Access Control",
        "Single Sign-On & SAML integration",
        "System audit logs & trails",
        "Real-time threat detection alerts",
        "Zero-trust credential validation"
      ]
    }
  ];

  const renderDashboardPreview = (index) => {
    switch (index) {
      case 0:
        return (
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider font-mono">CONVERSION FUNNEL</span>
              <span className="text-[10px] text-emerald-400 font-bold font-mono">+18.4% MoM</span>
            </div>
            <div className="my-4 flex-grow flex items-center justify-center">
              <svg width="100%" height="110" viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="funnelGrad1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="funnelGrad2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0891b2" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="funnelGrad3" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0e7490" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <polygon points="10,15 190,15 170,40 30,40" fill="url(#funnelGrad1)" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
                <polygon points="30,45 170,45 150,70 50,70" fill="url(#funnelGrad2)" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
                <polygon points="50,75 150,75 130,100 70,100" fill="url(#funnelGrad3)" stroke="rgba(6,182,212,0.15)" strokeWidth="1" />
                <text x="100" y="30" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="0.1em">LEADS: 2,450</text>
                <text x="100" y="60" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="0.1em">QUALIFIED: 1,820</text>
                <text x="100" y="90" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="0.1em">CLOSED: 640</text>
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-slate-900/40 p-2 rounded border border-white/5 text-center">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider font-mono">Win Rate</p>
                <p className="text-xs text-white font-black font-mono">26.12%</p>
              </div>
              <div className="bg-slate-900/40 p-2 rounded border border-white/5 text-center">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider font-mono">Pipeline</p>
                <p className="text-xs text-cyan-400 font-black font-mono">$482,500</p>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider font-mono">CAPACITY & SCHEDULING</span>
              <span className="text-[10px] text-cyan-400 font-bold font-mono">ACTIVE PLAN</span>
            </div>
            <div className="my-3 flex-grow flex items-center justify-between gap-4">
              <div className="w-[85px] h-[85px] relative flex items-center justify-center shrink-0">
                <svg width="85" height="85" viewBox="0 0 36 36" className="transform -rotate-90">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2.5" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="url(#cyan-dial-glow)" strokeWidth="2.5" strokeDasharray="100" strokeDashoffset="15.4" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="cyan-dial-glow" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-xs text-white font-black font-mono leading-none">84.6%</span>
                  <span className="text-[6px] text-slate-500 font-bold tracking-wider font-mono uppercase mt-0.5">OCCUPIED</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="grid grid-cols-5 gap-1.5 p-1 bg-slate-900/40 border border-white/5 rounded">
                  {Array.from({ length: 15 }).map((_, i) => {
                    const status = i % 3 === 0 ? 'booked' : i % 5 === 0 ? 'pending' : 'available';
                    return (
                      <div 
                        key={i} 
                        className={`h-4.5 rounded-[3px] border flex items-center justify-center text-[7px] font-bold font-mono transition-all
                          ${status === 'booked' 
                            ? 'bg-cyan-500/20 border-cyan-500/45 text-cyan-400' 
                            : status === 'pending'
                            ? 'bg-blue-500/10 border-blue-500/25 text-blue-400'
                            : 'bg-white/5 border-transparent text-slate-600'}`}
                      >
                        {i + 1}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="bg-slate-900/40 p-2 rounded border border-white/5 text-center">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider font-mono">Total Rooms/Assets</p>
                <p className="text-xs text-white font-black font-mono">1,240</p>
              </div>
              <div className="bg-slate-900/40 p-2 rounded border border-white/5 text-center">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider font-mono">AutoCheck-in</p>
                <p className="text-xs text-emerald-400 font-black font-mono">ENABLED</p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider font-mono">CASH FLOW METRICS</span>
              <span className="text-[10px] text-emerald-400 font-bold font-mono">STABLE</span>
            </div>
            <div className="my-3 flex-grow flex items-center justify-center">
              <svg width="100%" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="financeAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="financeLineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <path d="M 0 60 Q 30 20, 60 45 T 120 15 T 170 50 T 200 35 L 200 80 L 0 80 Z" fill="url(#financeAreaGrad)" />
                <path d="M 0 60 Q 30 20, 60 45 T 120 15 T 170 50 T 200 35" stroke="url(#financeLineGrad)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="120" cy="15" r="3" fill="#06b6d4" stroke="#ffffff" strokeWidth="1" />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-900/40 p-2 rounded border border-white/5 text-center">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider font-mono">Consolidated Income</p>
                <p className="text-xs text-white font-black font-mono">$184,290</p>
              </div>
              <div className="bg-slate-900/40 p-2 rounded border border-white/5 text-center">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider font-mono">Reconciled</p>
                <p className="text-xs text-cyan-400 font-black font-mono">99.98%</p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider font-mono">VENDOR COMPLIANCE SLA</span>
              <span className="text-[10px] text-cyan-400 font-bold font-mono">SLA LEVEL: A+</span>
            </div>
            <div className="my-3 flex-grow flex flex-col justify-center gap-2">
              <div>
                <div className="flex justify-between text-[8px] font-bold font-mono mb-1 text-slate-400">
                  <span>VENDOR APEX CO.</span>
                  <span className="text-cyan-400">98.4% SLA</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: '98.4%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[8px] font-bold font-mono mb-1 text-slate-400">
                  <span>METRO INVENTORY</span>
                  <span className="text-cyan-400">91.8% SLA</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: '91.8%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[8px] font-bold font-mono mb-1 text-slate-400">
                  <span>LOGISTIC MATRIX</span>
                  <span className="text-slate-500">88.5% SLA</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-slate-700 rounded-full" style={{ width: '88.5%' }}></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="bg-slate-900/40 p-2 rounded border border-white/5 text-center">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider font-mono">Open POs</p>
                <p className="text-xs text-white font-black font-mono">42 Active</p>
              </div>
              <div className="bg-slate-900/40 p-2 rounded border border-white/5 text-center">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider font-mono">Asset Inflows</p>
                <p className="text-xs text-emerald-400 font-black font-mono">ON TIME</p>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider font-mono">FACILITY NODE MONITOR</span>
              <span className="text-[10px] text-cyan-400 font-bold font-mono">UPTIME: 99.99%</span>
            </div>
            <div className="my-3 flex-grow flex items-center justify-center">
              <svg width="100%" height="90" viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="30" y1="45" x2="80" y2="20" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
                <line x1="30" y1="45" x2="80" y2="70" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
                <line x1="80" y1="20" x2="140" y2="45" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
                <line x1="80" y1="70" x2="140" y2="45" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
                <line x1="140" y1="45" x2="180" y2="45" stroke="rgba(6,182,212,0.6)" strokeWidth="1.5" />
                <circle cx="30" cy="45" r="5" fill="#06b6d4" />
                <circle cx="30" cy="45" r="9" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.3" className="animate-ping" />
                <circle cx="80" cy="20" r="5" fill="#3b82f6" />
                <circle cx="80" cy="70" r="5" fill="#3b82f6" />
                <circle cx="140" cy="45" r="5" fill="#06b6d4" />
                <circle cx="140" cy="45" r="9" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.3" className="animate-ping" />
                <circle cx="180" cy="45" r="4" fill="#10b981" />
                <text x="30" y="32" fill="#94a3b8" fontSize="6" fontWeight="bold" textAnchor="middle">LOC-ALPHA</text>
                <text x="140" y="32" fill="#94a3b8" fontSize="6" fontWeight="bold" textAnchor="middle">LOC-BETA</text>
                <text x="180" y="36" fill="#10b981" fontSize="6" fontWeight="bold" textAnchor="middle">GATEWAY</text>
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-900/40 p-2 rounded border border-white/5 text-center">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider font-mono">Facility Nodes</p>
                <p className="text-xs text-white font-black font-mono">14 Monitored</p>
              </div>
              <div className="bg-slate-900/40 p-2 rounded border border-white/5 text-center">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider font-mono">Node Failures</p>
                <p className="text-xs text-emerald-400 font-black font-mono">0 WARNINGS</p>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider font-mono">SECURITY LOG STREAM</span>
              <span className="text-[10px] text-emerald-400 font-bold font-mono">ENCRYPTED</span>
            </div>
            <div className="my-3 flex-grow bg-[#05060a] border border-white/5 p-2 rounded font-mono text-[6.5px] leading-relaxed text-slate-400 flex flex-col justify-center space-y-1">
              <div className="flex items-center gap-1.5 text-cyan-400">
                <span>[13:30:12]</span>
                <span className="font-bold">AUTH_OK</span>
                <span className="text-slate-500">RootNode-15</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span>[13:29:48]</span>
                <span className="font-bold">SSO_SUCCESS</span>
                <span className="text-slate-500">UID-9884661885</span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400">
                <span>[13:28:11]</span>
                <span className="font-bold">DECRYPT_OK</span>
                <span className="text-slate-500">db_reconciled</span>
              </div>
              <div className="flex items-center gap-1.5 text-blue-400">
                <span>[13:26:05]</span>
                <span className="font-bold">SSL_HANDSHAKE</span>
                <span className="text-slate-500">AES-GCM-256</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="bg-slate-900/40 p-2 rounded border border-white/5 text-center">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider font-mono">Security Tier</p>
                <p className="text-xs text-white font-black font-mono">Zero Trust</p>
              </div>
              <div className="bg-slate-900/40 p-2 rounded border border-white/5 text-center">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider font-mono">Anomaly Threat</p>
                <p className="text-xs text-emerald-400 font-black font-mono">0.00%</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
              className="w-full sm:w-auto px-10 py-5 bg-[#B16BFF] text-white rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-[#9D50BB] shadow-2xl shadow-purple-500/40 transition-all active:scale-95 inline-block text-center cursor-pointer"
            >
              Request Institutional Access
            </a>
          </div>
        </div>
      </section>

      {/* High-tech Section Separator */}
      <div className="w-full relative h-px flex items-center justify-center my-16">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4]"></div>
      </div>

      {/* Premium Enterprise ERP Solution Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto reveal-section relative overflow-hidden">
        {/* Subtle Floating Blurred Particles background */}
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none animate-[pulse_8s_infinite]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-500/5 blur-[130px] rounded-full pointer-events-none animate-[pulse_12s_infinite]"></div>
        
        {/* Soft Grid Lines Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1020_1.2px,transparent_1.2px),linear-gradient(to_bottom,#0c1020_1.2px,transparent_1.2px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_75%,transparent_100%)] pointer-events-none"></div>

        {/* Section Headers */}
        <div className="text-center mb-16 relative z-10">
          <p className="text-[11px] font-black tracking-[0.3em] uppercase text-cyan-500 mb-4 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-cyan-500/50"></span>
            ENTERPRISE ERP SOLUTION
            <span className="w-6 h-px bg-cyan-500/50"></span>
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-none mb-6 max-w-3xl mx-auto">
            ENGINEERING MODERN <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">BUSINESS OPERATIONS</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Build scalable ERP ecosystems that centralize operations, automate workflows, and simplify complex business management across multi-site organizations.
          </p>
        </div>

        {/* 2-Column Module Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[290px_1fr] gap-8 bg-[#090b14]/50 border border-white/5 rounded-[24px] p-5 md:p-8 min-h-[500px] backdrop-blur-xl relative z-10 shadow-2xl">
          
          {/* LEFT COLUMN: Vertical Module Navigation Menu */}
          <div className="flex flex-col gap-2.5">
            {erpModules.map((module, index) => (
              <button
                key={module.id}
                onClick={() => setActiveErpTab(index)}
                className={`flex items-center gap-3.5 px-4 py-4 rounded-xl transition-all duration-300 text-left w-full border select-none relative group cursor-pointer
                  ${activeErpTab === index
                    ? 'bg-slate-900/95 border-cyan-500/30 shadow-[0_0_20px_-3px_rgba(6,182,212,0.15)] text-white'
                    : 'bg-transparent border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-900/30 hover:border-slate-800/40'
                  }`}
              >
                {/* Accent vertical line for active tab */}
                {activeErpTab === index && (
                  <div className="absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-r"></div>
                )}
                
                {/* Icon Container */}
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300
                  ${activeErpTab === index ? 'bg-cyan-500/10 text-cyan-400' : 'bg-white/5 text-slate-500 group-hover:text-slate-400'}`}>
                  {module.icon}
                </div>

                <div className="flex flex-col min-w-0">
                  <span className={`text-[8px] tracking-[0.1em] uppercase font-bold leading-none mb-1
                    ${activeErpTab === index ? 'text-cyan-400' : 'text-slate-600'}`}>
                    Module 0{index + 1}
                  </span>
                  <span className="text-[12px] font-bold uppercase tracking-wide truncate">
                    {module.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT COLUMN: Enterprise Information Panel */}
          <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between min-h-[440px] shadow-2xl relative overflow-hidden">
            
            {/* Top Level Platform Feature Pills */}
            <div className="flex flex-wrap gap-2.5 mb-6 border-b border-white/5 pb-6">
              {erpFeaturePills.map((pill, i) => (
                <span key={i} className="px-3 py-1 bg-cyan-950/20 border border-cyan-500/15 text-cyan-400/90 text-[9px] font-black tracking-widest uppercase rounded-full shadow-[0_0_10px_rgba(6,182,212,0.02)]">
                  {pill}
                </span>
              ))}
            </div>

            {/* Inner Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 items-start flex-grow">
              
              {/* Active Module Details */}
              <div className="space-y-5">
                <span className="inline-block bg-cyan-950/30 border border-cyan-500/25 text-cyan-400 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-md">
                  {erpModules[activeErpTab].name}
                </span>
                
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight">
                  {erpModules[activeErpTab].tagline}
                </h3>
                
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-lg">
                  {erpModules[activeErpTab].description}
                </p>

                {/* Capabilities checkmarks list */}
                <div className="space-y-2.5 pt-2">
                  {erpModules[activeErpTab].bullets.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-[8px] font-bold shrink-0">
                        ✓
                      </div>
                      <span className="text-slate-300 text-xs font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal Dark Glassmorphic Dashboard Preview */}
              <div className="w-full h-[220px] bg-slate-900/30 border border-white/5 rounded-xl p-4 shadow-2xl relative overflow-hidden backdrop-blur-md self-center">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/5 blur-2xl rounded-full pointer-events-none"></div>
                
                {/* Simulated App Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
                    <span className="text-[8px] font-mono text-cyan-400 font-bold uppercase tracking-widest">SYS-OPERATIONAL</span>
                  </div>
                  <span className="text-[7px] font-mono text-slate-500 uppercase tracking-widest">SECURE_NODE</span>
                </div>

                {/* Dynamic SVG / Mock Content */}
                {renderDashboardPreview(activeErpTab)}
              </div>

            </div>

          </div>

        </div>

        {/* Premium Corporate Quote Card */}
        <div className="mt-16 relative z-10 max-w-4xl mx-auto">
          <div className="p-0.5 bg-gradient-to-r from-cyan-500/30 via-blue-500/5 to-transparent rounded-[24px]">
            <div className="bg-[#080a12]/90 backdrop-blur-2xl p-4 md:p-6 rounded-[22px] flex flex-col md:flex-row items-center gap-6 shadow-2xl border border-cyan-500/10 relative overflow-hidden">
              <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-500/30 shrink-0 shadow-md relative z-10">
                <img src={boo} alt="Boobalan - Chief Product Officer (CPO) of Levrotec Technologies" className="w-full h-full object-cover" />
              </div>

              <div className="text-center md:text-left relative z-10 flex-grow">
                <p className="text-base md:text-lg italic font-light text-slate-200 mb-3 leading-relaxed">
                  "We don't build generic ERP software. We architect <span className="text-cyan-400 font-bold not-italic underline decoration-cyan-400/30 underline-offset-8">operational ecosystems</span> designed for scale, visibility, and control."
                </p>
                <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-slate-500 font-sans">BOOBALAN / CPO / LEVROTEC CORE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action CTA Section */}
        <div className="mt-20 text-center relative z-10 max-w-3xl mx-auto border-t border-white/5 pt-16">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-4">SCALE OPERATIONS</p>
          <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight leading-tight mb-8">
            READY TO MODERNIZE OPERATIONS?
          </h2>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/10 transition-all active:scale-95 cursor-pointer inline-block text-center"
          >
            EXPLORE ERP ECOSYSTEM
          </button>
        </div>

      </section>

    </div>
  );
};

export default Platforms;
