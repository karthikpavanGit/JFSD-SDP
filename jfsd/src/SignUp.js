import React from 'react';
import './SignUp.css';  // Create a separate CSS file for signup form styling

const SignUp = () => {
  return (
    <div className="signup-container">
      <h1>Sign Up for Handloom Fashion World</h1>
      <form className="signup-form">
        <label>
          Full Name:
          <input type="text" name="fullname" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;