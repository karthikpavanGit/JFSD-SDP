import React, { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Tabs,
    Tab,
    Avatar,
    Button,
    Box,
    Divider,
    CircularProgress,
    Alert
} from '@mui/material';
import {
    Person,
    ShoppingBag,
    Favorite,
    LocationOn,
    Settings
} from '@mui/icons-material';

const Profile = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem('userToken');
            if (!token) {
                throw new Error('No authentication token found');
            }

            const response = await fetch('http://localhost:5000/api/user/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            setUserData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Not set';
        try {
            return new Date(dateString).toLocaleDateString();
        } catch (error) {
            return 'Invalid Date';
        }
    };

    const renderTabContent = () => {
        if (loading) {
            return (
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                    <CircularProgress />
                </Box>
            );
        }

        if (error) {
            return (
                <Alert severity="error" sx={{ m: 2 }}>
                    {error}
                </Alert>
            );
        }

        switch (activeTab) {
            case 0: // Profile
                return (
                    <Box sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                            <Avatar
                                sx={{ 
                                    width: 100, 
                                    height: 100, 
                                    fontSize: 40,
                                    bgcolor: 'primary.main'
                                }}
                            >
                                {userData?.firstName?.charAt(0)}
                            </Avatar>
                            <Box sx={{ ml: 3 }}>
                                <Typography variant="h4">
                                    {`${userData?.firstName || ''} ${userData?.lastName || ''}`}
                                </Typography>
                                <Typography color="textSecondary">
                                    {userData?.email}
                                </Typography>
                                <Typography color="textSecondary">
                                    {userData?.phone || 'No phone number added'}
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" gutterBottom>
                                    Personal Information
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    <Typography>
                                        <strong>Gender:</strong> {userData?.gender || 'Not specified'}
                                    </Typography>
                                    <Typography>
                                        <strong>Date of Birth:</strong> {formatDate(userData?.dateOfBirth)}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" gutterBottom>
                                    Contact Information
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    <Typography>
                                        <strong>Street:</strong> {userData?.street || 'Not specified'}
                                    </Typography>
                                    <Typography>
                                        <strong>City:</strong> {userData?.city || 'Not specified'}
                                    </Typography>
                                    <Typography>
                                        <strong>State:</strong> {userData?.state || 'Not specified'}
                                    </Typography>
                                    <Typography>
                                        <strong>Pincode:</strong> {userData?.pincode || 'Not specified'}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                            <Button 
                                variant="contained" 
                                color="primary"
                                onClick={() => {/* Add edit functionality */}}
                            >
                                Edit Profile
                            </Button>
                        </Box>
                    </Box>
                );
            // Add other cases for Orders, Wishlist, etc.
            default:
                return null;
        }
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Paper>
                        <Tabs
                            orientation="vertical"
                            value={activeTab}
                            onChange={(e, newValue) => setActiveTab(newValue)}
                            sx={{ borderRight: 1, borderColor: 'divider' }}
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
                    <Paper>
                        {renderTabContent()}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;