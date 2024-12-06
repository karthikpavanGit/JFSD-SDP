import React from 'react';
import {
    Drawer,
    Typography,
    IconButton,
    Box,
    Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction
} from '@mui/material';
import { Close, Add, Remove, Delete } from '@mui/icons-material';
import './Cart.css';

const Cart = ({ open, onClose }) => {
    // Sample cart items (replace with your state management solution)
    const cartItems = [
        {
            id: 1,
            name: 'Silk Saree',
            price: 12999,
            quantity: 1,
            image: '/images/products/saree1.jpg'
        },
        {
            id: 2,
            name: 'Cotton Fabric',
            price: 1499,
            quantity: 2,
            image: '/images/products/fabric1.jpg'
        }
    ];

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            className="cart-drawer"
        >
            <Box className="cart-container">
                <Box className="cart-header">
                    <Typography variant="h6">Shopping Cart</Typography>
                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                </Box>

                <Divider />

                {cartItems.length === 0 ? (
                    <Box className="empty-cart">
                        <Typography variant="body1">
                            Your cart is empty
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={onClose}
                            className="continue-shopping"
                        >
                            Continue Shopping
                        </Button>
                    </Box>
                ) : (
                    <>
                        <List className="cart-items">
                            {cartItems.map((item) => (
                                <ListItem key={item.id} className="cart-item">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="item-image"
                                    />
                                    <ListItemText
                                        primary={item.name}
                                        secondary={`₹${item.price}`}
                                    />
                                    <Box className="quantity-controls">
                                        <IconButton size="small">
                                            <Remove />
                                        </IconButton>
                                        <Typography>{item.quantity}</Typography>
                                        <IconButton size="small">
                                            <Add />
                                        </IconButton>
                                    </Box>
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" className="delete-button">
                                            <Delete />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>

                        <Box className="cart-footer">
                            <Box className="cart-summary">
                                <Typography variant="subtitle1">
                                    Subtotal:
                                </Typography>
                                <Typography variant="h6">
                                    ₹{total}
                                </Typography>
                            </Box>
                            <Button
                                variant="contained"
                                fullWidth
                                className="checkout-button"
                            >
                                Proceed to Checkout
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Drawer>
    );
};

export default Cart;