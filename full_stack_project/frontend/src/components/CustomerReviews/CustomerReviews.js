import React from 'react';
import { Container, Typography, Paper, Avatar, Rating } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CustomerReviews.css';

const reviews = [
    {
        id: 1,
        name: 'Priya Sharma',
        avatar: '/images/avatars/avatar1.jpg',
        rating: 5,
        review: 'The quality of the handloom sarees is exceptional. The craftsmanship and attention to detail are remarkable. Will definitely shop again!',
        date: '15 March 2024'
    },
    {
        id: 2,
        name: 'Rahul Verma',
        avatar: '/images/avatars/avatar2.jpg',
        rating: 5,
        review: 'Excellent service and beautiful products. The traditional designs with modern touches are perfect for any occasion.',
        date: '12 March 2024'
    },
    {
        id: 3,
        name: 'Anita Patel',
        avatar: '/images/avatars/avatar3.jpg',
        rating: 4,
        review: 'Great collection of handloom products. The fabric quality is amazing and the colors are vibrant. Highly recommended!',
        date: '10 March 2024'
    }
];

const CustomerReviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className="customer-reviews">
            <Container maxWidth="lg">
                <Typography variant="h4" className="section-title">
                    What Our Customers Say
                </Typography>
                <Slider {...settings} className="reviews-slider">
                    {reviews.map((review) => (
                        <div key={review.id} className="review-slide">
                            <Paper elevation={0} className="review-card">
                                <div className="review-header">
                                    <Avatar 
                                        src={review.avatar} 
                                        alt={review.name}
                                        className="review-avatar"
                                    />
                                    <div className="review-info">
                                        <Typography variant="h6">
                                            {review.name}
                                        </Typography>
                                        <Rating 
                                            value={review.rating} 
                                            readOnly 
                                            size="small"
                                        />
                                    </div>
                                </div>
                                <Typography className="review-text">
                                    "{review.review}"
                                </Typography>
                                <Typography variant="caption" className="review-date">
                                    {review.date}
                                </Typography>
                            </Paper>
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    );
};

export default CustomerReviews;