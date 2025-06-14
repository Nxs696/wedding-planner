import React, { useState, useEffect } from "react";
import "./VenueCard.css";
import LoadingScreen from "./LoadingScreen";

const VenueCard = ({ venue }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-change images on hover with 3-second interval
  useEffect(() => {
    let intervalId;

    if (isHovering) {
      intervalId = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % venue.images.length
        );
      }, 3000); // Changed to 3 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isHovering, venue.images.length]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCurrentImageIndex(0); // Reset to first image when mouse leaves
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleBookNow = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 1500 + Math.random() * 1000)
      );
      console.log(`Booking venue: ${venue.name}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} message="Processing your booking" />
      <div className="venue-card">
        <div
          className="venue-image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="image-slider"
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`,
            }}
          >
            {venue.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${venue.name} - ${index + 1}`}
              />
            ))}
          </div>
          <div className="carousel-dots">
            {venue.images.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentImageIndex ? "active" : ""
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
          {venue.mostBooked && (
            <span className="tag most-booked">Most Booked</span>
          )}
          {venue.mostLiked && (
            <span className="tag most-liked">Most Liked</span>
          )}
        </div>
        <div className="venue-info">
          <h3>{venue.name}</h3>
          <p className="location">📍 {venue.location}</p>
          <p className="description">{venue.description}</p>
          <div className="venue-details">
            {venue.type && <span className="venue-type">{venue.type}</span>}
            {venue.space && <span className="venue-space">{venue.space}</span>}
          </div>
          <div className="stats">
            <span className="rating">
              ⭐ {venue.rating} ({venue.reviews} reviews)
            </span>
            <span className="price">{venue.price}</span>
          </div>
          <button className="book-now-btn" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default VenueCard;
