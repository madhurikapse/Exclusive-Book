// src/pages/SignUpPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here (e.g., send request to backend)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-signup">Sign Up</button>
          </div>
        </form>

        <div className="login-prompt">
          <p>Already have an account? <Link to="/sign-in">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
