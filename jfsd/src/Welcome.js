import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';  // Make sure to include the CSS file for styling

const Welcome = () => {
  return (
    <div className="welcome-container">
      {/* Top heading with black background and white text */}
      <header className="store-header">
        <h1>Handloom Fashion Store</h1>
      </header>

      {/* Box containing the navigation and other content */}
      <div className="welcome-box">
        <h2>Welcome to Handloom World</h2>
        <p>Explore the beauty of handloom fashion!</p>

        {/* Navigation Links inside the box */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Welcome;