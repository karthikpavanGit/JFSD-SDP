import React, { useState } from 'react';
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Link,
    InputAdornment,
    IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Login:', formData);
    };

    return (
        <div className="login-page">
            <Container maxWidth="xs">
                <Paper elevation={3} className="login-paper">
                    <Typography variant="h4" align="center" gutterBottom>
                        Welcome Back
                    </Typography>
                    <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
                        Please login to your account
                    </Typography>

                    <form onSubmit={handleSubmit} className="login-form">
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

                        <Link
                            href="/forgot-password"
                            className="forgot-password"
                            underline="hover"
                        >
                            Forgot Password?
                        </Link>

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            className="login-button"
                        >
                            Login
                        </Button>

                        <Typography variant="body2" align="center" className="signup-prompt">
                            Don't have an account?{' '}
                            <Link href="/register" underline="hover">
                                Sign up
                            </Link>
                        </Typography>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default Login;