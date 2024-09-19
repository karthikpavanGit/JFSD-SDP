import React from 'react';
import './Home.css'; // Ensure that Home.css already contains your previous styles

const products = [
  {
    id: 1,
    name: 'Handloom Scarf',
    price: '$30',
    image: '/path-to-your-image1.jpg', // Replace with your image paths
  },
  {
    id: 2,
    name: 'Handloom Shirt',
    price: '$50',
    image: '/path-to-your-image2.jpg',
  },
  {
    id: 3,
    name: 'Handloom Bag',
    price: '$25',
    image: '/path-to-your-image3.jpg',
  },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Existing header and welcome box content */}
      <header className="home-header">
        <h1>Handloom Fashion Store</h1>
        <div className="auth-buttons">
          <a href="/login" className="auth-button">Sign In</a>
          <a href="/signup" className="auth-button">Sign Up</a>
        </div>
      </header>

      <div className="welcome-box">
        <h2>Welcome to Handloom Fashion World</h2>
        <p>Explore the finest handloom products crafted by artisans from around the world.</p>
        <a href="/about" className="about-button">About Us</a>
      </div>

      {/* New Products Section (Added at the bottom) */}
      <div className="products-section">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
