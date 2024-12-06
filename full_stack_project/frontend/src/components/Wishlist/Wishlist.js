import React from 'react';
import {
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    IconButton
} from '@mui/material';
import {
    Delete,
    ShoppingCart
} from '@mui/icons-material';
import './Wishlist.css';

const Wishlist = () => {
    // Sample wishlist data
    const wishlistItems = [
        {
            id: 1,
            name: 'Kanchipuram Silk Saree',
            price: 24999,
            image: '/images/products/saree1.jpg',
            inStock: true
        },
        {
            id: 2,
            name: 'Cotton Handloom Saree',
            price: 3999,
            image: '/images/products/saree2.jpg',
            inStock: false
        },
        // Add more items...
    ];

    const handleRemoveFromWishlist = (itemId) => {
        // Add remove from wishlist logic
        console.log('Remove from wishlist:', itemId);
    };

    const handleAddToCart = (itemId) => {
        // Add to cart logic
        console.log('Add to cart:', itemId);
    };

    return (
        <div className="wishlist">
            <Container maxWidth="lg">
                <Typography variant="h4" className="wishlist-title">
                    My Wishlist ({wishlistItems.length} items)
                </Typography>

                {wishlistItems.length === 0 ? (
                    <div className="empty-wishlist">
                        <Typography variant="h6">
                            Your wishlist is empty
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            href="/products"
                        >
                            Continue Shopping
                        </Button>
                    </div>
                ) : (
                    <Grid container spacing={3}>
                        {wishlistItems.map(item => (
                            <Grid item xs={12} sm={6} md={4} key={item.id}>
                                <Card className="wishlist-card">
                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        alt={item.name}
                                        className="wishlist-image"
                                    />
                                    <CardContent>
                                        <Typography variant="h6" className="item-name">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="subtitle1" className="item-price">
                                            ₹{item.price.toLocaleString()}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color={item.inStock ? "success.main" : "error.main"}
                                            className="stock-status"
                                        >
                                            {item.inStock ? 'In Stock' : 'Out of Stock'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions className="wishlist-actions">
                                        <Button
                                            variant="contained"
                                            startIcon={<ShoppingCart />}
                                            disabled={!item.inStock}
                                            onClick={() => handleAddToCart(item.id)}
                                            fullWidth
                                        >
                                            Add to Cart
                                        </Button>
                                        <IconButton
                                            onClick={() => handleRemoveFromWishlist(item.id)}
                                            className="remove-button"
                                        >
                                            <Delete />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </div>
    );
};

export default Wishlist;