
import React from 'react';

const ForgotPasswordPage = () => {
  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2>Forgot Your Password?</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <button type="submit" className="btn-signin">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
