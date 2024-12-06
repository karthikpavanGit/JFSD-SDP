import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, CircularProgress } from '@mui/material';
import { api } from '../../services/api';
import './FeaturedCategories.css';

const FeaturedCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const data = await api.getCategories();
            setCategories(data);
        } catch (err) {
            setError('Failed to load categories');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return (
        <Container className="loading-container">
            <CircularProgress />
        </Container>
    );

    if (error) return (
        <Container>
            <Typography color="error">{error}</Typography>
        </Container>
    );

    return (
        <section className="featured-categories">
            <Container maxWidth="lg">
                <Typography variant="h4" className="section-title">
                    Shop By Category
                </Typography>
                <Grid container spacing={3}>
                    {categories.map((category) => (
                        <Grid item xs={12} sm={6} md={3} key={category._id}>
                            <Paper className="category-card" elevation={0}>
                                <div className="category-image">
                                    <img 
                                        src={`${process.env.REACT_APP_API_URL}${category.image}`} 
                                        alt={category.title} 
                                    />
                                </div>
                                <div className="category-content">
                                    <Typography variant="h6">{category.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {category.count} Products
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