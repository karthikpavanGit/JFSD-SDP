import React from 'react';
import './Welcome.css';
// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import myImage from './Nakshatra.jpg'; // Import the image

const Welcome = () => {
  return (
    <div className="welcome-container">
      <nav className="navbar">
        <div>
          <img src={myImage} alt="Nakshatra Threads" className="account-button" />
        </div>
        <div className="logo">Nakshatra Threads</div>

        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>

        {/* Icon Buttons for Account, Wishlist, Cart */}
        <div className="nav-buttons">
          <button className="icon-button" onClick={() => window.location.href = '/account'}>
            <FontAwesomeIcon icon={faUser} /> ACCOUNT
          </button>
          <button className="icon-button" onClick={() => window.location.href = '/wishlist'}>
            <FontAwesomeIcon icon={faHeart} /> WISHLIST
          </button>
          <button className="icon-button" onClick={() => window.location.href = '/cart'}>
            <FontAwesomeIcon icon={faShoppingCart} /> CART
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Welcome;