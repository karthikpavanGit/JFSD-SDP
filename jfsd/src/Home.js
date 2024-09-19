import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>AP Fashion World</h1>
        <div className="auth-buttons">
          <Link to="/login" className="auth-button">Sign In</Link>
          <Link to="/signup" className="auth-button">Sign Up</Link>
        </div>
      </header>

      <div className="welcome-box">
        <h2>Welcome to the world of beautiful products!</h2>
        <p>Explore our exclusive collection of handmade garments and accessories crafted by skilled artisans.</p>
        <Link to="/about" className="about-button">About Us</Link>
      </div>
    </div>
  );
};

export default Home;