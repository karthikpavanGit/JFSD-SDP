import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import './FeaturedCategories.css';

const categories = [
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
    }
];

const FeaturedCategories = () => {
    return (
        <section className="featured-categories">
            <Container maxWidth="lg">
                <Typography variant="h4" className="section-title">
                    Shop By Category
                </Typography>
                <Grid container spacing={3}>
                    {categories.map((category) => (
                        <Grid item xs={12} sm={6} md={3} key={category.id}>
                            <Paper className="category-card" elevation={0}>
                                <div className="category-image">
                                    <img src={category.image} alt={category.title} />
                                </div>
                                <div className="category-content">
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
        </section>
    );
};

export default FeaturedCategories;