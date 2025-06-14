import React, { useEffect, useRef } from "react";
import "./Partners.css";

const Partners = () => {
  const sliderRef = useRef(null);

  // Use text as fallback instead of unreliable external image URLs
  const partners = [
    { name: "Taj Hotels", id: "taj" },
    { name: "Le Meridien", id: "meridien" },
    { name: "The Leela", id: "leela" },
    { name: "Ramada", id: "ramada" },
    { name: "Saraswathi Resorts", id: "saraswathi" },
  ];

  // Auto-sliding effect
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    let scrollDirection = 1;
    let isHovering = false;

    // Handle mouse enter/leave to pause/resume animation
    const handleMouseEnter = () => {
      isHovering = true;
    };
    const handleMouseLeave = () => {
      isHovering = false;
    };

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    const slideInterval = setInterval(() => {
      if (isHovering) return;

      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollDirection = -1; // Reverse direction at the end
      } else if (scrollAmount <= 0) {
        scrollDirection = 1; // Forward direction at the start
      }

      scrollAmount += scrollDirection * 1;
      slider.scrollLeft = scrollAmount;
    }, 30);

    return () => {
      clearInterval(slideInterval);
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="partners-section">
      <h2>Partnered with the best in the industry</h2>

      <div className="partners-logo-container" ref={sliderRef}>
        {partners.map((partner) => (
          <div key={partner.id} className="partner-logo">
            <div className="partner-name">{partner.name}</div>
          </div>
        ))}
        {/* Duplicate partners for continuous scrolling effect */}
        {partners.map((partner) => (
          <div key={`${partner.id}-dup`} className="partner-logo">
            <div className="partner-name">{partner.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
