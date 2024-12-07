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
        country: '', 
        state: '',
        pincode: ''
    });
    const [states, setStates] = useState([]);
    const steps = ['Personal Information', 'Contact Details', 'Account Setup'];
    // ... existing imports ...
    const countries = {
        India: [
            'Andhra Pradesh',
            'Arunachal Pradesh',
            'Assam',
            'Bihar',
            'Chhattisgarh',
            'Goa',
            'Gujarat',
            'Haryana',
            'Himachal Pradesh',
            'Jharkhand',
            'Karnataka',
            'Kerala',
            'Madhya Pradesh',
            'Maharashtra',
            'Manipur',
            'Meghalaya',
            'Mizoram',
            'Nagaland',
            'Odisha',
            'Punjab',
            'Rajasthan',
            'Sikkim',
            'Tamil Nadu',
            'Telangana',
            'Tripura',
            'Uttar Pradesh',
            'Uttarakhand',
            'West Bengal',
            'Andaman and Nicobar Islands',
            'Chandigarh',
            'Dadra and Nagar Haveli and Daman and Diu',
            'Delhi',
            'Jammu and Kashmir',
            'Ladakh',
            'Lakshadweep',
            'Puducherry'
        ],
        USA: [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
            'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
            'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
            'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
            'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
            'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
            'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
            'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
            'District of Columbia', 'Puerto Rico', 'Guam', 'American Samoa', 'U.S. Virgin Islands'
        ],
        Canada: [
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Northwest Territories',
            'Nova Scotia',
            'Nunavut',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan',
            'Yukon'
        ],
        Australia: [
            'New South Wales',
            'Victoria',
            'Queensland',
            'Western Australia',
            'South Australia',
            'Tasmania',
            'Australian Capital Territory',
            'Northern Territory',
            'External Territories'
        ],
        'United Kingdom': [
            'England',
            'Scotland',
            'Wales',
            'Northern Ireland'
        ]
    };

    // ... rest of the component remains the same ...
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const newData = {
                ...prev,
                [name]: value
            };
            // Reset state when country changes
            if (name === 'country') {
                newData.state = '';
            }
            return newData;
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
                // Validate first and last names (only alphabets)
            if (!/^[A-Za-z]+$/.test(formData.firstName)) {
                setError('First name must contain only alphabets');
                return false;
            }
            if (!/^[A-Za-z]+$/.test(formData.lastName)) {
                setError('Last name must contain only alphabets');
                return false;
            }     
                const yearOfBirth = new Date(formData.dateOfBirth).getFullYear();
            if (yearOfBirth < 1850 || yearOfBirth > 2024) {
                setError('Date of birth must be between 1850 and 2024');
                return false;
            }

            setError(''); // Clear error if all validations pass
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
                // Enhanced password validation
                if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
                    setError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, etc.)');
                    return false;
                }
                if (formData.password !== formData.confirmPassword) {
                    setError('Passwords do not match');
                    return false;
                }
                setError(''); // Clear error if all validations pass
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

<FormControl fullWidth margin="normal" required>
                    <InputLabel>Country</InputLabel>
                    <Select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        label="Country"
                    >
                        {Object.keys(countries).map((country) => (
                            <MenuItem key={country} value={country}>
                                {country}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal" required>
                    <InputLabel>State</InputLabel>
                    <Select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        label="State"
                        disabled={!formData.country}
                    >
                        {formData.country && countries[formData.country].map((state) => (
                            <MenuItem key={state} value={state}>
                                {state}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
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