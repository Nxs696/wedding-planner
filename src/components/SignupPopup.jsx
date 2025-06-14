import React from 'react';
import '../styles/SignupPopup.css';

const SignupPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Signup attempt');
  };

  return (
    <div className="signup-popup-overlay" onClick={onClose}>
      <div className="signup-popup-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <h2>Sign Up</h2>
        
        <form className="signup-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Full Name" 
            required 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            required 
          />
          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPopup;