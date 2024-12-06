import React, { useState } from 'react';
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Avatar,
    Grid,
    IconButton,
    Divider,
    Switch,
    FormControlLabel
} from '@mui/material';
import {
    Edit,
    PhotoCamera,
    Save,
    Delete
} from '@mui/icons-material';
import './ProfileSettings.css';

const ProfileSettings = () => {
    const [profile, setProfile] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+91 9876543210',
        avatar: '/images/avatar.jpg',
        preferences: {
            emailNotifications: true,
            smsNotifications: false,
            newsletter: true,
            orderUpdates: true
        }
    });

    const [editing, setEditing] = useState(false);
    const [tempProfile, setTempProfile] = useState(profile);

    const handleInputChange = (field) => (event) => {
        setTempProfile({
            ...tempProfile,
            [field]: event.target.value
        });
    };

    const handlePreferenceChange = (preference) => (event) => {
        setTempProfile({
            ...tempProfile,
            preferences: {
                ...tempProfile.preferences,
                [preference]: event.target.checked
            }
        });
    };

    const handleSave = () => {
        setProfile(tempProfile);
        setEditing(false);
        // Add API call to save profile changes
    };

    const handleCancel = () => {
        setTempProfile(profile);
        setEditing(false);
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempProfile({
                    ...tempProfile,
                    avatar: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-settings">
            <Container maxWidth="md">
                <Paper className="settings-paper">
                    <div className="settings-header">
                        <Typography variant="h5">Profile Settings</Typography>
                        {!editing && (
                            <Button
                                startIcon={<Edit />}
                                onClick={() => setEditing(true)}
                            >
                                Edit Profile
                            </Button>
                        )}
                    </div>

                    <div className="avatar-section">
                        <Avatar
                            src={tempProfile.avatar}
                            className="profile-avatar"
                        />
                        {editing && (
                            <div className="avatar-actions">
                                <input
                                    accept="image/*"
                                    id="avatar-upload"
                                    type="file"
                                    hidden
                                    onChange={handleAvatarChange}
                                />
                                <label htmlFor="avatar-upload">
                                    <IconButton component="span" className="upload-button">
                                        <PhotoCamera />
                                    </IconButton>
                                </label>
                            </div>
                        )}
                    </div>

                    <Grid container spacing={3} className="form-grid">
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="First Name"
                                value={tempProfile.firstName}
                                onChange={handleInputChange('firstName')}
                                disabled={!editing}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Last Name"
                                value={tempProfile.lastName}
                                onChange={handleInputChange('lastName')}
                                disabled={!editing}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                value={tempProfile.email}
                                onChange={handleInputChange('email')}
                                disabled={!editing}
                                type="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Phone"
                                value={tempProfile.phone}
                                onChange={handleInputChange('phone')}
                                disabled={!editing}
                            />
                        </Grid>
                    </Grid>

                    <Divider className="settings-divider" />

                    <div className="preferences-section">
                        <Typography variant="h6" gutterBottom>
                            Preferences
                        </Typography>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={tempProfile.preferences.emailNotifications}
                                    onChange={handlePreferenceChange('emailNotifications')}
                                    disabled={!editing}
                                />
                            }
                            label="Email Notifications"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={tempProfile.preferences.smsNotifications}
                                    onChange={handlePreferenceChange('smsNotifications')}
                                    disabled={!editing}
                                />
                            }
                            label="SMS Notifications"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={tempProfile.preferences.newsletter}
                                    onChange={handlePreferenceChange('newsletter')}
                                    disabled={!editing}
                                />
                            }
                            label="Newsletter Subscription"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={tempProfile.preferences.orderUpdates}
                                    onChange={handlePreferenceChange('orderUpdates')}
                                    disabled={!editing}
                                />
                            }
                            label="Order Updates"
                        />
                    </div>

                    {editing && (
                        <div className="settings-actions">
                            <Button
                                variant="outlined"
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={<Save />}
                                onClick={handleSave}
                            >
                                Save Changes
                            </Button>
                        </div>
                    )}
                </Paper>
            </Container>
        </div>
    );
};

export default ProfileSettings;