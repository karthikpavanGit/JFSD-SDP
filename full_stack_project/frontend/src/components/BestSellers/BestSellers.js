import React from 'react';
import { 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardMedia, 
    CardContent,
    Rating,
    Button 
} from '@mui/material';
import './BestSellers.css';

const bestSellers = [
    {
        id: 1,
        name: 'Kanchipuram Silk Saree',
        price: '₹24,999',
        rating: 4.8,
        reviews: 156,
        image: '/images/products/bestseller1.jpg'
    },
    {
        id: 2,
        name: 'Handwoven Chanderi Saree',
        price: '₹18,999',
        rating: 4.7,
        reviews: 142,
        image: '/images/products/bestseller2.jpg'
    },
    {
        id: 3,
        name: 'Banarasi Wedding Collection',
        price: '₹32,999',
        rating: 4.9,
        reviews: 189,
        image: '/images/products/bestseller3.jpg'
    }
];

const BestSellers = () => {
    return (
        <section className="best-sellers">
            <Container maxWidth="lg">
                <Typography variant="h4" className="section-title">
                    Best Sellers
                </Typography>
                <Grid container spacing={4}>
                    {bestSellers.map((product) => (
                        <Grid item xs={12} md={4} key={product.id}>
                            <Card className="bestseller-card">
                                <CardMedia
                                    component="img"
                                    image={product.image}
                                    alt={product.name}
                                    className="bestseller-image"
                                />
                                <CardContent className="bestseller-content">
                                    <Typography variant="h6" className="bestseller-name">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="h5" className="bestseller-price">
                                        {product.price}
                                    </Typography>
                                    <div className="bestseller-rating">
                                        <Rating value={product.rating} precision={0.1} readOnly />
                                        <Typography variant="body2">
                                            ({product.reviews} reviews)
                                        </Typography>
                                    </div>
                                    <Button 
                                        variant="contained" 
                                        fullWidth 
                                        className="bestseller-button"
                                    >
                                        Add to Cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default BestSellers;