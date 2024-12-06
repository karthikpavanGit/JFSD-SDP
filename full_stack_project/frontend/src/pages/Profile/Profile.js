import React, { useState } from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Tabs,
    Tab,
    Avatar,
    Button,
    List,
    ListItem,
    ListItemText,
    Divider
} from '@mui/material';
import {
    Person,
    ShoppingBag,
    Favorite,
    LocationOn,
    Settings
} from '@mui/icons-material';
import './Profile.css';

const Profile = () => {
    const [activeTab, setActiveTab] = useState(0);

    // Sample user data
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+91 9876543210',
        avatar: '/images/avatar.jpg',
        orders: [
            {
                id: 'ORD123456',
                date: '2024-03-15',
                total: 14498,
                status: 'Delivered'
            },
            {
                id: 'ORD123457',
                date: '2024-03-10',
                total: 24999,
                status: 'In Transit'
            }
        ],
        addresses: [
            {
                id: 1,
                type: 'Home',
                address: '123 Main Street, Apartment 4B',
                city: 'Mumbai',
                state: 'Maharashtra',
                pincode: '400001'
            },
            {
                id: 2,
                type: 'Office',
                address: '456 Business Park, Floor 3',
                city: 'Mumbai',
                state: 'Maharashtra',
                pincode: '400051'
            }
        ],
        wishlist: [
            {
                id: 1,
                name: 'Silk Saree',
                price: 12999,
                image: '/images/products/saree1.jpg'
            },
            {
                id: 2,
                name: 'Cotton Fabric',
                price: 1499,
                image: '/images/products/fabric1.jpg'
            }
        ]
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 0: // Profile
                return (
                    <div className="profile-info">
                        <div className="profile-header">
                            <Avatar
                                src={user.avatar}
                                className="profile-avatar"
                            />
                            <div className="profile-details">
                                <Typography variant="h5">{user.name}</Typography>
                                <Typography color="textSecondary">{user.email}</Typography>
                                <Typography color="textSecondary">{user.phone}</Typography>
                            </div>
                            <Button
                                variant="outlined"
                                className="edit-profile-button"
                            >
                                Edit Profile
                            </Button>
                        </div>
                    </div>
                );

            case 1: // Orders
                return (
                    <div className="orders-section">
                        <List>
                            {user.orders.map((order) => (
                                <React.Fragment key={order.id}>
                                    <ListItem className="order-item">
                                        <ListItemText
                                            primary={`Order ${order.id}`}
                                            secondary={`Ordered on ${order.date}`}
                                        />
                                        <div className="order-details">
                                            <Typography>₹{order.total.toLocaleString()}</Typography>
                                            <Typography
                                                className={`order-status ${order.status.toLowerCase()}`}
                                            >
                                                {order.status}
                                            </Typography>
                                        </div>
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>
                    </div>
                );

            // Add more cases for other tabs

            default:
                return null;
        }
    };

    return (
        <div className="profile-page">
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <Paper className="sidebar">
                            <Tabs
                                orientation="vertical"
                                value={activeTab}
                                onChange={handleTabChange}
                                className="profile-tabs"
                            >
                                <Tab icon={<Person />} label="Profile" />
                                <Tab icon={<ShoppingBag />} label="Orders" />
                                <Tab icon={<Favorite />} label="Wishlist" />
                                <Tab icon={<LocationOn />} label="Addresses" />
                                <Tab icon={<Settings />} label="Settings" />
                            </Tabs>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Paper className="content">
                            {renderTabContent()}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Profile;