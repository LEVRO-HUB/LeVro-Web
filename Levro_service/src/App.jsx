import ContactUs from './Pages/ContactUs';
import './App.css';
import Home from './Pages/Home';
import Service from './Pages/Service';
import About from './Pages/About';
import Careers from './Pages/Careers';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToHash from "./components/ScrollToHash";



function MainPage() {
  return ( 
    <>
      <section id="home"><Home /></section>
      <section id="services"><Service /></section>
      <section id="about"><About /></section>
      <section id="contact"><ContactUs /></section>
    </>
  //  // 
  //  <Router>
  //     <Navbar />
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/contact" element={<ContactUs />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/services" element={<Service />} />
  //       <Route path="/careers" element={<Careers />} />
  //     </Routes>
  //     <Footer />
  //   </Router>
  );
}
function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App