import React, { useState } from 'react';
import {
    Box,
    Typography,
    Rating,
    Button,
    Avatar,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    LinearProgress,
    Divider
} from '@mui/material';
import { formatDistanceToNow } from 'date-fns';
import './ProductReviews.css';

const ProductReviews = ({ productId }) => {
    const [openReviewDialog, setOpenReviewDialog] = useState(false);
    const [newReview, setNewReview] = useState({
        rating: 0,
        comment: ''
    });

    // Sample reviews data
    const reviews = [
        {
            id: 1,
            user: {
                name: 'Priya Sharma',
                avatar: '/images/avatars/avatar1.jpg'
            },
            rating: 5,
            comment: 'Beautiful saree with excellent craftsmanship. The silk quality is outstanding.',
            date: new Date('2024-03-10'),
            verified: true
        },
        {
            id: 2,
            user: {
                name: 'Rahul Verma',
                avatar: '/images/avatars/avatar2.jpg'
            },
            rating: 4,
            comment: 'Good quality product, but delivery took longer than expected.',
            date: new Date('2024-03-08'),
            verified: true
        }
    ];

    // Calculate rating statistics
    const totalReviews = reviews.length;
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews;
    const ratingCounts = Array(5).fill(0);
    reviews.forEach(review => ratingCounts[review.rating - 1]++);

    const handleSubmitReview = () => {
        // Add review submission logic here
        console.log('New Review:', newReview);
        setOpenReviewDialog(false);
        setNewReview({ rating: 0, comment: '' });
    };

    return (
        <div className="product-reviews">
            {/* Reviews Summary */}
            <Box className="reviews-summary">
                <Box className="rating-overview">
                    <Typography variant="h4">
                        {averageRating.toFixed(1)}
                    </Typography>
                    <Rating value={averageRating} precision={0.1} readOnly />
                    <Typography variant="body2">
                        Based on {totalReviews} reviews
                    </Typography>
                </Box>

                <Box className="rating-bars">
                    {ratingCounts.map((count, index) => (
                        <Box key={index} className="rating-bar">
                            <Typography>{5 - index} stars</Typography>
                            <LinearProgress
                                variant="determinate"
                                value={(count / totalReviews) * 100}
                                className="progress-bar"
                            />
                            <Typography>{count}</Typography>
                        </Box>
                    ))}
                </Box>

                <Button
                    variant="contained"
                    onClick={() => setOpenReviewDialog(true)}
                    className="write-review-button"
                >
                    Write a Review
                </Button>
            </Box>

            <Divider className="reviews-divider" />

            {/* Reviews List */}
            <Box className="reviews-list">
                {reviews.map(review => (
                    <Box key={review.id} className="review-item">
                        <Box className="review-header">
                            <Avatar src={review.user.avatar} alt={review.user.name} />
                            <Box className="review-info">
                                <Typography variant="subtitle1">
                                    {review.user.name}
                                    {review.verified && (
                                        <span className="verified-badge">Verified Purchase</span>
                                    )}
                                </Typography>
                                <Rating value={review.rating} readOnly size="small" />
                                <Typography variant="caption" color="textSecondary">
                                    {formatDistanceToNow(review.date, { addSuffix: true })}
                                </Typography>
                            </Box>
                        </Box>
                        <Typography className="review-comment">
                            {review.comment}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* Write Review Dialog */}
            <Dialog
                open={openReviewDialog}
                onClose={() => setOpenReviewDialog(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>Write a Review</DialogTitle>
                <DialogContent>
                    <Box className="review-form">
                        <Typography>Your Rating</Typography>
                        <Rating
                            value={newReview.rating}
                            onChange={(event, newValue) => {
                                setNewReview({ ...newReview, rating: newValue });
                            }}
                            size="large"
                        />
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Your Review"
                            value={newReview.comment}
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            margin="normal"
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenReviewDialog(false)}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmitReview}
                        variant="contained"
                        disabled={!newReview.rating || !newReview.comment}
                    >
                        Submit Review
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ProductReviews;