// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Login.css';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., send request to backend)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <Link to="/forgot-password" className="forgot-password">
              Forgot your password?
            </Link>
            <button type="submit" className="btn-signin">Sign In</button>
          </div>
        </form>

        <div className="signup-prompt">
          <p>Don't have an account? <Link to="/sign-up">Create one</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
