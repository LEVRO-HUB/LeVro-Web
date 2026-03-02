import React, { useState, useEffect } from "react";
import "./ContactSlide.css";

import con1 from "../assets/Images/con1.png";
import con2 from "../assets/Images/con2.png";
import con3 from "../assets/Images/con3.png";

const ContactSlide = () => {
  const images = [con1, con2, con3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500)   ; // every 3 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="contact-slide">
      <div className="slide-viewport">
        <div
          className="slide-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div className="slide-wrapper" key={i}>
              <img
                src={img}
                alt={`Slide ${i}`}
                className="slide-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSlide;
