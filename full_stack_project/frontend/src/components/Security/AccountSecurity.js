import React, { useState } from 'react';
import {
    Container,
    Paper,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Grid,
    Switch,
    FormControlLabel,
    Alert,
    Stepper,
    Step,
    StepLabel
} from '@mui/material';
import {
    Security,
    PhoneAndroid,
    Email,
    VpnKey,
    History
} from '@mui/icons-material';
import './AccountSecurity.css';

const AccountSecurity = () => {
    const [openTwoFactorDialog, setOpenTwoFactorDialog] = useState(false);
    const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    // Sample security activity
    const securityActivity = [
        {
            type: 'Login',
            device: 'Chrome on Windows',
            location: 'Mumbai, India',
            time: '2024-03-15 14:30',
            status: 'success'
        },
        {
            type: 'Password Change',
            device: 'Mobile App',
            location: 'Delhi, India',
            time: '2024-03-10 09:15',
            status: 'success'
        },
        {
            type: 'Failed Login',
            device: 'Firefox on Mac',
            location: 'Unknown',
            time: '2024-03-08 22:45',
            status: 'failed'
        }
    ];

    const twoFactorSteps = [
        'Verify Phone Number',
        'Enter OTP',
        'Enable 2FA'
    ];

    const handlePasswordChange = (event) => {
        event.preventDefault();
        // Add password change logic
        setOpenPasswordDialog(false);
    };

    const handleTwoFactorSetup = () => {
        if (activeStep === twoFactorSteps.length - 1) {
            setTwoFactorEnabled(true);
            setOpenTwoFactorDialog(false);
            setActiveStep(0);
        } else {
            setActiveStep((prev) => prev + 1);
        }
    };

    return (
        <div className="account-security">
            <Container maxWidth="md">
                {/* Security Overview */}
                <Paper className="security-section">
                    <div className="section-header">
                        <Security />
                        <Typography variant="h6">Security Overview</Typography>
                    </div>
                    <Grid container spacing={3} className="security-grid">
                        <Grid item xs={12} md={6}>
                            <div className="security-item">
                                <VpnKey />
                                <div className="security-item-content">
                                    <Typography variant="subtitle1">
                                        Password
                                    </Typography>
                                    <Typography variant="body2">
                                        Last changed 30 days ago
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        onClick={() => setOpenPasswordDialog(true)}
                                    >
                                        Change Password
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="security-item">
                                <PhoneAndroid />
                                <div className="security-item-content">
                                    <Typography variant="subtitle1">
                                        Two-Factor Authentication
                                    </Typography>
                                    <Typography variant="body2">
                                        {twoFactorEnabled ? 'Enabled' : 'Disabled'}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        onClick={() => setOpenTwoFactorDialog(true)}
                                    >
                                        {twoFactorEnabled ? 'Manage 2FA' : 'Enable 2FA'}
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>

                {/* Recent Activity */}
                <Paper className="security-section">
                    <div className="section-header">
                        <History />
                        <Typography variant="h6">Recent Security Activity</Typography>
                    </div>
                    <div className="activity-list">
                        {securityActivity.map((activity, index) => (
                            <div key={index} className="activity-item">
                                <div className="activity-info">
                                    <Typography variant="subtitle1">
                                        {activity.type}
                                    </Typography>
                                    <Typography variant="body2">
                                        {activity.device} • {activity.location}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        {activity.time}
                                    </Typography>
                                </div>
                                <span className={`activity-status ${activity.status}`}>
                                    {activity.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </Paper>

                {/* Password Change Dialog */}
                <Dialog
                    open={openPasswordDialog}
                    onClose={() => setOpenPasswordDialog(false)}
                    maxWidth="sm"
                    fullWidth
                >
                    <DialogTitle>Change Password</DialogTitle>
                    <form onSubmit={handlePasswordChange}>
                        <DialogContent>
                            <TextField
                                fullWidth
                                type="password"
                                label="Current Password"
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                type="password"
                                label="New Password"
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                type="password"
                                label="Confirm New Password"
                                margin="normal"
                                required
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setOpenPasswordDialog(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" color="primary">
                                Change Password
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>

                {/* Two-Factor Authentication Dialog */}
                <Dialog
                    open={openTwoFactorDialog}
                    onClose={() => setOpenTwoFactorDialog(false)}
                    maxWidth="sm"
                    fullWidth
                >
                    <DialogTitle>Set Up Two-Factor Authentication</DialogTitle>
                    <DialogContent>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {twoFactorSteps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <div className="two-factor-content">
                            {activeStep === 0 && (
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    margin="normal"
                                />
                            )}
                            {activeStep === 1 && (
                                <TextField
                                    fullWidth
                                    label="Enter OTP"
                                    margin="normal"
                                />
                            )}
                            {activeStep === 2 && (
                                <Alert severity="success">
                                    Two-factor authentication is ready to be enabled
                                </Alert>
                            )}
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenTwoFactorDialog(false)}>
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleTwoFactorSetup}
                        >
                            {activeStep === twoFactorSteps.length - 1 ? 'Enable 2FA' : 'Next'}
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </div>
    );
};

export default AccountSecurity;