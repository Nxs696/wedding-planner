import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-phone"></i> +1 (555) 123-4567
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@weddingplanner.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> 123 Wedding Street, City,
            Country
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/venues">Venues</a>
            </li>
            <li>
              <a href="/vendors">Vendors</a>
            </li>
            <li>
              <a href="/packages">Wedding Packages</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
              <span className="social-tooltip">Facebook</span>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
              <span className="social-tooltip">Instagram</span>
            </a>
            <a href="#" className="social-link" aria-label="Pinterest">
              <i className="fab fa-pinterest-p"></i>
              <span className="social-tooltip">Pinterest</span>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
              <span className="social-tooltip">Twitter</span>
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
              <span className="social-tooltip">YouTube</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Wedding Planner. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
