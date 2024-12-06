import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton, 
    Badge,
    Box 
} from '@mui/material';
import { 
    ShoppingCart, 
    Favorite, 
    Person 
} from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import Logo from '../../Assets/Nakshatra.webp'
const Navbar = () => {
    return (
        <AppBar position="fixed" color="default" elevation={0} className="navbar">
            <Toolbar>
                {/* Logo and Company Name */}
                <Box className="brand-container">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <img 
                            src={Logo} 
                            alt="Handloom Logo" 
                            className="logo"
                        />
                        <Typography variant="h6" className="brand-name">
                            Nakshatra Threads
                        </Typography>
                    </Link>
                </Box>

                {/* Right Side Icons */}
                <Box className="nav-icons">
                    <IconButton aria-label="account" component={Link} to="/profile">
                        <Person />
                    </IconButton>
                    <IconButton aria-label="wishlist" component={Link} to="/wishlist">
                        <Badge badgeContent={2} color="secondary">
                            <Favorite />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="cart" component={Link} to="/cart">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
