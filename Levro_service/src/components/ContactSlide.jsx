import React, { useState, useEffect } from "react";
import "./ContactSlide.css";

import con1 from "../assets/Images/slidee1.jpg";
import con2 from "../assets/Images/slidee2.jpg";
import con3 from "../assets/Images/slidee3.jpg";

const ContactSlide = () => {
  const images = [con1, con2, con3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000)   ; // every 3 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="contact-slide">
      <div className="slide-wrapper">
        <img
          src={images[index]}
          alt={`Slide ${index}`}
          className="slide-img"
          key={index} // forces re-render for animation
        />
      </div>
      <p className="slide-paragraph">
        Levro is committed to delivering innovative IT solutions that blend
        design elegance with technical precision. Our team thrives on
        collaboration and transparency, ensuring every project meets client
        expectations.
      </p>
    </div>
  );
};

export default ContactSlide;
