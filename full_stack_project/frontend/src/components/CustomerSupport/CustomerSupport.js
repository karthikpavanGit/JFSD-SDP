import React, { useState } from 'react';
import {
    Container,
    Paper,
    Typography,
    Grid,
    Button,
    TextField,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    CircularProgress,
    Chip
} from '@mui/material';
import LocalShipping from '@mui/icons-material/LocalShipping';
import AssignmentReturn from '@mui/icons-material/AssignmentReturn';
import Inventory from '@mui/icons-material/Inventory';
import AccountCircle from '@mui/icons-material/AccountCircle';

import {
    QuestionAnswer,
    Email,
    Phone,
    WhatsApp,
    LiveHelp,
    Search,
    ArrowForward,
    ChatBubble
} from '@mui/icons-material';
import ChatWindow from './ChatWindow';
import FAQSection from './FAQSection';
import TicketSystem from './TicketSystem';
import './CustomerSupport.css';

const CustomerSupport = () => {
    const [openChat, setOpenChat] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Sample support categories
    const supportCategories = [
        {
            id: 'orders',
            title: 'Orders & Shipping',
            icon: <LocalShipping />,
            description: 'Track orders, shipping updates, and delivery issues'
        },
        {
            id: 'returns',
            title: 'Returns & Refunds',
            icon: <AssignmentReturn />,
            description: 'Return process, refund status, and exchange policies'
        },
        {
            id: 'product',
            title: 'Product Support',
            icon: <Inventory />,
            description: 'Product information, sizing, and care instructions'
        },
        {
            id: 'account',
            title: 'Account & Payment',
            icon: <AccountCircle />,
            description: 'Account issues, payment methods, and billing'
        }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate search delay
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="customer-support">
            <Container maxWidth="lg">
                {/* Header Section */}
                <Paper className="support-header">
                    <Typography variant="h4">
                        How can we help you?
                    </Typography>
                    <form onSubmit={handleSearch} className="search-form">
                        <TextField
                            fullWidth
                            placeholder="Search for help..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            InputProps={{
                                startAdornment: <Search />,
                                endAdornment: loading && <CircularProgress size={20} />
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={loading}
                        >
                            Search
                        </Button>
                    </form>
                </Paper>

                {/* Support Categories */}
                <Grid container spacing={3} className="support-categories">
                    {supportCategories.map((category) => (
                        <Grid item xs={12} sm={6} md={3} key={category.id}>
                            <Paper
                                className={`category-card ${selectedCategory?.id === category.id ? 'selected' : ''}`}
                                onClick={() => handleCategorySelect(category)}
                            >
                                <ListItemIcon>{category.icon}</ListItemIcon>
                                <Typography variant="h6">{category.title}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {category.description}
                                </Typography>
                                <ArrowForward className="category-arrow" />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Contact Options */}
                <Paper className="contact-options">
                    <Typography variant="h6" gutterBottom>
                        Contact Us
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Button
                                variant="outlined"
                                startIcon={<ChatBubble />}
                                onClick={() => setOpenChat(true)}
                                fullWidth
                            >
                                Live Chat
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Button
                                variant="outlined"
                                startIcon={<Email />}
                                href="nakshatrathreads@kluniversity.in"
                                fullWidth
                            >
                                Email Support
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Button
                                variant="outlined"
                                startIcon={<Phone />}
                                href="tel:+919502725774"
                                fullWidth
                            >
                                Call Us
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Button
                                variant="outlined"
                                startIcon={<WhatsApp />}
                                href="https://wa.me/919502725774"
                                target="_blank"
                                fullWidth
                            >
                                WhatsApp
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>

                {/* FAQ Section */}
                <FAQSection />

                {/* Ticket System */}
                <TicketSystem />

                {/* Live Chat Window */}
                <ChatWindow
                    open={openChat}
                    onClose={() => setOpenChat(false)}
                />
            </Container>
        </div>
    );
};

export default CustomerSupport;