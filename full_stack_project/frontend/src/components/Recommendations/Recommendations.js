import React from 'react';
import {
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Rating,
    Chip
} from '@mui/material';
import { ShoppingCart, Favorite } from '@mui/icons-material';
import './Recommendations.css';

const Recommendations = ({ userId, currentProductId }) => {
    // Sample recommendations data
    const recommendations = [
        {
            id: 1,
            type: 'based_on_history',
            title: 'Based on your browsing history',
            items: [
                {
                    id: 101,
                    name: 'Banarasi Silk Saree',
                    price: 18999,
                    rating: 4.5,
                    reviews: 128,
                    image: '/images/products/saree1.jpg',
                    discount: 15
                },
                // Add more items...
            ]
        },
        {
            id: 2,
            type: 'similar_items',
            title: 'Similar to items you\'ve viewed',
            items: [
                {
                    id: 201,
                    name: 'Designer Lehenga',
                    price: 24999,
                    rating: 4.3,
                    reviews: 96,
                    image: '/images/products/lehenga1.jpg',
                    discount: 20
                },
                // Add more items...
            ]
        }
    ];

    const handleAddToCart = (productId) => {
        // Add to cart logic
        console.log('Add to cart:', productId);
    };

    const handleAddToWishlist = (productId) => {
        // Add to wishlist logic
        console.log('Add to wishlist:', productId);
    };

    return (
        <div className="recommendations">
            {recommendations.map((section) => (
                <div key={section.id} className="recommendation-section">
                    <Typography variant="h6" className="section-title">
                        {section.title}
                    </Typography>
                    <Grid container spacing={3}>
                        {section.items.map((item) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                                <Card className="product-card">
                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        alt={item.name}
                                        className="product-image"
                                    />
                                    {item.discount > 0 && (
                                        <Chip
                                            label={`${item.discount}% OFF`}
                                            className="discount-chip"
                                        />
                                    )}
                                    <CardContent>
                                        <Typography variant="h6" className="product-name">
                                            {item.name}
                                        </Typography>
                                        <div className="price-container">
                                            <Typography variant="h6" className="product-price">
                                                ₹{item.price.toLocaleString()}
                                            </Typography>
                                            {item.discount > 0 && (
                                                <Typography variant="body2" className="original-price">
                                                    ₹{Math.round(item.price * (1 + item.discount/100)).toLocaleString()}
                                                </Typography>
                                            )}
                                        </div>
                                        <div className="rating-container">
                                            <Rating
                                                value={item.rating}
                                                precision={0.5}
                                                size="small"
                                                readOnly
                                            />
                                            <Typography variant="body2" color="textSecondary">
                                                ({item.reviews})
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <CardActions className="card-actions">
                                        <Button
                                            variant="contained"
                                            startIcon={<ShoppingCart />}
                                            onClick={() => handleAddToCart(item.id)}
                                            fullWidth
                                        >
                                            Add to Cart
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            startIcon={<Favorite />}
                                            onClick={() => handleAddToWishlist(item.id)}
                                            fullWidth
                                        >
                                            Wishlist
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ))}
        </div>
    );
};

export default Recommendations;