import React, { useState } from 'react';
import {
    Container,
    Grid,
    Typography,
    Button,
    Rating,
    Tabs,
    Tab,
    Box,
    Chip,
    IconButton
} from '@mui/material';
import {
    FavoriteBorder,
    Favorite,
    Share,
    LocalShipping,
    Security,
    Refresh
} from '@mui/icons-material';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './ProductDetail.css';

const ProductDetail = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    // Sample product data
    const product = {
        name: 'Kanchipuram Silk Saree',
        price: 24999,
        rating: 4.5,
        reviews: 128,
        description: 'Handwoven Kanchipuram silk saree with traditional motifs...',
        stock: 10,
        sku: 'KSS-001',
        category: 'Silk Sarees',
        images: [
            {
                original: '/images/products/saree1-large.jpg',
                thumbnail: '/images/products/saree1-thumb.jpg',
            },
            {
                original: '/images/products/saree2-large.jpg',
                thumbnail: '/images/products/saree2-thumb.jpg',
            },
            {
                original: '/images/products/saree3-large.jpg',
                thumbnail: '/images/products/saree3-thumb.jpg',
            }
        ],
        features: [
            'Pure Kanchipuram Silk',
            'Hand-woven by master artisans',
            'Traditional temple border',
            'Rich pallu with intricate designs'
        ],
        specifications: {
            Material: 'Pure Silk',
            Length: '6.3 meters',
            Width: '45 inches',
            Weight: '800 grams',
            Care: 'Dry clean only'
        }
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <div className="product-detail-page">
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Product Images */}
                    <Grid item xs={12} md={6}>
                        <ImageGallery
                            items={product.images}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            showNav={false}
                            thumbnailPosition="left"
                        />
                    </Grid>

                    {/* Product Info */}
                    <Grid item xs={12} md={6}>
                        <div className="product-info">
                            <Typography variant="h4" className="product-title">
                                {product.name}
                            </Typography>

                            <div className="product-rating">
                                <Rating value={product.rating} precision={0.5} readOnly />
                                <Typography variant="body2">
                                    ({product.reviews} reviews)
                                </Typography>
                            </div>

                            <Typography variant="h4" className="product-price">
                                ₹{product.price.toLocaleString()}
                            </Typography>

                            <Typography variant="body1" className="product-description">
                                {product.description}
                            </Typography>

                            <div className="product-actions">
                                <div className="quantity-selector">
                                    <Button
                                        variant="outlined"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        -
                                    </Button>
                                    <Typography>{quantity}</Typography>
                                    <Button
                                        variant="outlined"
                                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                    >
                                        +
                                    </Button>
                                </div>

                                <Button
                                    variant="contained"
                                    size="large"
                                    className="add-to-cart"
                                    fullWidth
                                >
                                    Add to Cart
                                </Button>

                                <div className="secondary-actions">
                                    <IconButton
                                        onClick={() => setIsFavorite(!isFavorite)}
                                        className="favorite-button"
                                    >
                                        {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
                                    </IconButton>
                                    <IconButton>
                                        <Share />
                                    </IconButton>
                                </div>
                            </div>

                            <div className="product-features">
                                <div className="feature-item">
                                    <LocalShipping />
                                    <Typography>Free Shipping</Typography>
                                </div>
                                <div className="feature-item">
                                    <Security />
                                    <Typography>Secure Payment</Typography>
                                </div>
                                <div className="feature-item">
                                    <Refresh />
                                    <Typography>Easy Returns</Typography>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                {/* Product Details Tabs */}
                <Box className="product-details-tabs">
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        centered
                    >
                        <Tab label="Description" />
                        <Tab label="Specifications" />
                        <Tab label="Reviews" />
                    </Tabs>

                    <Box className="tab-content">
                        {selectedTab === 0 && (
                            <div className="description-tab">
                                <Typography variant="h6">Product Features</Typography>
                                <ul>
                                    {product.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {selectedTab === 1 && (
                            <div className="specifications-tab">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key} className="spec-item">
                                        <Typography variant="subtitle2">{key}:</Typography>
                                        <Typography>{value}</Typography>
                                    </div>
                                ))}
                            </div>
                        )}

                        {selectedTab === 2 && (
                            <div className="reviews-tab">
                                {/* Add reviews component here */}
                            </div>
                        )}
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default ProductDetail;