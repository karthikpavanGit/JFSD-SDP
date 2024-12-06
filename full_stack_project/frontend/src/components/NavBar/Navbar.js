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
import './Navbar.css';

const Navbar = () => {
    return (
        <AppBar position="fixed" color="default" elevation={0} className="navbar">
            <Toolbar>
                {/* Logo and Company Name */}
                <Box className="brand-container">
                    <img 
                        src="/logo.png" 
                        alt="Handloom Logo" 
                        className="logo"
                    />
                    <Typography variant="h6" className="brand-name">
                        HANDLOOM HERITAGE
                    </Typography>
                </Box>

                {/* Right Side Icons */}
                <Box className="nav-icons">
                    <IconButton aria-label="account">
                        <Person />
                    </IconButton>
                    <IconButton aria-label="wishlist">
                        <Badge badgeContent={2} color="secondary">
                            <Favorite />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="cart">
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