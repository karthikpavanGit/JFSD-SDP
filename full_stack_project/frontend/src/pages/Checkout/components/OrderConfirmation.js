import React from 'react';
import {
    Typography,
    Button,
    Paper
} from '@mui/material';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';


import { useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
    const navigate = useNavigate();
    const orderNumber = 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase();

    return (
        <div className="order-confirmation">
            <Paper className="confirmation-paper">
                <CheckCircleOutline className="success-icon" />
                <Typography variant="h4" className="confirmation-title">
                    Thank You for Your Order!
                </Typography>
                <Typography variant="h6" className="order-number">
                    Order Number: {orderNumber}
                </Typography>
                <Typography className="confirmation-message">
                    We've received your order and will begin processing it right away.
                    You will receive an email confirmation shortly.
                </Typography>

                <div className="confirmation-actions">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/orders')}
                        className="track-order-button"
                    >
                        Track Order
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => navigate('/')}
                        className="continue-shopping-button"
                    >
                        Continue Shopping
                    </Button>
                </div>
            </Paper>
        </div>
    );
};

export default OrderConfirmation;