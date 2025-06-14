import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="menu-left"></div>

        <h1>Wedding Planner</h1>

        <div className="menu-right">
          <div className="auth-buttons desktop-auth">
            <button className="auth-btn login" onClick={onLoginClick}>
              Log In
            </button>
            <button className="auth-btn signup" onClick={onSignupClick}>
              Sign Up
            </button>
          </div>
          <div className="hamburger" onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button className="close-btn" onClick={toggleSidebar}>
            ×
          </button>
        </div>
        <div className="sidebar-content">
          <button className="auth-btn login" onClick={onLoginClick}>
            Log In
          </button>
          <button className="auth-btn signup" onClick={onSignupClick}>
            Sign Up
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${isSidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default Navbar;
