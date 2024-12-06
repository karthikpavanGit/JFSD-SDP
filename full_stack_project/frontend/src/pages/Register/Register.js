import React, { useState } from 'react';
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Link,
    Grid,
    InputAdornment,
    IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        // Add registration logic here
        console.log('Register:', formData);
    };

    return (
        <div className="register-page">
            <Container maxWidth="sm">
                <Paper elevation={3} className="register-paper">
                    <Typography variant="h4" align="center" gutterBottom>
                        Create Account
                    </Typography>
                    <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
                        Join our handloom community
                    </Typography>

                    <form onSubmit={handleSubmit} className="register-form">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    variant="outlined"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        firstName: e.target.value
                                    })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    variant="outlined"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        lastName: e.target.value
                                    })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    variant="outlined"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        email: e.target.value
                                    })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    variant="outlined"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        phone: e.target.value
                                    })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    variant="outlined"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        password: e.target.value
                                    })}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Confirm Password"
                                    variant="outlined"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        confirmPassword: e.target.value
                                    })}
                                    required
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            className="register-button"
                        >
                            Create Account
                        </Button>

                        <Typography variant="body2" align="center" className="login-prompt">
                            Already have an account?{' '}
                            <Link href="/login" underline="hover">
                                Login
                            </Link>
                        </Typography>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default Register;