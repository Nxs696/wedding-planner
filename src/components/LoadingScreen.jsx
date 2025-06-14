import { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ isLoading, message = "Loading" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner" />
        <p className="loading-text">
          {message}
          <span className="dots-animation">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
