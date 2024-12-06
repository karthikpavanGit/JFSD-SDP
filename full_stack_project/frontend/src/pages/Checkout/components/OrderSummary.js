import React from 'react';
import {
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    Button,
    Paper
} from '@mui/material';
import './OrderSummary.css';

const OrderSummary = ({ shippingData, paymentData, onPlaceOrder }) => {
    // Sample cart items (replace with your actual cart data)
    const cartItems = [
        {
            id: 1,
            name: 'Silk Saree',
            price: 12999,
            quantity: 1
        },
        {
            id: 2,
            name: 'Cotton Fabric',
            price: 1499,
            quantity: 2
        }
    ];

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 0; // Free shipping
    const total = subtotal + shipping;

    return (
        <div className="order-summary">
            <Typography variant="h6" gutterBottom>
                Order Summary
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Paper className="summary-section">
                        <Typography variant="h6" gutterBottom>
                            Shipping Details
                        </Typography>
                        <Typography>
                            {shippingData.firstName} {shippingData.lastName}
                        </Typography>
                        <Typography>{shippingData.address}</Typography>
                        <Typography>
                            {shippingData.city}, {shippingData.state} {shippingData.pincode}
                        </Typography>
                        <Typography>Phone: {shippingData.phone}</Typography>
                    </Paper>

                    <Paper className="summary-section">
                        <Typography variant="h6" gutterBottom>
                            Payment Method
                        </Typography>
                        <Typography>
                            {paymentData.paymentMethod === 'card' 
                                ? `Credit Card ending in ${paymentData.cardData.number.slice(-4)}`
                                : paymentData.paymentMethod.toUpperCase()}
                        </Typography>
                    </Paper>

                    <Paper className="summary-section">
                        <Typography variant="h6" gutterBottom>
                            Order Items
                        </Typography>
                        <List>
                            {cartItems.map((item) => (
                                <React.Fragment key={item.id}>
                                    <ListItem>
                                        <ListItemText
                                            primary={item.name}
                                            secondary={`Quantity: ${item.quantity}`}
                                        />
                                        <Typography>
                                            ₹{(item.price * item.quantity).toLocaleString()}
                                        </Typography>
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper className="price-summary">
                        <Typography variant="h6" gutterBottom>
                            Price Details
                        </Typography>
                        <div className="price-row">
                            <Typography>Subtotal</Typography>
                            <Typography>₹{subtotal.toLocaleString()}</Typography>
                        </div>
                        <div className="price-row">
                            <Typography>Shipping</Typography>
                            <Typography color="success.main">FREE</Typography>
                        </div>
                        <Divider className="price-divider" />
                        <div className="price-row total">
                            <Typography variant="h6">Total</Typography>
                            <Typography variant="h6">₹{total.toLocaleString()}</Typography>
                        </div>

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={onPlaceOrder}
                            className="place-order-button"
                        >
                            Place Order
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default OrderSummary;