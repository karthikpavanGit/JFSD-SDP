import React, { useState } from 'react';
import {
    Container,
    Paper,
    TextField,
    Button,
    Typography,
    Alert,
    Stepper,
    Step,
    StepLabel,
    Box,
    CircularProgress,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        gender: '',
        dateOfBirth: '',
        street: '',
        city: '',
        state: '',
        pincode: ''
    });

    const steps = ['Personal Information', 'Contact Details', 'Account Setup'];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const validateStep = (step) => {
        switch (step) {
            case 0: // Personal Information
                if (!formData.firstName || !formData.lastName || !formData.gender || !formData.dateOfBirth) {
                    setError('Please fill in all fields');
                    return false;
                }
                return true;

            case 1: // Contact Details
                if (!formData.phone || !formData.street || !formData.city || !formData.state || !formData.pincode) {
                    setError('Please fill in all fields');
                    return false;
                }
                if (!/^\d{10}$/.test(formData.phone)) {
                    setError('Please enter a valid 10-digit phone number');
                    return false;
                }
                if (!/^\d{6}$/.test(formData.pincode)) {
                    setError('Please enter a valid 6-digit pincode');
                    return false;
                }
                return true;

            case 2: // Account Setup
                if (!formData.email || !formData.password || !formData.confirmPassword) {
                    setError('Please fill in all fields');
                    return false;
                }
                if (!/\S+@\S+\.\S+/.test(formData.email)) {
                    setError('Please enter a valid email address');
                    return false;
                }
                if (formData.password.length < 6) {
                    setError('Password must be at least 6 characters long');
                    return false;
                }
                if (formData.password !== formData.confirmPassword) {
                    setError('Passwords do not match');
                    return false;
                }
                return true;

            default:
                return false;
        }
    };

    const handleNext = () => {
        if (validateStep(activeStep)) {
            setActiveStep((prevStep) => prevStep + 1);
            setError('');
        }
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep(activeStep)) return;

        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            setSuccess('Registration successful! Please check your email to verify your account.');
            setTimeout(() => {
                navigate('/login');
            }, 3000);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0: // Personal Information
                return (
                    <>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                label="Gender"
                            >
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            fullWidth
                            label="Date of Birth"
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            margin="normal"
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </>
                );

            case 1: // Contact Details
                return (
                    <>
                        <TextField
                            fullWidth
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            margin="normal"
                            required
                            inputProps={{ maxLength: 10 }}
                        />
                        <TextField
                            fullWidth
                            label="Street Address"
                            name="street"
                            value={formData.street}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="City"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="State"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Pincode"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            margin="normal"
                            required
                            inputProps={{ maxLength: 6 }}
                        />
                    </>
                );

            case 2: // Account Setup
                return (
                    <>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Register
                </Typography>

                <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                {success && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        {success}
                    </Alert>
                )}

                <form onSubmit={handleSubmit}>
                    {renderStepContent(activeStep)}

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                        {activeStep === steps.length - 1 ? (
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={loading}
                            >
                                {loading ? <CircularProgress size={24} /> : 'Register'}
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                onClick={handleNext}
                            >
                                Next
                            </Button>
                        )}
                    </Box>
                </form>

                <Typography align="center" sx={{ mt: 2 }}>
                    Already have an account? <Link to="/login">Login</Link>
                </Typography>
            </Paper>
        </Container>
    );
};

export default Register;