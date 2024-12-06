import React, { useState } from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton, 
    Badge,
    Box,
    Button,
    Menu,
    MenuItem,
    useMediaQuery,
    useTheme,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { 
    ShoppingCart, 
    Favorite, 
    Person,
    Menu as MenuIcon,
    Category,
    Home,
    LocalOffer,
    NewReleases,
    Star,
    Support
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../Assets/Nakshatra.webp';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    
    // States for menus
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [categoryMenuAnchor, setCategoryMenuAnchor] = useState(null);

    // Categories for dropdown
    const categories = [
        { name: 'New Arrivals', icon: <NewReleases />, path: '/new-arrivals' },
        { name: 'Best Sellers', icon: <Star />, path: '/best-sellers' },
        { name: 'Special Offers', icon: <LocalOffer />, path: '/special-offers' },
    ];

    const handleCategoryMenuOpen = (event) => {
        setCategoryMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setCategoryMenuAnchor(null);
    };

    // Navigation items for mobile drawer
    const navigationItems = [
        { label: 'Home', icon: <Home />, path: '/' },
        { label: 'Categories', icon: <Category />, action: handleCategoryMenuOpen },
        { label: 'Support', icon: <Support />, path: '/support' },
    ];

    return (
        <>
            <AppBar position="fixed" color="default" elevation={0} className="navbar">
                <Toolbar>
                    {isMobile && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => setMobileMenuOpen(true)}
                            className="mobile-menu-button"
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

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

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Box className="nav-links">
                            <Button color="inherit" component={Link} to="/">
                                Home
                            </Button>
                            <Button 
                                color="inherit" 
                                onClick={handleCategoryMenuOpen}
                            >
                                Categories
                            </Button>
                            <Button color="inherit" component={Link} to="/support">
                                Support
                            </Button>
                        </Box>
                    )}

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

            {/* Categories Menu */}
            <Menu
                anchorEl={categoryMenuAnchor}
                open={Boolean(categoryMenuAnchor)}
                onClose={handleMenuClose}
                className="category-menu"
            >
                {categories.map((category, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => {
                            handleMenuClose();
                            navigate(category.path);
                        }}
                    >
                        <ListItemIcon>{category.icon}</ListItemIcon>
                        <ListItemText primary={category.name} />
                    </MenuItem>
                ))}
            </Menu>

            {/* Mobile Drawer */}
            <Drawer
                anchor="left"
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                className="mobile-drawer"
            >
                <List>
                    {navigationItems.map((item, index) => (
                        <ListItem
                            button
                            key={index}
                            onClick={() => {
                                setMobileMenuOpen(false);
                                if (item.path) {
                                    navigate(item.path);
                                } else if (item.action) {
                                    item.action();
                                }
                            }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;