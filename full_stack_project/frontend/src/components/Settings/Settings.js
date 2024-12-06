import React, { useState } from 'react';
import {
    Container,
    Paper,
    Typography,
    Divider,
    Switch,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField
} from '@mui/material';
import {
    Notifications,
    Security,
    Language,
    DeleteForever
} from '@mui/icons-material';
import './Settings.css';

const Settings = () => {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        pushNotifications: true,
        orderUpdates: true,
        promotions: false,
        twoFactorAuth: false,
        language: 'English',
    });

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [deleteConfirmation, setDeleteConfirmation] = useState('');

    const handleSettingChange = (setting) => {
        setSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    const handleDeleteAccount = () => {
        if (deleteConfirmation === 'DELETE') {
            // Add account deletion logic here
            console.log('Account deleted');
            setOpenDeleteDialog(false);
        }
    };

    return (
        <div className="settings">
            <Container maxWidth="md">
                {/* Notification Settings */}
                <Paper className="settings-section">
                    <div className="section-header">
                        <Notifications />
                        <Typography variant="h6">
                            Notification Preferences
                        </Typography>
                    </div>
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="Email Notifications"
                                secondary="Receive order updates and promotions via email"
                            />
                            <ListItemSecondaryAction>
                                <Switch
                                    checked={settings.emailNotifications}
                                    onChange={() => handleSettingChange('emailNotifications')}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Push Notifications"
                                secondary="Receive notifications on your device"
                            />
                            <ListItemSecondaryAction>
                                <Switch
                                    checked={settings.pushNotifications}
                                    onChange={() => handleSettingChange('pushNotifications')}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Order Updates"
                                secondary="Get notifications about your order status"
                            />
                            <ListItemSecondaryAction>
                                <Switch
                                    checked={settings.orderUpdates}
                                    onChange={() => handleSettingChange('orderUpdates')}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Promotional Updates"
                                secondary="Receive updates about sales and offers"
                            />
                            <ListItemSecondaryAction>
                                <Switch
                                    checked={settings.promotions}
                                    onChange={() => handleSettingChange('promotions')}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Paper>

                {/* Security Settings */}
                <Paper className="settings-section">
                    <div className="section-header">
                        <Security />
                        <Typography variant="h6">
                            Security Settings
                        </Typography>
                    </div>
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="Two-Factor Authentication"
                                secondary="Add an extra layer of security to your account"
                            />
                            <ListItemSecondaryAction>
                                <Switch
                                    checked={settings.twoFactorAuth}
                                    onChange={() => handleSettingChange('twoFactorAuth')}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Change Password"
                                secondary="Update your account password"
                            />
                            <ListItemSecondaryAction>
                                <Button variant="outlined" color="primary">
                                    Change
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Paper>

                {/* Language Settings */}
                <Paper className="settings-section">
                    <div className="section-header">
                        <Language />
                        <Typography variant="h6">
                            Language & Region
                        </Typography>
                    </div>
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="Language"
                                secondary="Choose your preferred language"
                            />
                            <ListItemSecondaryAction>
                                <Button variant="outlined">
                                    {settings.language}
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Paper>

                {/* Delete Account */}
                <Paper className="settings-section danger-zone">
                    <div className="section-header">
                        <DeleteForever color="error" />
                        <Typography variant="h6" color="error">
                            Danger Zone
                        </Typography>
                    </div>
                    <Divider />
                    <div className="danger-content">
                        <Typography variant="body1" gutterBottom>
                            Once you delete your account, there is no going back. Please be certain.
                        </Typography>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => setOpenDeleteDialog(true)}
                        >
                            Delete Account
                        </Button>
                    </div>
                </Paper>

                {/* Delete Account Dialog */}
                <Dialog
                    open={openDeleteDialog}
                    onClose={() => setOpenDeleteDialog(false)}
                >
                    <DialogTitle>Delete Account</DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            This action cannot be undone. To confirm, please type "DELETE" below:
                        </Typography>
                        <TextField
                            fullWidth
                            value={deleteConfirmation}
                            onChange={(e) => setDeleteConfirmation(e.target.value)}
                            margin="dense"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenDeleteDialog(false)}>
                            Cancel
                        </Button>
                        <Button
                            onClick={handleDeleteAccount}
                            color="error"
                            disabled={deleteConfirmation !== 'DELETE'}
                        >
                            Delete Account
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </div>
    );
};

export default Settings;