import { useEffect, useRef, useState } from "react";

const IMAGES = {
  hero: [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80",
  ],
  story: [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
  ],
};

const STORY_INTERVAL = 4500;
const STORY_ANIM_MS = 900;

const ABOUT_CARDS = [
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    alt: "Who we are",
    title: "Who We Are",
    text: `Levro is a modern technology company. We build meaningful digital
experiences that are simple, effective, and purpose-driven. With a
strong focus on clarity and modern technology, we turn ideas into
reliable solutions that people and businesses can trust and grow
with.`,
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    alt: "What we do",
    title: "What We Do",
    text: `We create digital solutions with people in mind, focusing on
simplicity, usability, and purpose. By blending thoughtful design
with modern technology, we solve real problems and deliver digital
experiences that users can trust and rely on.`,
  },
  {
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    alt: "How we build",
    title: "Levro's Way Of Building",
    text: `At Levro, we build with intention, starting from a deep
understanding of people and the problems they face. We believe
strong digital products begin with clear thinking and take shape
through thoughtful design. Powered by modern technology, our
solutions are built to be simple, reliable, and adaptable.`,
  },
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    alt: "Client partnership",
    title: "Working With You",
    text: `Working with you is a shared journey. We believe the best results
come from clear communication, mutual trust, and steady
collaboration. From the first conversation to the final delivery,
we work closely with you to make sure everything feels right and
aligned with your goals.`,
  },
];

const STORY_STEPS = [
  {
    no: "01",
    delay: "0ms",
    title: "Start with the real problem",
    text: "We listen first — understanding users, goals, and constraints before we design anything.",
  },
  {
    no: "02",
    delay: "120ms",
    title: "Design for speed & simplicity",
    text: "Clean UI, clean flows. We remove friction so your product feels effortless to use.",
  },
  {
    no: "03",
    delay: "240ms",
    title: "Engineer to scale",
    text: "Reliable architecture, secure foundations, and performance that holds up when you grow.",
  },
];

const TEAM = [
  { name: "Hari", role: "Engineering Lead", img: "https://randomuser.me/api/portraits/men/32.jpg", alt: "Hari - Engineering Lead" },
  { name: "Anu", role: "Product & Design", img: "https://randomuser.me/api/portraits/women/44.jpg", alt: "Anu - Product & Design" },
  { name: "Muu", role: "Strategy & Growth", img: "https://randomuser.me/api/portraits/men/65.jpg", alt: "Muu - Strategy & Growth" },
  { name: "Keerthi", role: "Client Success", img: "https://randomuser.me/api/portraits/women/68.jpg", alt: "Keerthi - Client Success" },
  { name: "Arjun", role: "Backend & Cloud", img: "https://randomuser.me/api/portraits/men/71.jpg", alt: "Arjun - Backend & Cloud" },
];

const WHY = [
  {
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
    alt: "Purpose driven",
    title: "People-First & Collaborative Approach",
    text: `We start by understanding your goals and challenges before
beginning any project. As a startup, we work closely with clients,
keeping communication honest and open throughout the process. Our
focus is on building trust and long-term relationships, not just
completing projects.`,
  },
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    alt: "Product strategy",
    title: "Simple, Reliable & Thoughtful Solutions",
    text: `We focus on building solutions that are practical, easy to use,
and reliable. By balancing thoughtful design with strong
development, we create products that perform smoothly and
consistently. Our goal is to deliver solutions that provide real,
everyday value.`,
  },
  {
    img: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=900&q=80",
    alt: "Growth execution",
    title: "Built to Grow & Adapt",
    text: `As a startup, we understand that business needs can change
quickly. That’s why we focus on building flexible and scalable
solutions that can grow with you. Our goal is to create systems
that stay useful and effective as your business evolves.`,
  },
];

const STYLES = `
:root { --cream:#fff8f2; --ink:#0e2f5c; --blue1:#1f6fd6; --blue2:#3fd0e3; }
*{box-sizing:border-box;} body{margin:0;}
.levro-root{font-family:Inter,sans-serif;background:var(--cream);color:var(--ink);position:relative;overflow:hidden;}
.levro-root::before{content:"";position:fixed;inset:0;pointer-events:none;z-index:0;background:
radial-gradient(600px 600px at var(--mx,50%) var(--my,50%),rgba(63,208,227,0.16),transparent 60%),
radial-gradient(700px 700px at 10% 15%,rgba(31,111,214,0.10),transparent 55%);transition:background 120ms linear;}
.levro-root > *{position:relative;z-index:1;}

.top-bar{position:fixed;top:0;width:100%;height:56px;display:flex;align-items:center;justify-content:space-between;padding:0 40px;background:linear-gradient(135deg,var(--blue1),var(--blue2));color:white;z-index:1000;box-shadow:0 10px 25px rgba(0,0,0,0.10);}
.brand{font-weight:800;letter-spacing:3px;}

.hero{position:relative;height:100vh;margin-top:56px;overflow:hidden;}
.hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;animation:zoom 10s infinite alternate,heroParallax 8s ease-in-out infinite;transition:background-image 1.2s ease-in-out;filter:contrast(1.2) saturate(1.25) brightness(0.95);}
@keyframes heroParallax{0%{transform:scale(1.06) translate3d(0,0,0);}50%{transform:scale(1.12) translate3d(0,-10px,0);}100%{transform:scale(1.06) translate3d(0,0,0);}}
.hero::before{content:"";position:absolute;inset:-30%;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.40),transparent 55%);animation:heroLight 7s ease-in-out infinite alternate;pointer-events:none;mix-blend-mode:soft-light;z-index:1;}
@keyframes heroLight{from{transform:translate(-6%,-4%);opacity:0.65;}to{transform:translate(6%,4%);opacity:0.35;}}
.hero-overlay{position:absolute;inset:0;background:rgba(94,115,125,0.45);z-index:2;}
.hero::after{content:"";position:absolute;left:-10%;right:-10%;bottom:-1px;height:120px;background:linear-gradient(180deg,transparent,rgba(255,248,242,0.95));pointer-events:none;z-index:3;}

.hero-content{position:relative;z-index:4;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:0 18px;animation:heroPop 900ms ease both;}
.hero-content::before{content:"";position:absolute;width:820px;height:420px;border-radius:999px;background:radial-gradient(circle,rgba(255,255,255,0.18),transparent 62%);filter:blur(2px);opacity:.85;animation:heroAura 6.5s ease-in-out infinite;z-index:-1;}
@keyframes heroAura{0%{transform:scale(0.98) translateY(0);opacity:.70;}50%{transform:scale(1.03) translateY(-8px);opacity:.95;}100%{transform:scale(0.98) translateY(0);opacity:.70;}}
@keyframes heroPop{from{opacity:0;transform:translateY(14px) scale(0.99);}to{opacity:1;transform:translateY(0) scale(1);}}

h1{font-size:56px;margin:0 0 14px;} h2{font-size:34px;margin:0 0 14px;} span{color:var(--blue1);}
p{max-width:900px;margin:0;line-height:1.8;font-size:17px;}

.hero-content h1 span{color:var(--cream);text-shadow:0 14px 40px rgba(0,0,0,0.50),0 3px 14px rgba(0,0,0,0.35);animation:heroTitleShine 2.6s ease-in-out infinite;}
@keyframes heroTitleShine{0%{filter:drop-shadow(0 0 0 rgba(255,255,255,0.0));}50%{filter:drop-shadow(0 0 16px rgba(255,255,255,0.28));}100%{filter:drop-shadow(0 0 0 rgba(255,255,255,0.0));}}

.hero-content h1{animation:heroRise 900ms cubic-bezier(.2,.9,.2,1) both;}
.hero-content p{animation:heroFade 1000ms 120ms cubic-bezier(.2,.9,.2,1) both;}
.hero-content .primary-btn{animation:heroBtnIn 900ms 260ms cubic-bezier(.2,.9,.2,1) both,heroBtnPulse 2.8s 1.2s ease-in-out infinite;}
@keyframes heroRise{from{opacity:0;transform:translateY(14px) scale(0.995);}to{opacity:1;transform:translateY(0) scale(1);}}
@keyframes heroFade{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
@keyframes heroBtnIn{from{opacity:0;transform:translateY(10px) scale(0.98);}to{opacity:1;transform:translateY(0) scale(1);}}
@keyframes heroBtnPulse{0%{box-shadow:0 18px 40px rgba(31,111,214,0.35);transform:translateY(0);}50%{box-shadow:0 26px 70px rgba(63,208,227,0.28);transform:translateY(-2px);}100%{box-shadow:0 18px 40px rgba(31,111,214,0.35);transform:translateY(0);}}

.hero-content p{font-size:19px;font-weight:700;color:rgba(6,10,18,0.98);text-shadow:0 3px 18px rgba(255,255,255,0.85),0 2px 10px rgba(0,0,0,0.25);}

.primary-btn{margin-top:24px;padding:16px 52px;border-radius:50px;border:none;background:linear-gradient(135deg,var(--blue1),var(--blue2));color:white;font-weight:700;cursor:pointer;box-shadow:0 18px 40px rgba(31,111,214,0.35);transition:transform 0.2s ease,box-shadow 0.2s ease;}
.primary-btn:hover{transform:translateY(-3px);box-shadow:0 22px 55px rgba(31,111,214,0.40);}

.section{padding:90px 20px;max-width:1100px;margin:auto;text-align:center;position:relative;border-radius:28px;}

.about-flow::before,.why-choose-us::before{content:"";position:absolute;inset:0;border-radius:28px;background-image:radial-gradient(rgba(14,47,92,0.08) 1px,transparent 1px);background-size:18px 18px;opacity:0.35;pointer-events:none;}

.reveal.active .section-label{animation:labelSlideIn 700ms ease both;}
.reveal.active h2{animation:titlePop 760ms cubic-bezier(.2,.9,.2,1) both;}
@keyframes labelSlideIn{from{opacity:0;transform:translateY(8px);letter-spacing:3px;}to{opacity:1;transform:translateY(0);letter-spacing:2px;}}
@keyframes titlePop{from{opacity:0;transform:translateY(10px) scale(0.99);}to{opacity:1;transform:translateY(0) scale(1);}}

.mv-wrapper{display:flex;gap:60px;flex-wrap:wrap;align-items:center;justify-content:center;}
.mv-image img{max-width:460px;width:100%;border-radius:28px;box-shadow:0 20px 45px rgba(0,0,0,0.12);}
.mv-content{max-width:520px;text-align:left;}

.section-label{font-size:13px;letter-spacing:2px;font-weight:700;color:var(--blue1);display:inline-block;margin-bottom:10px;}
.mv-box{margin-top:22px;padding-left:18px;border-left:4px solid var(--blue1);}

.flow-header{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:26px;text-align:left;}
.flow-title h2{margin:0;}
.flow-subtext{max-width:540px;margin:0;opacity:0.85;line-height:1.6;}

.flow-track{display:flex;gap:26px;overflow-x:auto;padding:18px 8px 30px;scroll-behavior:smooth;border-radius:22px;mask-image:linear-gradient(90deg,transparent 0,#000 6%,#000 94%,transparent 100%);-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 6%,#000 94%,transparent 100%);}
.flow-track::-webkit-scrollbar{display:none;}

.flow-card{position:relative;min-width:280px;max-width:280px;background:#fffdf8;border-radius:26px;box-shadow:0 22px 60px rgba(0,0,0,0.12);overflow:hidden;text-align:left;transition:transform 0.4s ease,box-shadow 0.4s ease;}
.flow-card::after{content:"";position:absolute;inset:-40%;background:linear-gradient(115deg,transparent 40%,rgba(255,255,255,0.38),transparent 60%);transform:translateX(-35%) rotate(12deg);opacity:0;transition:opacity .35s ease;pointer-events:none;}
.flow-card:hover::after{opacity:1;animation:sheen 900ms ease both;}
@keyframes sheen{from{transform:translateX(-40%) rotate(12deg);}to{transform:translateX(40%) rotate(12deg);}}
.flow-card:hover{transform:translateY(-14px) scale(1.02);box-shadow:0 36px 90px rgba(0,0,0,0.18);}
.flow-media{height:190px;overflow:hidden;}
.flow-media img{width:100%;height:100%;object-fit:cover;transform:scale(1.05);transition:transform 0.5s ease;}
.flow-card:hover .flow-media img{transform:scale(1.12);}
.flow-card h3{margin:18px 18px 8px;color:var(--blue1);font-size:18px;}
.flow-card p{margin:0 18px 20px;line-height:1.65;font-size:15px;color:var(--ink);}

.levro-story{max-width:1200px;padding:0;text-align:left;overflow:hidden;border-radius:28px;box-shadow:0 26px 80px rgba(0,0,0,0.16);}
.story-bg{position:absolute;inset:0;background-image:url("https://images.unsplash.com/photo-1517430816045-df4b7de01a94?auto=format&fit=crop&w=2400&q=80");background-size:cover;background-position:center;filter:saturate(1.15) contrast(1.05) brightness(0.75);transform:scale(1.02);}
.story-overlay{position:absolute;inset:0;background:radial-gradient(900px 600px at 25% 40%,rgba(155,92,255,0.25),transparent 55%),linear-gradient(90deg,rgba(7,14,45,0.90),rgba(7,14,45,0.55),rgba(7,14,45,0.92));}
.story-wrap{position:relative;z-index:2;display:grid;grid-template-columns:1.1fr 1fr;min-height:560px;}
.story-left{position:relative;min-height:560px;border-right:1px solid rgba(255,255,255,0.08);padding:22px;display:flex;flex-direction:column;justify-content:center;}
.story-logo{position:absolute;top:24px;left:28px;width:48px;height:48px;border-radius:14px;display:grid;place-items:center;font-weight:900;color:#ffffff;background:rgba(255,255,255,0.10);border:1px solid rgba(255,255,255,0.14);backdrop-filter:blur(10px);}

.story-photo-card{position:relative;width:100%;height:420px;border-radius:26px;overflow:hidden;box-shadow:0 26px 80px rgba(0,0,0,0.35);transform:translateZ(0);touch-action:pan-y;}
.story-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:saturate(1.05) contrast(1.06);opacity:1;will-change:transform,opacity;}
.slide-in.next{animation:slideInFromRight ${STORY_ANIM_MS}ms cubic-bezier(.2,.9,.2,1) both;}
.slide-out.next{animation:slideOutToLeft ${STORY_ANIM_MS}ms cubic-bezier(.2,.9,.2,1) both;}
.slide-in.prev{animation:slideInFromLeft ${STORY_ANIM_MS}ms cubic-bezier(.2,.9,.2,1) both;}
.slide-out.prev{animation:slideOutToRight ${STORY_ANIM_MS}ms cubic-bezier(.2,.9,.2,1) both;}
@keyframes slideInFromRight{0%{transform:translateX(14%) scale(1.03);opacity:0;filter:blur(1px);}100%{transform:translateX(0) scale(1);opacity:1;filter:blur(0);}}
@keyframes slideOutToLeft{0%{transform:translateX(0) scale(1);opacity:1;}100%{transform:translateX(-14%) scale(1.02);opacity:0;}}
@keyframes slideInFromLeft{0%{transform:translateX(-14%) scale(1.03);opacity:0;filter:blur(1px);}100%{transform:translateX(0) scale(1);opacity:1;filter:blur(0);}}
@keyframes slideOutToRight{0%{transform:translateX(0) scale(1);opacity:1;}100%{transform:translateX(14%) scale(1.02);opacity:0;}}

.story-photo-fade{position:absolute;left:0;right:0;bottom:0;height:120px;background:linear-gradient(180deg,transparent,rgba(7,14,45,0.85));pointer-events:none;z-index:3;}

.mini-chip{position:absolute;padding:10px 12px;border-radius:999px;font-size:12px;letter-spacing:1px;font-weight:800;color:rgba(255,255,255,0.92);background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.16);backdrop-filter:blur(10px);box-shadow:0 16px 35px rgba(0,0,0,0.25);animation:chipFloat 5.8s ease-in-out infinite;z-index:4;}
.mini-1{top:16px;right:18px;animation-delay:0s;}
.mini-2{top:70px;right:18px;animation-delay:0.9s;}
.mini-3{top:124px;right:18px;animation-delay:1.8s;}
@keyframes chipFloat{0%{transform:translateY(0px);}50%{transform:translateY(-8px);}100%{transform:translateY(0px);}}

.story-arrows{margin-top:16px;display:flex;justify-content:space-between;gap:10px;}
.story-arrow{width:52px;height:52px;border-radius:999px;border:1px solid rgba(255,255,255,0.18);background:rgba(255,255,255,0.10);color:rgba(255,255,255,0.92);font-size:30px;cursor:pointer;display:grid;place-items:center;backdrop-filter:blur(10px);transition:transform 0.2s ease,background 0.2s ease;animation:arrowPulse 2.6s ease-in-out infinite;}
.story-arrow:hover{transform:translateY(-2px) scale(1.03);background:rgba(255,255,255,0.14);}
@keyframes arrowPulse{0%{box-shadow:0 0 0 rgba(155,92,255,0.0);}50%{box-shadow:0 0 24px rgba(155,92,255,0.22);}100%{box-shadow:0 0 0 rgba(155,92,255,0.0);}}

.story-dots{margin-top:14px;display:flex;gap:10px;justify-content:center;}
.dot{width:10px;height:10px;border-radius:999px;background:rgba(255,255,255,0.35);cursor:pointer;transition:transform .2s ease,background .2s ease;}
.dot:hover{transform:scale(1.2);}
.dot.active{background:#9b5cff;transform:scale(1.35);}

.story-hint{margin-top:10px;font-size:12px;color:rgba(255,255,255,0.72);text-align:center;letter-spacing:.5px;}

.story-right{padding:52px 54px 46px;display:flex;flex-direction:column;justify-content:center;gap:16px;color:rgba(255,255,255,0.92);background:linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03));backdrop-filter:blur(10px);}
.story-top{display:flex;align-items:center;justify-content:space-between;gap:12px;}
.story-brand{font-weight:800;letter-spacing:4px;font-size:12px;opacity:0.9;color:rgba(255,255,255,0.95);}
.story-badge{font-size:11px;letter-spacing:2px;font-weight:800;color:rgba(255,255,255,0.85);padding:10px 12px;border-radius:999px;background:rgba(255,255,255,0.10);border:1px solid rgba(255,255,255,0.14);backdrop-filter:blur(10px);}
.story-heading{margin:0;font-size:56px;line-height:1;letter-spacing:1px;}
.story-white{color:rgba(255,255,255,0.95);} .story-purple{color:#9b5cff;}

.story-quote{position:relative;border-radius:22px;padding:18px 18px 16px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);box-shadow:0 18px 55px rgba(0,0,0,0.25);overflow:hidden;animation:fadeUp .7s ease both;}
.quote-mark{position:absolute;top:-12px;left:12px;font-size:64px;line-height:1;color:rgba(255,255,255,0.22);font-weight:900;}
.quote-text{margin:0;font-size:14.8px;line-height:1.75;color:rgba(255,255,255,0.90);max-width:520px;}

.story-long{margin-top:8px;border-radius:22px;padding:14px 16px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.10);box-shadow:0 18px 55px rgba(0,0,0,0.18);animation:fadeUp .7s ease both;}
.story-long-text{margin:0 0 10px;font-size:13.6px;line-height:1.75;color:rgba(255,255,255,0.84);max-width:520px;}
.story-long-text:last-child{margin-bottom:0;}

.story-steps{display:grid;gap:12px;margin-top:2px;}
.step-card{display:grid;grid-template-columns:54px 1fr;gap:14px;padding:14px 14px;border-radius:20px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);backdrop-filter:blur(10px);box-shadow:0 18px 55px rgba(0,0,0,0.22);animation:fadeUp .7s ease both;}
.step-no{width:54px;height:54px;border-radius:18px;display:grid;place-items:center;font-weight:900;color:rgba(255,255,255,0.92);background:linear-gradient(135deg,rgba(155,92,255,0.85),rgba(255,209,102,0.75));box-shadow:0 16px 35px rgba(0,0,0,0.25);}
.step-body h4{margin:2px 0 6px;font-size:14px;letter-spacing:.4px;color:rgba(255,255,255,0.95);}
.step-body p{margin:0;font-size:13.6px;line-height:1.6;color:rgba(255,255,255,0.82);max-width:520px;}

.story-mini-cta{margin-top:8px;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:14px 14px;border-radius:22px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);box-shadow:0 18px 55px rgba(0,0,0,0.22);animation:fadeUp .7s ease both;}
.cta-left strong{display:block;font-size:14px;color:rgba(255,255,255,0.95);}
.cta-left span{display:block;margin-top:4px;font-size:12.8px;color:rgba(255,255,255,0.78);}

.story-cta-btn{padding:12px 16px;border-radius:999px;border:1px solid rgba(255,255,255,0.18);background:rgba(255,255,255,0.10);color:rgba(255,255,255,0.92);font-weight:800;letter-spacing:.6px;cursor:pointer;backdrop-filter:blur(10px);transition:transform .2s ease,background .2s ease;}
.story-cta-btn:hover{transform:translateY(-2px);background:rgba(255,255,255,0.14);}

@keyframes fadeUp{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}

.values-team-split{max-width:1200px;}
.vt-wrap{display:grid;grid-template-columns:1fr 1.2fr;gap:36px;align-items:stretch;text-align:left;}
.values-new{border-radius:28px;padding:30px;background:rgba(255,255,255,0.85);border:1px solid rgba(0,0,0,0.06);box-shadow:0 20px 55px rgba(0,0,0,0.10);overflow:hidden;position:relative;}
.values-new::before{content:"";position:absolute;inset:-40%;background:radial-gradient(circle,rgba(31,111,214,0.18),transparent 70%);animation:valuesGlow 6.5s ease-in-out infinite;pointer-events:none;}
@keyframes valuesGlow{0%{transform:translate(-6%,-4%);opacity:.55;}50%{transform:translate(6%,4%);opacity:.35;}100%{transform:translate(-6%,-4%);opacity:.55;}}
.values-new-head{position:relative;z-index:1;}
.values-new-sub{margin-top:6px;max-width:360px;opacity:0.85;line-height:1.6;font-size:14.5px;}
.values-new-grid{position:relative;z-index:1;margin-top:22px;display:grid;gap:12px;}
.vcard{display:flex;gap:12px;align-items:flex-start;padding:14px 14px;border-radius:18px;background:rgba(255,255,255,0.92);border:1px solid rgba(0,0,0,0.06);box-shadow:0 12px 26px rgba(0,0,0,0.08);transition:transform .28s ease,box-shadow .28s ease;animation:vIn .7s ease both;}
.vcard:nth-child(1){animation-delay:0ms;} .vcard:nth-child(2){animation-delay:90ms;} .vcard:nth-child(3){animation-delay:180ms;} .vcard:nth-child(4){animation-delay:270ms;} .vcard:nth-child(5){animation-delay:360ms;}
@keyframes vIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
.vcard:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(0,0,0,0.12);}
.vchip{width:38px;height:38px;border-radius:12px;display:grid;place-items:center;font-weight:900;font-size:12px;color:white;background:linear-gradient(135deg,var(--blue1),var(--blue2));box-shadow:0 14px 30px rgba(31,111,214,0.25);flex:0 0 auto;}
.vtxt strong{display:block;font-size:15px;color:var(--ink);}
.vtxt span{display:block;margin-top:4px;font-size:13.5px;color:rgba(14,47,92,0.80);}

.team-panel{background:rgba(255,255,255,0.75);border:1px solid rgba(0,0,0,0.06);border-radius:28px;padding:30px;box-shadow:0 20px 50px rgba(0,0,0,0.10);}
.team-grid-5{margin-top:24px;display:grid;grid-template-columns:repeat(6,1fr);gap:22px;}
.team-grid-5 .team-card-pro:nth-child(1){grid-column:1 / span 2;}
.team-grid-5 .team-card-pro:nth-child(2){grid-column:3 / span 2;}
.team-grid-5 .team-card-pro:nth-child(3){grid-column:5 / span 2;}
.team-grid-5 .team-card-pro:nth-child(4){grid-column:2 / span 2;}
.team-grid-5 .team-card-pro:nth-child(5){grid-column:4 / span 2;}
.team-card-pro{text-align:center;padding:18px 14px;border-radius:20px;background:white;box-shadow:0 12px 28px rgba(0,0,0,0.10);transition:transform 0.35s ease;}
.team-card-pro:hover{transform:translateY(-10px);}
.avatar-ring{width:92px;height:92px;margin:0 auto 12px;border-radius:50%;padding:3px;background:linear-gradient(135deg,var(--blue1),var(--blue2));}
.avatar-ring img{width:100%;height:100%;border-radius:50%;object-fit:cover;border:4px solid white;}

.why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:32px;margin-top:40px;}
.why-card{background:white;border-radius:26px;overflow:hidden;box-shadow:0 20px 45px rgba(0,0,0,0.12);transition:transform 0.35s ease;position:relative;}
.why-card::after{content:"";position:absolute;inset:-40%;background:linear-gradient(115deg,transparent 40%,rgba(255,255,255,0.30),transparent 60%);transform:translateX(-35%) rotate(12deg);opacity:0;pointer-events:none;}
.why-card:hover::after{opacity:1;animation:sheen 900ms ease both;}
.why-card:hover{transform:translateY(-10px);}
.why-card img{width:100%;height:200px;object-fit:cover;}

.final-cta{background:linear-gradient(135deg,var(--blue1),var(--blue2));color:white;padding:100px 20px;margin:80px 20px;border-radius:26px;text-align:center;box-shadow:0 26px 70px rgba(31,111,214,0.22);position:relative;overflow:hidden;isolation:isolate;}
.cta-bg-image{position:absolute;inset:0;z-index:0;background-image:url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2200&q=80");background-size:cover;background-position:center;transform:scale(1.05);filter:saturate(1.2) contrast(1.15);}
.cta-bg-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;opacity:0.55;mix-blend-mode:soft-light;filter:brightness(0.70) contrast(1.05);pointer-events:none;}
.cta-bg-overlay{position:absolute;inset:0;z-index:2;background:radial-gradient(900px 500px at 50% 35%,rgba(255,255,255,0.10),transparent 55%),linear-gradient(180deg,rgba(0,0,0,0.55),rgba(0,0,0,0.78));}

.cta-3d{position:absolute;inset:0;z-index:2;pointer-events:none;perspective:1100px;transform-style:preserve-3d;}
.react-atom{position:absolute;width:180px;height:180px;border-radius:999px;border:2px solid rgba(255,255,255,0.28);box-shadow:0 0 40px rgba(255,255,255,0.12);transform-style:preserve-3d;animation:atomSpin 7s linear infinite,atomFloat 4.6s ease-in-out infinite;}
.react-atom::before{content:"";position:absolute;inset:18px;border-radius:999px;border:2px dashed rgba(255,255,255,0.18);transform:translateZ(22px);}
.a1{top:16%;left:10%;transform:rotateX(68deg) rotateY(10deg);}
.a2{top:28%;right:12%;width:140px;height:140px;transform:rotateX(58deg) rotateY(22deg);animation-delay:.8s;}
.a3{bottom:12%;left:18%;width:120px;height:120px;transform:rotateX(72deg) rotateY(-18deg);animation-delay:1.6s;}
@keyframes atomSpin{from{transform:rotateX(62deg) rotateY(0deg) rotateZ(0deg);}to{transform:rotateX(62deg) rotateY(360deg) rotateZ(360deg);}}
@keyframes atomFloat{0%{translate:0 0;}50%{translate:0 -10px;}100%{translate:0 0;}}

.float-cube{position:absolute;width:90px;height:90px;border:1px solid rgba(255,255,255,0.5);background:rgba(255,255,255,0.06);box-shadow:0 0 30px rgba(255,255,255,0.14),inset 0 0 22px rgba(255,255,255,0.10);transform-style:preserve-3d;animation:cubeDrift 5.2s ease-in-out infinite,cubeRotate 2.8s linear infinite;border-radius:14px;}
.f1{top:22%;left:42%;transform:translateZ(60px);}
.f2{bottom:18%;right:18%;width:70px;height:70px;transform:translateZ(30px);animation-delay:.7s;}
.f3{top:58%;left:70%;width:60px;height:60px;transform:translateZ(40px);animation-delay:1.1s;}
@keyframes cubeRotate{from{rotate:0deg;}to{rotate:360deg;}}
@keyframes cubeDrift{0%{transform:translate3d(0,0,40px);}50%{transform:translate3d(0,-12px,70px);}100%{transform:translate3d(0,0,40px);}}

/* CTA text visibility */
.final-cta p{color:rgba(255,255,255,0.95);font-weight:700;text-shadow:0 14px 38px rgba(0,0,0,0.70),0 3px 14px rgba(0,0,0,0.45);max-width:940px;margin-left:auto;margin-right:auto;}
.final-cta > h2,.final-cta > p,.final-cta > button{position:relative;z-index:5;}

.reveal{opacity:0;transform:translateY(26px) scale(0.985);filter:blur(6px);transition:opacity 0.9s ease,transform 0.9s ease,filter 0.9s ease;}
.reveal.active{opacity:1;transform:translateY(0) scale(1);filter:blur(0);}
@keyframes zoom{from{transform:scale(1.05);}to{transform:scale(1.18);}}

/* Responsive */
@media (max-width:980px){
  .story-wrap{grid-template-columns:1fr;}
  .story-left{min-height:420px;}
  .story-photo-card{height:320px;}
  .story-right{padding:34px;}
  .story-heading{font-size:44px;}
  .vt-wrap{grid-template-columns:1fr;}
  .team-grid-5{grid-template-columns:repeat(2,1fr);}
}
@media (max-width:520px){
  h1{font-size:40px;}
  .tagline{display:none;}
  .team-grid-5{grid-template-columns:1fr;}
  .story-heading{font-size:40px;}
  .story-top{flex-direction:column;align-items:flex-start;}
}

/* CTA FX */
.cta-fx{position:absolute;inset:0;z-index:3;pointer-events:none;opacity:0;transform:scale(1.02);transition:opacity 220ms ease;}
.cta-fx.show{opacity:1;animation:ctaFxFade 2600ms ease both;}
@keyframes ctaFxFade{0%{opacity:0;transform:scale(1.03);}12%{opacity:1;transform:scale(1.01);}80%{opacity:1;}100%{opacity:0;transform:scale(1.02);}}

.cta-fx-vignette{position:absolute;inset:-1px;background:radial-gradient(900px 500px at 50% 40%,rgba(255,255,255,0.18),transparent 60%),radial-gradient(900px 600px at 50% 70%,rgba(0,0,0,0.55),rgba(0,0,0,0.88));mix-blend-mode:soft-light;opacity:.85;}
.cta-fx-grain{position:absolute;inset:-40%;background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08) 1px,transparent 1px,transparent 3px);opacity:.15;transform:rotate(-8deg);animation:grainMove 900ms steps(10) infinite;filter:grayscale(1);}
@keyframes grainMove{0%{transform:rotate(-8deg) translate3d(-2%,-2%,0);}100%{transform:rotate(-8deg) translate3d(2%,2%,0);}}

.cta-fx-marquee{position:absolute;left:0;right:0;top:14px;overflow:hidden;opacity:.75;filter:grayscale(1) contrast(1.1);}
.cta-fx-marquee-track{display:flex;gap:40px;white-space:nowrap;font-weight:900;letter-spacing:2px;text-transform:uppercase;font-size:12px;color:rgba(255,255,255,0.92);animation:marquee 1800ms linear infinite;text-shadow:0 10px 35px rgba(0,0,0,0.35);}
@keyframes marquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}

.cta-fx-stage{position:absolute;inset:0;display:grid;place-items:center;perspective:1100px;transform-style:preserve-3d;filter:grayscale(1);}
.cta-grid{position:absolute;width:650px;height:650px;background-image:linear-gradient(rgba(255,255,255,0.22) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.22) 1px,transparent 1px);background-size:46px 46px;transform:rotateX(72deg) translateZ(-140px);opacity:.55;animation:gridScroll 1200ms linear infinite;}
@keyframes gridScroll{from{background-position:0 0;}to{background-position:0 46px;}}

.cta-cube{position:absolute;width:120px;height:120px;border:1px solid rgba(255,255,255,0.62);box-shadow:0 0 25px rgba(255,255,255,0.22),inset 0 0 20px rgba(255,255,255,0.16);transform-style:preserve-3d;background:rgba(255,255,255,0.04);animation:cubeSpin 1600ms linear infinite;}
.cta-cube::before,.cta-cube::after{content:"";position:absolute;inset:10px;border:1px dashed rgba(255,255,255,0.35);transform:translateZ(30px);opacity:.8;}
.cta-cube::after{inset:22px;transform:translateZ(-30px);opacity:.6;}

.cta-cube.c1{transform:translate3d(0,-18px,70px) rotateX(18deg) rotateY(22deg);}
.cta-cube.c2{width:88px;height:88px;transform:translate3d(190px,40px,40px) rotateX(30deg) rotateY(-18deg);animation-duration:1400ms;opacity:.9;}
.cta-cube.c3{width:70px;height:70px;transform:translate3d(-200px,48px,25px) rotateX(-18deg) rotateY(35deg);animation-duration:1300ms;opacity:.85;}
@keyframes cubeSpin{from{transform:translate3d(var(--tx,0),var(--ty,0),var(--tz,0)) rotateX(0) rotateY(0);}to{transform:translate3d(var(--tx,0),var(--ty,0),var(--tz,0)) rotateX(360deg) rotateY(360deg);}}
.cta-cube.c1{--tx:0px;--ty:-18px;--tz:70px;}
.cta-cube.c2{--tx:190px;--ty:40px;--tz:40px;}
.cta-cube.c3{--tx:-200px;--ty:48px;--tz:25px;}

.cta-scan{position:absolute;width:820px;height:2px;background:rgba(255,255,255,0.55);box-shadow:0 0 35px rgba(255,255,255,0.35);transform:rotateX(72deg) translateZ(-110px);animation:scanMove 900ms ease-in-out infinite;opacity:.55;}
@keyframes scanMove{0%{transform:rotateX(72deg) translate3d(0,-120px,-110px);}50%{transform:rotateX(72deg) translate3d(0,120px,-110px);}100%{transform:rotateX(72deg) translate3d(0,-120px,-110px);}}
`;

export default function About() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [ctaFx, setCtaFx] = useState(false);

  const [storyIndex, setStoryIndex] = useState(0);
  const [storyFrom, setStoryFrom] = useState(0);
  const [storyDir, setStoryDir] = useState("next");
  const [showFrom, setShowFrom] = useState(false);
  const [storyAnimKey, setStoryAnimKey] = useState(0);
  const [storyPaused, setStoryPaused] = useState(false);

  const touchRef = useRef({ startX: 0, startY: 0, active: false });
  const rootRef = useRef(null);
  const aboutTrackRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      sections.forEach((sec) => sec.classList.add("active"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("active")),
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setHeroIndex((p) => (p + 1) % IMAGES.hero.length), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const el = aboutTrackRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const onMove = (e) => {
      const r = root.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      root.style.setProperty("--mx", `${x}%`);
      root.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const onAboutMouseMove = (e) => {
    const el = aboutTrackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(1, Math.max(0, x / rect.width));
    const maxScroll = el.scrollWidth - el.clientWidth;
    const target = maxScroll * percent;
    el.scrollLeft += (target - el.scrollLeft) * 0.08;
  };

  const goStory = (nextIndex, dir) => {
    setStoryFrom(storyIndex);
    setStoryDir(dir);
    setShowFrom(true);
    setStoryIndex(nextIndex);
    setStoryAnimKey((k) => k + 1);

    window.clearTimeout(goStory._t);
    goStory._t = window.setTimeout(() => setShowFrom(false), STORY_ANIM_MS + 40);
  };

  const prevStory = () => goStory((storyIndex - 1 + IMAGES.story.length) % IMAGES.story.length, "prev");
  const nextStory = () => goStory((storyIndex + 1) % IMAGES.story.length, "next");

  useEffect(() => {
    if (storyPaused) return;
    const t = setInterval(() => nextStory(), STORY_INTERVAL);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storyIndex, storyPaused]);

  const onStoryTouchStart = (e) => {
    const t = e.touches?.[0];
    if (!t) return;
    touchRef.current = { startX: t.clientX, startY: t.clientY, active: true };
    setStoryPaused(true);
  };

  const onStoryTouchMove = (e) => {
    if (!touchRef.current.active) return;
    const t = e.touches?.[0];
    if (!t) return;
    const dx = t.clientX - touchRef.current.startX;
    const dy = t.clientY - touchRef.current.startY;
    if (Math.abs(dy) > Math.abs(dx)) return;
    e.preventDefault();
  };

  const onStoryTouchEnd = (e) => {
    if (!touchRef.current.active) return;
    const t = e.changedTouches?.[0];
    if (!t) {
      touchRef.current.active = false;
      setStoryPaused(false);
      return;
    }
    const dx = t.clientX - touchRef.current.startX;
    touchRef.current.active = false;

    const SWIPE_MIN = 42;
    if (dx > SWIPE_MIN) prevStory();
    else if (dx < -SWIPE_MIN) nextStory();
    setStoryPaused(false);
  };

  const triggerCtaFx = () => {
    setCtaFx(true);
    window.clearTimeout(triggerCtaFx._t);
    triggerCtaFx._t = window.setTimeout(() => setCtaFx(false), 2600);
  };

  return (
    <div className="levro-root" ref={rootRef}>
      <header className="top-bar">
        <div className="brand">LEVRO</div>
        <div className="tagline">Technology • Innovation • Trust</div>
      </header>

      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url('${IMAGES.hero[heroIndex]}')` }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1><span>About us</span></h1>
          <p>
            We are a technology-driven team dedicated to crafting meaningful
            digital experiences through thoughtful design and innovation. Our
            goal is to build reliable, scalable, and impactful solutions that
            empower businesses to adapt, grow, and succeed in the digital era.
          </p>
          <button className="primary-btn">Explore Our Work</button>
        </div>
      </section>

      <section className="section reveal mission-vision-template">
        <div className="mv-wrapper">
          <div className="mv-image">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
              alt="Mission and Vision"
            />
          </div>
          <div className="mv-content">
            <span className="section-label">OUR PURPOSE</span>
            <h2>Mission & Vision</h2>

            <div className="mv-box">
              <h3>Our Mission</h3>
              <p>
                Our mission is to transform ideas into meaningful digital
                experiences that people can trust. By combining thoughtful
                design with modern technology, we build scalable solutions
                focused on real needs. We believe in creating products with
                purpose, quality, and lasting value.
              </p>
            </div>

            <div className="mv-box">
              <h3>Our Vision</h3>
              <p>
                Our vision is to create technology that helps businesses grow
                and innovate. We focus on simple, intelligent solutions built to
                adapt and evolve. We strive to lead with creativity, integrity,
                and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal about-us about-flow">
        <div className="flow-header">
          <div className="flow-title">
            <span className="section-label">OVERVIEW</span>
            <h2>Who We Are</h2>
          </div>
          <p className="flow-subtext">Hover to explore our company at a glance.</p>
        </div>

        <div className="flow-track" ref={aboutTrackRef} onMouseMove={onAboutMouseMove}>
          {ABOUT_CARDS.map((c) => (
            <article className="flow-card" key={c.title}>
              <div className="flow-media">
                <img src={c.img} alt={c.alt} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal levro-story">
        <div className="story-bg" />
        <div className="story-overlay" />

        <div className="story-wrap">
          <div className="story-left" onMouseEnter={() => setStoryPaused(true)} onMouseLeave={() => setStoryPaused(false)}>
            <div className="story-logo">L</div>

            <div className="story-photo-card" onTouchStart={onStoryTouchStart} onTouchMove={onStoryTouchMove} onTouchEnd={onStoryTouchEnd}>
              {showFrom && (
                <img
                  key={`from-${storyAnimKey}`}
                  className={`story-photo slide-out ${storyDir}`}
                  src={IMAGES.story[storyFrom]}
                  alt="Previous team moment"
                />
              )}

              <img
                key={`to-${storyAnimKey}-${storyIndex}`}
                className={`story-photo slide-in ${storyDir}`}
                src={IMAGES.story[storyIndex]}
                alt="Levro team moments"
              />

              <div className="mini-chip mini-1">Planning</div>
              <div className="mini-chip mini-2">Design</div>
              <div className="mini-chip mini-3">Sprint</div>

              <div className="story-photo-fade" />
            </div>

            <div className="story-arrows">
              <button className="story-arrow" onClick={prevStory} aria-label="Previous">‹</button>
              <button className="story-arrow" onClick={nextStory} aria-label="Next">›</button>
            </div>

            <div className="story-dots">
              {IMAGES.story.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === storyIndex ? "active" : ""}`}
                  onClick={() => goStory(i, i > storyIndex ? "next" : "prev")}
                  role="button"
                  tabIndex={0}
                />
              ))}
            </div>

            <div className="story-hint">Hover to pause • Swipe on mobile</div>
          </div>

          <div className="story-right">
            <div className="story-top">
              <div className="story-brand">LEVRO</div>
              <div className="story-badge">BUILD • DESIGN • SCALE</div>
            </div>

            <h2 className="story-heading">
              <span className="story-white">OUR</span>{" "}
              <span className="story-purple">STORY</span>
            </h2>

            <div className="story-quote">
              <div className="quote-mark">“</div>
              <p className="quote-text">
                We don’t just ship features — we build clarity. Every pixel and
                every line of code is made to earn trust.
              </p>
            </div>

            <div className="story-long">
              <p className="story-long-text">
                Levro started from a problem we experienced ourselves—good ideas
                slowed down by complex tools, unclear processes, and systems
                that were hard to maintain. We saw teams spending more time
                managing technology than focusing on real growth.
              </p>
              <p className="story-long-text">
                That led us to build Levro differently. We keep technology
                simple, practical, and dependable by bringing clean design and
                solid engineering together to create solutions that work well
                and scale smoothly.
              </p>
              <p className="story-long-text">
                As a growing startup, we work closely with our clients,
                listening carefully and building alongside them. For us, Levro
                is about creating solutions that truly help people move
                forward—not just delivering projects.
              </p>
            </div>

            <div className="story-steps">
              {STORY_STEPS.map((s) => (
                <div className="step-card" style={{ animationDelay: s.delay }} key={s.no}>
                  <div className="step-no">{s.no}</div>
                  <div className="step-body">
                    <h4>{s.title}</h4>
                    <p>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="story-mini-cta">
              <div className="cta-left">
                <strong>Want a product that feels premium?</strong>
                <span>Let’s build it with Levro.</span>
              </div>
              <button className="story-cta-btn">Talk to Us</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal values-team-split">
        <div className="vt-wrap">
          <div className="values-panel">
            <div className="values-new">
              <div className="values-new-head">
                <span className="vt-label">CORE VALUES</span>
                <h2 className="vt-title">What We Stand For</h2>
                <p className="values-new-sub">Simple values that guide how we work — every day.</p>
              </div>

              <div className="values-new-grid">
                {[
                  ["01", "Build with purpose", "We choose what matters, not what’s loud."],
                  ["02", "Stay transparent", "Clear updates, honest decisions, no confusion."],
                  ["03", "Think like users", "We design for real people and real outcomes."],
                  ["04", "Ship quality", "Performance, clean code, and long-term stability."],
                  ["05", "Keep improving", "Learn, iterate, and level up continuously."],
                ].map(([no, title, sub]) => (
                  <div className="vcard" key={no}>
                    <div className="vchip">{no}</div>
                    <div className="vtxt">
                      <strong>{title}</strong>
                      <span>{sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="team-panel">
            <div className="team-head">
              <span className="vt-label">MEET THE TEAM</span>
              <h2 className="vt-title">People Behind Levro</h2>
              <p className="team-sub">
                A focused team of builders, designers, and strategists — working
                together to deliver reliable digital systems.
              </p>
            </div>

            <div className="team-grid-5">
              {TEAM.map((m) => (
                <div className="team-card-pro" key={m.name}>
                  <div className="avatar-ring">
                    <img src={m.img} alt={m.alt} />
                  </div>
                  <h4>{m.name}</h4>
                  <p>{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal why-choose-us">
        <span className="section-label">WHY LEVRO</span>
        <h2>Why You Should Choose Us</h2>

        <p className="section-subtext" style={{ margin: "0 auto", textAlign: "center", maxWidth: "900px" }}>
          We believe good solutions come from listening, planning carefully, and
          building with responsibility. We may be a startup, but we focus on
          delivering reliable and thoughtful work. Our goal is to create
          solutions that clients can trust and grow with over time.
        </p>

        <div className="why-grid">
          {WHY.map((w) => (
            <div className="why-card" key={w.title}>
              <img src={w.img} alt={w.alt} />
              <h4>{w.title}</h4>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`final-cta reveal ${ctaFx ? "cta-fx-on" : ""}`}>
        <div className="cta-bg-image" aria-hidden="true" />

        <video className="cta-bg-video" autoPlay muted loop playsInline>
          <source src="https://cdn.coverr.co/videos/coverr-coding-on-a-laptop-5178/1080p.mp4" type="video/mp4" />
        </video>

        <div className="cta-bg-overlay" aria-hidden="true" />

        <div className="cta-3d" aria-hidden="true">
          <div className="react-atom a1" />
          <div className="react-atom a2" />
          <div className="react-atom a3" />
          <div className="float-cube f1" />
          <div className="float-cube f2" />
          <div className="float-cube f3" />
        </div>

        <div className={`cta-fx ${ctaFx ? "show" : ""}`} aria-hidden="true">
          <div className="cta-fx-vignette" />
          <div className="cta-fx-grain" />
          <div className="cta-fx-marquee">
            <div className="cta-fx-marquee-track">
              <span>LEVRO WELCOMES YOU • LEVRO WELCOMES YOU • LEVRO WELCOMES YOU • </span>
              <span>LEVRO WELCOMES YOU • LEVRO WELCOMES YOU • LEVRO WELCOMES YOU • </span>
            </div>
          </div>
          <div className="cta-fx-stage">
            <div className="cta-grid" />
            <div className="cta-cube c1" />
            <div className="cta-cube c2" />
            <div className="cta-cube c3" />
            <div className="cta-scan" />
          </div>
        </div>

        <h2>Ready to Build Something Exceptional?</h2>
        <p>
          Got an idea you’ve been thinking about? Let’s talk it through and
          shape it into something real and meaningful. We’d love to build
          something that works the way you truly imagined.
        </p>

        <button className="primary-btn" onPointerDown={triggerCtaFx} onClick={triggerCtaFx}>
          Contact Levro
        </button>
      </section>

      <style>{STYLES}</style>
    </div>
  );
}
