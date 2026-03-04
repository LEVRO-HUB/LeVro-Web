import ContactUs from './Pages/ContactUs';
import './App.css';
import Home from './Pages/Home';
import Service from './Pages/Service';

import About from './Pages/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToHash from "./components/ScrollToHash";


import AboutUs from './Pages/Aboutus';

function Mainpage() {
  return ( 
    <>
      <section id="home"><Home /></section>
      <section id="services"><Service /></section>
      <section id="about"><About /></section>
      <section id="contact"><ContactUs /></section>
    </>
  );
}
function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App