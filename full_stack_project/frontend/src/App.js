import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/NavBar/Navbar';
import HeroSlider from './components/HeroSlider/HeroSlider';
import FeaturedCategories from './components/FeaturedCategories/FeaturedCategories';
import NewArrivals from './components/NewArrivals/NewArrivals';
import BestSellers from './components/BestSellers/BestSellers';
import Newsletter from './components/NewsLetter/NewsLetter';
import Footer from './components/Footer/Footer';
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
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
                <Navbar />
                <HeroSlider />
                {/* Add more components here */}
                <FeaturedCategories />
                <NewArrivals />
                <BestSellers />
                <Newsletter />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;