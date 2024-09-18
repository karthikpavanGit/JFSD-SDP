import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import './login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize navigate

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock authentication (replace with real API call)
    if (email === '123@123' && password === '123') {
      alert('Login successful!');
      navigate('/welcome');  // Redirect to welcome page
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    
    <div className="login-form">
        <h1 className="store-heading">Handloom Fashion Store</h1>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;