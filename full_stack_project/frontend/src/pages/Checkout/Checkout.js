import React, { useState } from 'react';
import {
    Container,
    Stepper,
    Step,
    StepLabel,
    Paper,
    Typography,
    Button,
    Grid
} from '@mui/material';
import ShippingForm from '../Checkout/components/ShipppingForm';
import PaymentForm from './components/PaymentForm';
import OrderSummary from './components/OrderSummary';
import OrderConfirmation from './components/OrderConfirmation';
import './Checkout.css';

const steps = ['Shipping', 'Payment', 'Review', 'Confirmation'];

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState(null);
    const [paymentData, setPaymentData] = useState(null);

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handleShippingSubmit = (data) => {
        setShippingData(data);
        handleNext();
    };

    const handlePaymentSubmit = (data) => {
        setPaymentData(data);
        handleNext();
    };

    const handlePlaceOrder = () => {
        // Add order placement logic here
        handleNext();
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <ShippingForm onSubmit={handleShippingSubmit} />;
            case 1:
                return <PaymentForm onSubmit={handlePaymentSubmit} />;
            case 2:
                return (
                    <OrderSummary
                        shippingData={shippingData}
                        paymentData={paymentData}
                        onPlaceOrder={handlePlaceOrder}
                    />
                );
            case 3:
                return <OrderConfirmation />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <div className="checkout-page">
            <Container maxWidth="lg">
                <Paper className="checkout-paper">
                    <Typography variant="h4" className="checkout-title">
                        Checkout
                    </Typography>

                    <Stepper activeStep={activeStep} className="checkout-stepper">
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <div className="checkout-content">
                        {getStepContent(activeStep)}
                    </div>

                    {activeStep !== steps.length - 1 && (
                        <div className="checkout-actions">
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className="back-button"
                            >
                                Back
                            </Button>
                        </div>
                    )}
                </Paper>
            </Container>
        </div>
    );
};

export default Checkout;