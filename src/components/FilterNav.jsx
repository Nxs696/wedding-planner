import React from "react";
import "./FilterNav.css";

const FilterNav = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-nav">
      <div className="filter-item">
        <select
          className="filter-select"
          value={filters.guests}
          onChange={(e) => onFilterChange("guests", e.target.value)}
        >
          <option value="">No. of Guests</option>
          <option value="0-100">0-100</option>
          <option value="100-300">100-300</option>
          <option value="300-500">300-500</option>
          <option value="500+">500+</option>
        </select>
      </div>

      <div className="filter-item">
        <select
          className="filter-select"
          value={filters.rooms}
          onChange={(e) => onFilterChange("rooms", e.target.value)}
        >
          <option value="">Room Count</option>
          <option value="0-10">0-10</option>
          <option value="10-30">10-30</option>
          <option value="30-50">30-50</option>
          <option value="50+">50+</option>
        </select>
      </div>

      <div className="filter-item">
        <select
          className="filter-select"
          value={filters.pricePerPlate}
          onChange={(e) => onFilterChange("pricePerPlate", e.target.value)}
        >
          <option value="">Price per Plate</option>
          <option value="0-1000">₹0-1000</option>
          <option value="1000-2000">₹1000-2000</option>
          <option value="2000-3000">₹2000-3000</option>
          <option value="3000+">₹3000+</option>
        </select>
      </div>

      <div className="filter-item">
        <select
          className="filter-select"
          value={filters.rentalCost}
          onChange={(e) => onFilterChange("rentalCost", e.target.value)}
        >
          <option value="">Rental Cost</option>
          <option value="0-100000">₹0-1L</option>
          <option value="100000-300000">₹1L-3L</option>
          <option value="300000-500000">₹3L-5L</option>
          <option value="500000+">₹5L+</option>
        </select>
      </div>

      <div className="filter-item">
        <select
          className="filter-select"
          value={filters.venueType}
          onChange={(e) => onFilterChange("venueType", e.target.value)}
        >
          <option value="">Venue Type</option>
          <option value="banquet">Banquet Hall</option>
          <option value="lawn">Lawn</option>
          <option value="farmhouse">Farmhouse</option>
          <option value="resort">Resort</option>
          <option value="hotel">Hotel</option>
        </select>
      </div>

      <div className="filter-item">
        <select
          className="filter-select"
          value={filters.space}
          onChange={(e) => onFilterChange("space", e.target.value)}
        >
          <option value="">Space</option>
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
          <option value="both">Both</option>
        </select>
      </div>

      <div className="filter-item">
        <select
          className="filter-select"
          value={filters.rating}
          onChange={(e) => onFilterChange("rating", e.target.value)}
        >
          <option value="">Rating</option>
          <option value="4+">4+ ⭐</option>
          <option value="3+">3+ ⭐</option>
          <option value="2+">2+ ⭐</option>
        </select>
      </div>
    </div>
  );
};

export default FilterNav;
