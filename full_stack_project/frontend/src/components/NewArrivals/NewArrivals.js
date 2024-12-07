import React from 'react';
import { 
    Container, 
    Grid, 
    Card, 
    CardMedia, 
    CardContent, 
    Typography, 
    IconButton 
} from '@mui/material';
import { FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import banarasi from '/home/pavan_karthik/SDP_project/JFSD-SDP/full_stack_project/frontend/src/Assets/Banarasi.png'
import Designer from '/home/pavan_karthik/SDP_project/JFSD-SDP/full_stack_project/frontend/src/Assets/DesignerBlouse.jpg'
import HandOwen from '/home/pavan_karthik/SDP_project/JFSD-SDP/full_stack_project/frontend/src/Assets/Handowen.png'
import SilkDupatta from '/home/pavan_karthik/SDP_project/JFSD-SDP/full_stack_project/frontend/src/Assets/SilkDupatta.jpg'
import './NewArrivals.css';

const products = [
    {
        id: 1,
        name: 'Banarasi Silk Saree',
        price: '₹12,999',
        image: banarasi,
        tag: 'New'
    },
    {
        id: 2,
        name: 'Handwoven Cotton Fabric',
        price: '₹1,499',
        image: HandOwen,
        tag: 'New'
    },
    {
        id: 3,
        name: 'Designer Blouse',
        price: '₹2,999',
        image: Designer,
        tag: 'New'
    },
    {
        id: 4,
        name: 'Silk Dupatta',
        price: '₹3,999',
        image: SilkDupatta,
        tag: 'New'
    }
];

const NewArrivals = () => {
    return (
        <section className="new-arrivals">
            <Container maxWidth="lg">
                <Typography variant="h4" className="section-title">
                    New Arrivals
                </Typography>
                <Grid container spacing={4}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={3} key={product.id}>
                            <Card className="product-card">
                                <div className="product-image-container">
                                    <CardMedia
                                        component="img"
                                        image={product.image}
                                        alt={product.name}
                                        className="product-image"
                                    />
                                    <span className="product-tag">{product.tag}</span>
                                    <div className="product-actions">
                                        <IconButton className="action-button">
                                            <FavoriteBorder />
                                        </IconButton>
                                        <IconButton className="action-button">
                                            <ShoppingCart />
                                        </IconButton>
                                    </div>
                                </div>
                                <CardContent className="product-content">
                                    <Typography variant="h6" className="product-name">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="subtitle1" className="product-price">
                                        {product.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default NewArrivals;