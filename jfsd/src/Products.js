import React from 'react';
import './Products.css';  // Import the CSS for styling
import './Saree.webp'as {Saree}
const Products = () => {
  const products = [
    { id: 1, name: "Handloom Saree", price: "$49.99", image: "Saree" },
    { id: 2, name: "Handloom Kurta", price: "$39.99", image: "kurta.jpg" },
    { id: 3, name: "Handloom Scarf", price: "$19.99", image: "scarf.jpg" },
    { id: 4, name: "Handloom Bag", price: "$29.99", image: "bag.jpg" }
  ];

  return (
    <div className="products-container">
      <h1>Our Handloom Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-title">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;