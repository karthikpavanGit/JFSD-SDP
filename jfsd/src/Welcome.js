import React from 'react';
import './Welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import myImage from './Nakshatra.jpg';
import sareeImage from './Saree-nav.jpeg';
import kurtaImage from './Saree-nav.jpeg';

const products = [
  { name: "Product 1", image: require('./images/Saree.webp') },
  { name: "Product 2", image: require('./images/Saree.webp') },
  { name: "Product 3", image: require('./images/Saree.webp') },
  { name: "Product 4", image: require('./images/Saree.webp') },
  { name: "Product 5", image: require('./images/Saree.webp') }
];

const pricerange = [
  { name: "Price Range 1", image: require('./images/price1.webp') },
  { name: "Price Range 2", image: require('./images/price1.webp') },
  { name: "Price Range 3", image: require('./images/price1.webp') },
  { name: "Price Range 4", image: require('./images/price1.webp') },
  { name: "Price Range 5", image: require('./images/price1.webp') }
];

const handcrafted = [
  { name: "Kurta 1", image: require('./images/kurta1.jpg') },
  { name: "Kurta 2", image: require('./images/kurta1.jpg') },
  { name: "Kurta 3", image: require('./images/kurta1.jpg') },
  { name: "Kurta 4", image: require('./images/kurta1.jpg') },
  { name: "Kurta 5", image: require('./images/kurta1.jpg') }
];
const BestSelling = [
  { name: "Best Selling", image: require('./images/BestSelling.webp') },
  { name: "Best Selling", image: require('./images/BestSelling.webp') },
  { name: "Best Selling", image: require('./images/BestSelling.webp') },
  { name: "Best Selling", image: require('./images/BestSelling.webp') },
  { name: "Best Selling", image: require('./images/BestSelling.webp') }
];
const PattuMaterial = [
  { name: "Best Selling", image: require('./images/PattuMaterial.webp') },
  { name: "Best Selling", image: require('./images/PattuMaterial.webp') },
  { name: "Best Selling", image: require('./images/PattuMaterial.webp') },
  { name: "Best Selling", image: require('./images/PattuMaterial.webp') },
  { name: "Best Selling", image: require('./images/PattuMaterial.webp') }
];
const ethnicWear = [
  { name: "Embroidered Lehengas", image: require('./images/lehenga.webp') },
  { name: "Bhujodi Dupattas", image: require('./images/lehenga.webp') },
  { name: "Crepe Silk Kaftans", image: require('./images/lehenga.webp') },
  { name: "Embroidered Lehengas", image: require('./images/lehenga.webp') },
  { name: "Bhujodi Dupattas", image: require('./images/lehenga.webp') },
  { name: "Crepe Silk Kaftans", image: require('./images/lehenga.webp') }
];
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

      <div className="dropdown-navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/cottons">COTTONS</a>
          </li>
          <li className="nav-item dropdown">
            <a href="/saree">SAREE</a>
            <ul className="dropdown-menu">
              <li className="dropdown-subitem">By Price Range</li>
              <li><a href="/sarees-below-3500">Sarees below Rs. 3500</a></li>
              <li><a href="/sarees-3500-6000">Rs. 3500 to 6000</a></li>
              <li><a href="/sarees-6000-10000">Rs. 6000 to 10000</a></li>
              <li><a href="/sarees-10000-15000">Rs. 10,000 to 15,000</a></li>
              <li><a href="/sarees-15000-25000">Rs. 15,000 to 25,000</a></li>
              <li><a href="/sarees-above-25000">Sarees above Rs. 25,000</a></li>
              <li className="dropdown-subitem">By Material</li>
              <li><a href="/chiffon-crepe-georgette">Chiffon, Crepe & Georgette</a></li>
              <li><a href="/linen">Linen</a></li>
              <li><a href="/organza">Organza</a></li>
              <li><a href="/tussar">Tussar</a></li>
              <li><a href="/silk">Silk</a></li>
              <li><a href="/silk-cotton">Silk Cotton</a></li>
              <li><a href="/ajrakh-printed-sarees">Ajrakh Printed Sarees</a></li>
              <li><a href="/bandhani">Bandhani</a></li>
              <li><a href="/bengal-sarees">Bengal Sarees</a></li>
              <li><a href="/mysore-crepe-silks">Mysore Crepe Silks</a></li>
              <li><a href="/bhagalpur">Bhagalpur</a></li>
              <li><a href="/bhagalpur-tussars">Bhagalpur Tussars</a></li>
              <li><a href="/bhagalpur-linens">Bhagalpur Linens</a></li>
              <li><a href="/printed-bhagalpurs">Printed Bhagalpurs</a></li>
              <li><a href="/woven-bhagalpurs">Woven Bhagalpurs</a></li>
              <li><a href="/banarasi">Banarasi</a></li>
              <li><a href="/chanderi">Chanderi</a></li>
              <li><a href="/woven-chanderis">Woven Chanderis</a></li>
              <li><a href="/printed-chanderis">Printed Chanderis</a></li>
              <li><a href="/chettinad-cottons">Chettinad Cottons</a></li>
              <li><a href="/embroidered-sarees">Embroidered Sarees</a></li>
              <li><a href="/chikankari">Chikankari</a></li>
              <li><a href="/kantha-work">Kantha Work</a></li>
              <li><a href="/gadwal">Gadwal</a></li>
              <li><a href="/gadwal-silks">Gadwal Silks</a></li>
              <li><a href="/silk-cotton-gadwals">Silk Cotton Gadwals</a></li>
              <li><a href="/hand-block-printed">Hand Block Printed</a></li>
              <li><a href="/cottons">Cottons</a></li>
              <li><a href="/tussar-silks">Tussar Silks</a></li>
              <li><a href="/silk-cottons">Silk Cottons</a></li>
              <li><a href="/hand-painted">Hand Painted</a></li>
              <li><a href="/pen-kalamkari">Pen Kalamkari</a></li>
              <li><a href="/madhubani">Madhubani</a></li>
              <li><a href="/ikat">Ikat</a></li>
              <li><a href="/jamdani-sarees">Jamdani Sarees</a></li>
              <li><a href="/bengal">Bengal</a></li>
              <li><a href="/andhra">Andhra</a></li>
              <li><a href="/kalamkari">Kalamkari</a></li>
              <li><a href="/tussar-silk">Tussar Silk</a></li>
              <li><a href="/pure-cotton">Pure Cotton</a></li>
              <li><a href="/printed-kalamkari">Printed Kalamkari</a></li>
              <li><a href="/khadi-sarees">Khadi Sarees</a></li>
              <li><a href="/kota-sarees">Kota Sarees</a></li>
              <li><a href="/maheshwari">Maheshwari</a></li>
              <li><a href="/wovens">Wovens</a></li>
              <li><a href="/printed">Printed</a></li>
              <li><a href="/mangalgiri">Mangalgiri</a></li>
              <li><a href="/odisha-sarees">Odisha Sarees</a></li>
              <li><a href="/tussars">Tussars</a></li>
              <li><a href="/ikats">Ikats</a></li>
              <li><a href="/paithani-sarees">Paithani Sarees</a></li>
              <li><a href="/patola-sarees">Patola Sarees</a></li>
              <li><a href="/resist-dyed-sarees">Resist Dyed Sarees</a></li>
              <li><a href="/batik-prints">Batik Prints</a></li>
              <li><a href="/dabu-prints">Dabu Prints</a></li>
              <li><a href="/shibori-dyed">Shibori Dyed</a></li>
              <li><a href="/uppada-sarees">Uppada Sarees</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="/clothing">CLOTHING</a>
            <ul className="dropdown-menu">
              <li><a href="/women-clothing">Women</a></li>
              <li><a href="/men-clothing">Men</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="/accessories">ACCESSORIES</a>
            <ul className="dropdown-menu">
              <li><a href="/jewelry">Jewelry</a></li>
              <li><a href="/bags">Bags</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="/hidden-gems">HIDDEN GEMS</a>
          </li>
          <li className="nav-item">
            <a href="/spotlights">SPOTLIGHTS</a>
          </li>
          <li className="nav-item">
            <a href="/blog">BLOG</a>
          </li>
        </ul>
      </div>
      <div className="circle-container">
      <div className="circle-item">
        <div className="circle">
          <img src={sareeImage} alt="Saree" />
        </div>
        <p className="circle-text">Sarees</p>
      </div>
      <div className="circle-item">
        <div className="circle">
          <img src={kurtaImage} alt="Kurta" />
        </div>
        <p className="circle-text">Kurtas</p>
      </div>
      {/* Add more circles as needed */}
      {/* Example for other products */}
      <div className="circle-item">
        <div className="circle">
        <img src={sareeImage} alt="Saree" />
        </div>
        <p className="circle-text">Item 3</p>
      </div>
      <div className="circle-item">
        <div className="circle">
        <img src={sareeImage} alt="Saree" />
        </div>
        <p className="circle-text">Item 4</p>
      </div>
      <div className="circle-item">
        <div className="circle">
        <img src={sareeImage} alt="Saree" />
        </div>
        <p className="circle-text">Item 5</p>
      </div>
      <div className="circle-item">
        <div className="circle">
        <img src={sareeImage} alt="Saree" />
        </div>
        <p className="circle-text">Item 6</p>
      </div>
      <div className="circle-item">
        <div className="circle">
        <img src={sareeImage} alt="Saree" />
        </div>
        <p className="circle-text">Item 7</p>
      </div>
      <div className="circle-item">
        <div className="circle">
        <img src={sareeImage} alt="Saree" />
        </div>
        <p className="circle-text">Item 8</p>
      </div>
      
    </div>
    <h2>New Arrivals</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>

      {/* Price Range Section */}
      <h2>Price Range</h2>
      <div className="products-container">
        {pricerange.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      {/* Handcrafted Section */}
      <h2>Handcrafted Kurtas!</h2>
      <div className="products-container">
        {handcrafted.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
      <h2>Best Selling Collections!</h2>
      <div className="products-container">
        {BestSelling.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
      <h2>Pattu Materials!</h2>
      <div className="products-container">
        {PattuMaterial.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
      <div className="ethnic-wear-section">
      <h2>Popular Ethnic Wears!</h2>
      <div className="ethnic-wear-container">
        {ethnicWear.map((item, index) => (
          <div className="ethnic-wear-card" key={index}>
            <div className="ethnic-wear-image">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}!</h3>
            <button onClick={() => window.location.href = item.link}>Shop Collection</button>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Welcome;