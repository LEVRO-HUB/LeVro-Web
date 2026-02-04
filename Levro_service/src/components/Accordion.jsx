import React, { useState } from "react";
import "./Accordion.css";

const AccordionItem = ({ number, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="accordion-number">{number}</span>
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
          <button className="accordion-btn">Learn More</button>
        </div>
      )}
    </div>
  );
};

export default function Accordion() {
  return (
    <div className="accordion">
      <AccordionItem
        number="01"
        title="New business requests"
        content="Seeking a strategic partnership or have a specific project in mind? We're here to listen and eager to explore how we can collaborate with you."
      />
      <AccordionItem
        number="02"
        title="Job seekers"
        content="Looking for opportunities? Explore careers with us and join our innovative team."
      />
      <AccordionItem
        number="03"
        title="Media and press"
        content="For press inquiries and media requests, please reach out to our communications team."
      />
      <AccordionItem
        number="04"
        title="Investors"
        content="Interested in investment opportunities? Connect with our investor relations team."
      />
    </div>
  );
}
