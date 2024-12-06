import React, { useState } from 'react';
import {
    Container,
    Grid,
    Paper,
    TextField,
    Slider,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Typography,
    Button,
    IconButton,
    Card,
    CardMedia,
    CardContent,
    CardActions
} from '@mui/material';
import {
    Search,
    FilterList,
    FavoriteBorder,
    Favorite,
    ShoppingCart
} from '@mui/icons-material';
import './ProductSearch.css';

const ProductSearch = () => {
    const [filters, setFilters] = useState({
        priceRange: [0, 50000],
        categories: [],
        materials: [],
        colors: []
    });
    const [searchQuery, setSearchQuery] = useState('');

    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Kanchipuram Silk Saree',
            price: 24999,
            category: 'Sarees',
            material: 'Silk',
            color: 'Red',
            image: '/images/products/saree1.jpg',
            rating: 4.5,
            reviews: 128
        },
        // Add more products...
    ];

    const categories = ['Sarees', 'Fabrics', 'Dupattas', 'Blouses'];
    const materials = ['Silk', 'Cotton', 'Linen', 'Wool'];
    const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black'];

    const handlePriceChange = (event, newValue) => {
        setFilters({ ...filters, priceRange: newValue });
    };

    const handleCheckboxChange = (type, value) => {
        setFilters(prev => ({
            ...prev,
            [type]: prev[type].includes(value)
                ? prev[type].filter(item => item !== value)
                : [...prev[type], value]
        }));
    };

    const filteredProducts = products.filter(product => {
        return (
            product.price >= filters.priceRange[0] &&
            product.price <= filters.priceRange[1] &&
            (filters.categories.length === 0 || filters.categories.includes(product.category)) &&
            (filters.materials.length === 0 || filters.materials.includes(product.material)) &&
            (filters.colors.length === 0 || filters.colors.includes(product.color)) &&
            (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    });

    return (
        <div className="product-search">
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    {/* Filters Sidebar */}
                    <Grid item xs={12} md={3}>
                        <Paper className="filters-paper">
                            <div className="filter-section">
                                <Typography variant="h6" gutterBottom>
                                    <FilterList /> Filters
                                </Typography>
                                
                                <Typography variant="subtitle1" gutterBottom>
                                    Price Range
                                </Typography>
                                <Slider
                                    value={filters.priceRange}
                                    onChange={handlePriceChange}
                                    valueLabelDisplay="auto"
                                    min={0}
                                    max={50000}
                                    step={1000}
                                />
                                <div className="price-inputs">
                                    <Typography>
                                        ₹{filters.priceRange[0].toLocaleString()}
                                    </Typography>
                                    <Typography>
                                        ₹{filters.priceRange[1].toLocaleString()}
                                    </Typography>
                                </div>

                                <Typography variant="subtitle1" gutterBottom>
                                    Categories
                                </Typography>
                                <FormGroup>
                                    {categories.map(category => (
                                        <FormControlLabel
                                            key={category}
                                            control={
                                                <Checkbox
                                                    checked={filters.categories.includes(category)}
                                                    onChange={() => handleCheckboxChange('categories', category)}
                                                />
                                            }
                                            label={category}
                                        />
                                    ))}
                                </FormGroup>

                                {/* Similar sections for Materials and Colors */}
                            </div>
                        </Paper>
                    </Grid>

                    {/* Products Grid */}
                    <Grid item xs={12} md={9}>
                        <div className="search-header">
                            <TextField
                                fullWidth
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                InputProps={{
                                    startAdornment: <Search />
                                }}
                            />
                        </div>

                        <Grid container spacing={3}>
                            {filteredProducts.map(product => (
                                <Grid item xs={12} sm={6} md={4} key={product.id}>
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
                                            <Typography variant="subtitle1" className="product-price">
                                                ₹{product.price.toLocaleString()}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className="product-actions">
                                            <IconButton>
                                                <FavoriteBorder />
                                            </IconButton>
                                            <Button
                                                variant="contained"
                                                startIcon={<ShoppingCart />}
                                            >
                                                Add to Cart
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ProductSearch;