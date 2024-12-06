import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import './SpecialOffers.css';

const SpecialOffers = () => {
    return (
        <section className="special-offers">
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* First Offer */}
                    <Grid item xs={12} md={6}>
                        <div className="offer-card" style={{
                            backgroundImage: 'url(/images/offers/offer1.jpg)'
                        }}>
                            <div className="offer-content">
                                <Typography variant="h5">
                                    Festival Special
                                </Typography>
                                <Typography variant="h3">
                                    30% OFF
                                </Typography>
                                <Typography variant="subtitle1">
                                    On Selected Silk Sarees
                                </Typography>
                                <Button variant="contained" className="offer-button">
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </Grid>

                    {/* Second Offer */}
                    <Grid item xs={12} md={6}>
                        <div className="offer-card" style={{
                            backgroundImage: 'url(/images/offers/offer2.jpg)'
                        }}>
                            <div className="offer-content">
                                <Typography variant="h5">
                                    New Collection
                                </Typography>
                                <Typography variant="h3">
                                    20% OFF
                                </Typography>
                                <Typography variant="subtitle1">
                                    On First Purchase
                                </Typography>
                                <Button variant="contained" className="offer-button">
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default SpecialOffers;