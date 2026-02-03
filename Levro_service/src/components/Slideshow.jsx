import { useEffect, useState } from "react";
import img1 from "../assets/images/slide1.png";
import img2 from "../assets/images/slide2.webp";
import img3 from "../assets/images/slide3.webp";
import "./Slideshow.css";

const images = [img1, img2, img3];

function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 2900);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow">
      <img src={images[index]} />
    </div>
  );
}

export default Slideshow;
