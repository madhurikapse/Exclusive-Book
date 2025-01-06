import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaHeart, FaShoppingCart } from 'react-icons/fa'; 
import logo from '../logo.svg';
import '../style/Style.css';
import "../style/Sign.css"

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);  // State to control modal visibility

  const openLoginModal = () => {
    setIsLoginModalOpen(true);  // Open the modal
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);  // Close the modal
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <span className="corporate-events">Corporate Events</span>
      </div>

      <div className="navbar-center">
        <div className="watchlist">
          <Link to="/wishlist">
            <FaHeart size={24} />
            <span>WISHLIST</span>
          </Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <FaShoppingCart size={24} />
            <span>CART</span>
          </Link>
        </div>
      </div>

      <div className="navbar-right">
        <button className="sign-in" onClick={openLoginModal}>
          <FaUserAlt size={24} />
          Sign In
        </button>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="login-modal">
          <div className="login-modal-content">
            <button className="close-btn" onClick={closeLoginModal}>X</button>
            <h3>Login</h3>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required />
              </div>
              <div className="form-actions">
                <Link to="/forgot-password" className="forgot-password">
                  Forgot your password?
                </Link>
                <button type="submit" className="btn-login">Sign In</button>
              </div>
            </form>
            <div className="signup-prompt">
              <p>Don't have an account? <Link to="/sign-up">Create one</Link></p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
