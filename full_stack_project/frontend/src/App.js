import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';

// Home Page Components
import HeroSlider from './components/HeroSlider/HeroSlider';
import FeaturedCategories from './components/FeaturedCategories/FeaturedCategories';
import NewArrivals from './components/NewArrivals/NewArrivals';
import BestSellers from './components/BestSellers/BestSellers';
import Newsletter from './components/NewsLetter/NewsLetter';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';

// Page Components
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Checkout from './pages/Checkout/Checkout';
import ProductSearch from './components/ProductSearch/ProductSearch';
import Wishlist from './components/Wishlist/Wishlist';
import Settings from './components/Settings/Settings';
import OrderTracking from './components/OrderTracking/OrderTracking';
import CustomerSupport from './components/CustomerSupport/CustomerSupport';


// Cart Component
import Cart from './components/Cart/Cart';

import './App.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1a237e', // Deep Indigo
        },
        secondary: {
            main: '#c2185b', // Deep Pink
        },
    },
    typography: {
        fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '8px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                },
            },
        },
    },
});

function App() {
    const [cartOpen, setCartOpen] = React.useState(false);

    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
          <Navbar onCartClick={() => setCartOpen(true)} />
          
          <Routes>
            
              {/* Home Page Route */}
              <Route path="/" element={
                  <>
                      <HeroSlider />
                      <FeaturedCategories />
                      <NewArrivals />
                      <SpecialOffers />
                      <BestSellers />
                      <CustomerReviews />
                      <Newsletter />
                  </>
              } />

              {/* Authentication Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* User Routes */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/orders/track/:orderId" element={<OrderTracking />} />

              {/* Product Routes */}
              <Route path="/products" element={<ProductSearch />} />
              <Route path="/product/:id" element={<ProductDetail />} />

              {/* Checkout Route */}
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />
              <Route path="/best-sellers" element={<BestSellers />} />
              <Route path="/special-offers" element={ <SpecialOffers />} />
              <Route path="/support" element={<CustomerSupport />} />
          </Routes>

          {/* Cart Drawer */}
          <Cart 
              open={cartOpen} 
              onClose={() => setCartOpen(false)} 
          />

          <Footer />
      </div>
  </ThemeProvider>
    );
}

export default App;