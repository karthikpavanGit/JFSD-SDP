import React from 'react';
import './Home.css'; // Ensure that Home.css already contains your previous styles

const products = [
  {
    id: 1,
    name: 'Handloom Scarf',
    price: '₹30',
    image: require('./images/handloomscarf.jpg'), // Replace with your image paths
  },
  {
    id: 2,
    name: 'Handloom Shirt',
    price: '₹50',
    image: require('./images/handloomscarf.jpg'),
  },
  {
    id: 3,
    name: 'Handloom Bag',
    price: '₹25',
    image: require('./images/handloomscarf.jpg'),
  },
  {
    id: 1,
    name: 'Handloom Scarf',
    price: '₹30',
    image: require('./images/handloomscarf.jpg'), // Replace with your image paths
  },
  {
    id: 2,
    name: 'Handloom Shirt',
    price: '₹50',
    image: require('./images/handloomscarf.jpg'),
  },
  {
    id: 3,
    name: 'Handloom Bag',
    price: '₹25',
    image: require('./images/handloomscarf.jpg'),
  },
  {
    id: 1,
    name: 'Handloom Scarf',
    price: '₹30',
    image: require('./images/handloomscarf.jpg'), // Replace with your image paths
  },
  {
    id: 2,
    name: 'Handloom Shirt',
    price: '₹50',
    image: require('./images/handloomscarf.jpg'),
  },
  {
    id: 3,
    name: 'Handloom Bag',
    price: '₹25',
    image: require('./images/handloomscarf.jpg'),
  },
  {
    id: 3,
    name: 'Handloom Bag',
    price: '₹25',
    image: require('./images/handloomscarf.jpg'),
  },
  {
    id: 3,
    name: 'Handloom Bag',
    price: '₹25',
    image: require('./images/handloomscarf.jpg'),
  },
  {
    id: 3,
    name: 'Handloom Bag',
    price: '₹25',
    image: require('./images/handloomscarf.jpg'),
  },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Existing header and welcome box content */}
      <header className="home-header">
        <h1>Handloom Fashion Store</h1>
        <div className="auth-buttons">
          <a href="/welcome" className="auth-button">Products</a>
          
        </div>
      </header>

      <div className="welcome-box">
        <h2>Welcome to Handloom Fashion World</h2>
        <p>Explore the finest products crafted by artisans from around the world.</p>
        <a href="/about" className="about-button">About Us</a>
      </div>

      {/* New Products Section (Added at the bottom) */}
      <div className="products-section" onClick={() => window.location.href = '/login'}>
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
        <p>Fashion</p>
      </div>
      
    </div>
    
  );
};

export default Home;
