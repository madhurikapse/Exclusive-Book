import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; 
import logo from '../logo.svg';  // Ensure the logo image is in your project
import '../style/Style.css'; // Ensure styles are imported
import "../style/Sign.css";  // Import additional styles if necessary

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Sidebar state
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Login modal state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the sidebar visibility
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true); // Open login modal
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false); // Close login modal
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <span className="corporate-events">Corporate Events</span>
      </div>

      <div className="navbar-right">
        {/* Right side items: icons and text visible on desktop */}
        <div className="nav-item">
          <Link to="/wishlist">
            <FaHeart size={20} />
            <span className="nav-text">Wishlist</span>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/cart">
            <FaShoppingCart size={20} />
            <span className="nav-text">Cart</span>
          </Link>
        </div>
        {/* Sign In button */}
        <div className="nav-item">
          <button onClick={openLoginModal} className="sign-in-btn">
            <FaUserAlt size={20} />
            <span className="nav-text">Sign In</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Icon and Mobile View Items */}
      <div className="navbar-mobile">
        {/* Wishlist, Cart, and Sign In icons on mobile */}
        <div className="nav-item-mobile">
          <Link to="/wishlist">
            <FaHeart size={20} />
          </Link>
        </div>
        <div className="nav-item-mobile">
          <Link to="/cart">
            <FaShoppingCart size={20} />
          </Link>
        </div>
        <div className="nav-item-mobile">
          <button onClick={openLoginModal}>
            <FaUserAlt size={20} />
          </button>
        </div>

        {/* Menu icon after Profile in mobile */}
        <button className="menu-icon" onClick={toggleMenu}>
          <FaBars size={24} color="black" />
        </button>
      </div>

      {/* Sidebar Menu */}
      <div className={`side-menu ${isMenuOpen ? 'show' : ''}`}>
        <button className="close-side-menu" onClick={toggleMenu}>
          <FaTimes size={24} color="white" />
        </button>
        <ul>
          <li><Link to="/new">NEW</Link></li>
          <li><Link to="/fiction">FICTION</Link></li>
          <li><Link to="/non-fiction">NON-FICTION</Link></li>
          <li><Link to="/children-teen">CHILDREN, TEEN & YOUNG ADULT</Link></li>
          <li><Link to="/gift-cards">GIFT CARD</Link></li>
          <li><Link to="/vouchers-stationery">VOUCHERS & STATIONERY</Link></li>
          <li><Link to="/pre-order">PRE-ORDER</Link></li>
          <li><Link to="/corporate">CORPORATE</Link></li>
        </ul>
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
