import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/WelcomePage.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="welcome-page">
      <h1>Welcome to My App!</h1>
      <p>Your journey starts here. What would you like to do?</p>

      <div className="welcome-actions">
        <button onClick={() => handleNavigate("/logout")}>Logout</button>
      </div>
    </div>
  );
};

export default WelcomePage;
