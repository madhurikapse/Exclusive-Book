import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/ForgetPassword.css";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email) {
        // Simulate an API call
        console.log("Reset link sent to:", email);
        setIsSubmitted(true);
      } else {
        throw new Error("Email is required.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div className="forget-password-page">
      {isSubmitted ? (
        <div className="confirmation">
          <h1>Check Your Email</h1>
          <p>A password reset link has been sent to <strong>{email}</strong>.</p>
          <button onClick={() => navigate("/")}>Back to Login</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Forgot Password</h1>
          <p>Enter your email address, and we'll send you a link to reset your password.</p>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
      )}
    </div>
  );
};

export default ForgetPassword;
