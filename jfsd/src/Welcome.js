import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <nav className="navbar">
        <div className="logo">Handloom Fashion</div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
        <div className="nav-links">
          <a href="/account" className="nav-link">ACCOUNT</a>
          <a href="/wishlist" className="nav-link">WISHLIST</a>
          <a href="/cart" className="nav-link">CART</a>
        </div>
      </nav>
    </div>
  );
};

export default Welcome;