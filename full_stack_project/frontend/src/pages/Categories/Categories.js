import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

const allCategories = [
    {
        id: 1,
        title: 'Sarees',
        image: '/images/categories/sarees.jpg',
        count: '250+ Products'
    },
    {
        id: 2,
        title: 'Fabrics',
        image: '/images/categories/fabrics.jpg',
        count: '180+ Products'
    },
    {
        id: 3,
        title: 'Traditional Wear',
        image: '/images/categories/traditional.jpg',
        count: '120+ Products'
    },
    {
        id: 4,
        title: 'Modern Fusion',
        image: '/images/categories/fusion.jpg',
        count: '90+ Products'
    },
    {
        id: 5,
        title: 'Bridal Collection',
        image: '/images/categories/bridal.jpg',
        count: '75+ Products'
    },
    {
        id: 6,
        title: 'Designer Blouses',
        image: '/images/categories/blouses.jpg',
        count: '150+ Products'
    },
    {
        id: 7,
        title: 'Accessories',
        image: '/images/categories/accessories.jpg',
        count: '200+ Products'
    },
    {
        id: 8,
        title: 'Ready to Wear',
        image: '/images/categories/readytowear.jpg',
        count: '160+ Products'
    }
];

const Categories = () => {
    return (
        <div className="categories-page" style={{ padding: '40px 0' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom>
                    All Categories
                </Typography>
                <Grid container spacing={3}>
                    {allCategories.map((category) => (
                        <Grid item xs={12} sm={6} md={3} key={category.id}>
                            <Paper 
                                className="category-card" 
                                elevation={0}
                                sx={{
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        transition: 'transform 0.3s ease'
                                    }
                                }}
                            >
                                <div className="category-image">
                                    <img 
                                        src={category.image} 
                                        alt={category.title}
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            objectFit: 'cover',
                                            borderRadius: '8px'
                                        }}
                                    />
                                </div>
                                <div className="category-content" style={{ padding: '16px' }}>
                                    <Typography variant="h6">{category.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {category.count}
                                    </Typography>
                                </div>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Categories;