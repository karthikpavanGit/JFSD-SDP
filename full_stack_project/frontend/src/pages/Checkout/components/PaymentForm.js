import React, { useState } from 'react';
import {
    Grid,
    TextField,
    Button,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Paper
} from '@mui/material';
import {
    CreditCard,
    AccountBalance,
    Payment
} from '@mui/icons-material';

const PaymentForm = ({ onSubmit }) => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        expiry: '',
        cvv: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ paymentMethod, cardData });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>
                Payment Method
            </Typography>

            <RadioGroup
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
            >
                <Paper className="payment-option">
                    <FormControlLabel
                        value="card"
                        control={<Radio />}
                        label={
                            <div className="payment-label">
                                <CreditCard />
                                <span>Credit/Debit Card</span>
                            </div>
                        }
                    />
                </Paper>

                <Paper className="payment-option">
                    <FormControlLabel
                        value="upi"
                        control={<Radio />}
                        label={
                            <div className="payment-label">
                                <Payment />
                                <span>UPI Payment</span>
                            </div>
                        }
                    />
                </Paper>

                <Paper className="payment-option">
                    <FormControlLabel
                        value="netbanking"
                        control={<Radio />}
                        label={
                            <div className="payment-label">
                                <AccountBalance />
                                <span>Net Banking</span>
                            </div>
                        }
                    />
                </Paper>
            </RadioGroup>

            {paymentMethod === 'card' && (
                <Grid container spacing={3} className="card-details">
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Card Number"
                            value={cardData.number}
                            onChange={(e) => setCardData({...cardData, number: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Name on Card"
                            value={cardData.name}
                            onChange={(e) => setCardData({...cardData, name: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Expiry Date"
                            placeholder="MM/YY"
                            value={cardData.expiry}
                            onChange={(e) => setCardData({...cardData, expiry: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="CVV"
                            type="password"
                            value={cardData.cvv}
                            onChange={(e) => setCardData({...cardData, cvv: e.target.value})}
                        />
                    </Grid>
                </Grid>
            )}

            <Button
                type="submit"
                variant="contained"
                color="primary"
                className="submit-button"
            >
                Continue to Review
            </Button>
        </form>
    );
};

export default PaymentForm;