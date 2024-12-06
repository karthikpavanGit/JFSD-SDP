import React from 'react';
import {
    Container,
    Paper,
    Typography,
    Stepper,
    Step,
    StepLabel,
    Grid,
    Button,
    Divider
} from '@mui/material';
import {
    LocalShipping,
    Inventory,
    Assignment,
    CheckCircle
} from '@mui/icons-material';
import './OrderTracking.css';

const OrderTracking = ({ orderId }) => {
    // Sample order data (replace with actual order data)
    const order = {
        id: 'ORD123456',
        date: '2024-03-15',
        status: 'in-transit',
        trackingNumber: 'TRK987654321',
        expectedDelivery: '2024-03-20',
        items: [
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
        ],
        timeline: [
            {
                status: 'Order Placed',
                date: '2024-03-15 10:30 AM',
                completed: true
            },
            {
                status: 'Order Confirmed',
                date: '2024-03-15 02:45 PM',
                completed: true
            },
            {
                status: 'Shipped',
                date: '2024-03-16 11:20 AM',
                completed: true
            },
            {
                status: 'Out for Delivery',
                date: 'Expected by 2024-03-20',
                completed: false
            }
        ]
    };

    const getStepIcon = (status) => {
        switch (status) {
            case 'Order Placed':
                return <Assignment />;
            case 'Order Confirmed':
                return <CheckCircle />;
            case 'Shipped':
                return <LocalShipping />;
            case 'Out for Delivery':
                return <Inventory />;
            default:
                return null;
        }
    };

    return (
        <div className="order-tracking">
            <Container maxWidth="lg">
                <Paper className="tracking-paper">
                    <div className="tracking-header">
                        <div>
                            <Typography variant="h5">
                                Track Order #{order.id}
                            </Typography>
                            <Typography color="textSecondary">
                                Tracking Number: {order.trackingNumber}
                            </Typography>
                        </div>
                        <Button variant="outlined" color="primary">
                            Download Invoice
                        </Button>
                    </div>

                    <div className="tracking-timeline">
                        <Stepper activeStep={order.timeline.filter(t => t.completed).length} orientation="vertical">
                            {order.timeline.map((step, index) => (
                                <Step key={index}>
                                    <StepLabel
                                        StepIconComponent={() => getStepIcon(step.status)}
                                        className={step.completed ? 'completed' : ''}
                                    >
                                        <Typography variant="subtitle1">
                                            {step.status}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {step.date}
                                        </Typography>
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </div>

                    <Divider className="tracking-divider" />

                    <div className="order-details">
                        <Typography variant="h6" gutterBottom>
                            Order Details
                        </Typography>
                        <Grid container spacing={3}>
                            {order.items.map((item) => (
                                <Grid item xs={12} key={item.id}>
                                    <div className="order-item">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="item-image"
                                        />
                                        <div className="item-details">
                                            <Typography variant="subtitle1">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Quantity: {item.quantity}
                                            </Typography>
                                            <Typography variant="subtitle2">
                                                ₹{item.price.toLocaleString()}
                                            </Typography>
                                        </div>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export default OrderTracking;