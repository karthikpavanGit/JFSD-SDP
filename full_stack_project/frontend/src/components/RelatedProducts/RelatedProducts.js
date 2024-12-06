import React from 'react';
import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    IconButton,
    Rating,
    Box
} from '@mui/material';
import { FavoriteBorder, Favorite, ShoppingCart } from '@mui/icons-material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './RelatedProducts.css';

const RelatedProducts = ({ currentProductId }) => {
    // Sample related products data
    const relatedProducts = [
        {
            id: 1,
            name: 'Kanchipuram Silk Saree',
            price: 24999,
            rating: 4.5,
            reviews: 128,
            image: '/images/products/saree1.jpg',
            isFavorite: false
        },
        {
            id: 2,
            name: 'Banarasi Silk Saree',
            price: 18999,
            rating: 4.3,
            reviews: 96,
            image: '/images/products/saree2.jpg',
            isFavorite: true
        },
        // Add more related products...
    ].filter(product => product.id !== currentProductId);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const handleToggleFavorite = (productId) => {
        // Add wishlist toggle logic
        console.log('Toggle favorite:', productId);
    };

    const handleAddToCart = (productId) => {
        // Add to cart logic
        console.log('Add to cart:', productId);
    };

    return (
        <div className="related-products">
            <Typography variant="h5" className="section-title">
                Related Products
            </Typography>

            <Slider {...settings} className="products-slider">
                {relatedProducts.map(product => (
                    <div key={product.id} className="product-slide">
                        <Card className="product-card">
                            <CardMedia
                                component="img"
                                image={product.image}
                                alt={product.name}
                                className="product-image"
                            />
                            <CardContent>
                                <Typography variant="h6" className="product-name">
                                    {product.name}
                                </Typography>
                                <Typography variant="h6" className="product-price">
                                    ₹{product.price.toLocaleString()}
                                </Typography>
                                <Box className="product-rating">
                                    <Rating 
                                        value={product.rating} 
                                        precision={0.1} 
                                        size="small" 
                                        readOnly 
                                    />
                                    <Typography variant="body2">
                                        ({product.reviews})
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions className="product-actions">
                                <IconButton
                                    onClick={() => handleToggleFavorite(product.id)}
                                    className={product.isFavorite ? 'favorite-active' : ''}
                                >
                                    {product.isFavorite ? <Favorite /> : <FavoriteBorder />}
                                </IconButton>
                                <Button
                                    variant="contained"
                                    startIcon={<ShoppingCart />}
                                    onClick={() => handleAddToCart(product.id)}
                                >
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default RelatedProducts;