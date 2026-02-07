import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ContactUs from './Pages/ContactUs';
import './App.css';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Careers from './Pages/Careers';

function App() {
  return ( 
   // 
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/about" element={<div>About Page</div>} /> */}
        <Route path="/services" element={<Service />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
