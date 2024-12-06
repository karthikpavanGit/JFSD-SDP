import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Snackbar } from '@mui/material';
import { Mail } from '@mui/icons-material';
import './NewsLetter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add newsletter subscription logic here
        setOpen(true);
        setEmail('');
    };

    return (
        <section className="newsletter">
            <Container maxWidth="md">
                <div className="newsletter-content">
                    <Mail className="newsletter-icon" />
                    <Typography variant="h4" className="newsletter-title">
                        Subscribe to Our Newsletter
                    </Typography>
                    <Typography variant="subtitle1" className="newsletter-subtitle">
                        Get exclusive offers and be the first to know about new collections
                    </Typography>
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <TextField
                            fullWidth
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            className="newsletter-input"
                        />
                        <Button 
                            type="submit" 
                            variant="contained" 
                            className="newsletter-button"
                        >
                            Subscribe
                        </Button>
                    </form>
                </div>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    message="Thank you for subscribing!"
                />
            </Container>
        </section>
    );
};

export default Newsletter;