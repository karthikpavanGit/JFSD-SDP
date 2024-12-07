import React, { useState } from 'react';
import {
    Container,
    Paper,
    TextField,
    Button,
    Typography,
    Alert,
    Box,
    CircularProgress,
    IconButton,
    InputAdornment
} from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            // Store token and user data
            localStorage.setItem('userToken', data.token);
            localStorage.setItem('userData', JSON.stringify(data.user));
            console.log('Stored user data:', data.user); // Debug log

            navigate('/');
            window.location.reload(); // Refresh to update navbar

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Login
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                {location.state?.message && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        {location.state.message}
                    </Alert>
                )}

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                        required
                        autoComplete="email"
                    />
                    
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        margin="normal"
                        required
                        autoComplete="current-password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Box sx={{ mt: 2, mb: 2 }}>
                        <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
                            <Typography color="primary" variant="body2">
                                Forgot Password?
                            </Typography>
                        </Link>
                    </Box>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        sx={{ mt: 2, mb: 2 }}
                    >
                        {loading ? <CircularProgress size={24} /> : 'Login'}
                    </Button>
                </form>

                <Typography align="center" variant="body2">
                    Don't have an account?{' '}
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <Typography component="span" color="primary">
                            Register
                        </Typography>
                    </Link>
                </Typography>
            </Paper>
        </Container>
    );
};

export default Login;