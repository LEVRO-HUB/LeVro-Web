import { useState, useEffect, useCallback } from 'react';
import ContactUs from './Pages/ContactUs';
import './App.css';
import Home from './Pages/Home';
import Platforms from './Pages/Platforms';
import About from './Pages/About';
import Services from './Pages/Services';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollIndicator from './components/ScrollIndicator';
import ScrollToHash from "./components/ScrollToHash";

function Mainpage() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(() => {
    const sectionIds = window.innerWidth < 768 
      ? ['home', 'platforms', 'about', 'contact']
      : ['home', 'platforms', 'services', 'about', 'contact'];
    const vHeight = window.innerHeight;

    // Check for the section that occupies the center of the screen
    let current = activeSection;
    let minDistance = Infinity;

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Distance from the center of the section to the top-third of the screen
        const sectionCenter = rect.top + rect.height / 2;
        const screenTrigger = vHeight / 3;
        const distance = Math.abs(sectionCenter - screenTrigger);

        if (rect.top < vHeight / 2 && rect.bottom > vHeight / 3) {
          // If the section is currently occupying the primary viewing area
          if (distance < minDistance) {
            minDistance = distance;
            current = id;
          }
        }
      }
    });

    if (current !== activeSection) {
      setActiveSection(current);
    }
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative overflow-x-hidden">
      <ScrollIndicator activeSection={activeSection} />
      <section id="home" className="relative scroll-mt-24 md:scroll-mt-44"><Home /></section>
      <section id="platforms" className="relative scroll-mt-24 md:scroll-mt-44"><Platforms /></section>
      <section id="services" className="relative scroll-mt-24 md:scroll-mt-44 hidden md:block"><Services /></section>
      <section id="about" className="relative scroll-mt-24 md:scroll-mt-44"><About /></section>
      <section id="contact" className="relative scroll-mt-24 md:scroll-mt-44"><ContactUs /></section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        {/* Redirect unknown routes (like /careers) to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;