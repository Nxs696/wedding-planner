import React, { useState } from 'react';
import '../styles/AuthPopup.css';

const AuthPopup = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode);

  if (!isOpen) return null;

  return (
    <div className="auth-popup-overlay" onClick={onClose}>
      <div className="auth-popup-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <div className="auth-tabs">
          <button 
            className={`tab-button ${mode === 'login' ? 'active' : ''}`}
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button 
            className={`tab-button ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => setMode('signup')}
          >
            Sign Up
          </button>
        </div>

        {mode === 'login' ? (
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <h2>Welcome Back</h2>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Email" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                placeholder="Password" 
                required 
              />
            </div>
            <button type="submit" className="submit-button">
              Login
            </button>
            <p className="form-footer">
              Don't have an account? 
              <button 
                type="button" 
                className="switch-mode-button"
                onClick={() => setMode('signup')}
              >
                Sign Up
              </button>
            </p>
          </form>
        ) : (
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <h2>Create Account</h2>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Full Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Email" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                placeholder="Password" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                placeholder="Confirm Password" 
                required 
              />
            </div>
            <button type="submit" className="submit-button">
              Sign Up
            </button>
            <p className="form-footer">
              Already have an account? 
              <button 
                type="button" 
                className="switch-mode-button"
                onClick={() => setMode('login')}
              >
                Login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPopup;