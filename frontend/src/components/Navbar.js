import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaUserAlt, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; 
import CompanyLogo1 from '../components/CompanyLogo1.jpg';
import '../style/Style.css';
import "../style/Sign.css";

// Import page components
import Wishlist from '../pages/WishlistPage'; // Wishlist Component
import Cart from '../pages/Cart'; // Cart Component
import Home from '../pages/Home'; // Home Component (optional)

const Navbar = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      {/* Routes above Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#" className="logo">
            <img src={CompanyLogo1} alt="Company Logo" />
          </a>
          <span className="corporate-events">Corporate Events</span>
        </div>

        <div className="navbar-right">
          <div className="nav-item">
            <Link to="/wishlist">
              <FaHeart size={20} />
              <span className="nav-text">Wishlist</span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/cart">
              <FaShoppingCart size={20} />
              <span className="nav-text">Cart: {cartItems.length}</span> {/* Display cart count */}
            </Link>
          </div>
          <div className="nav-item">
            <button onClick={openLoginModal} className="sign-in-btn">
              <FaUserAlt size={20} />
              <span className="nav-text">Sign In</span>
            </button>
          </div>
        </div>

        <div className="navbar-mobile">
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
          <button className="menu-icon" onClick={toggleMenu}>
            <FaBars size={24} color="black" />
          </button>
        </div>

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
    </>
  );
};

export default Navbar;
