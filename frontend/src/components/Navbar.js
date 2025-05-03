import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaHeart, FaShoppingCart, FaBars, FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import Logo from "../assets/img/Africa Annual Review 2024_files/Logo.jpeg"

import "../style/Style.css";
import "../style/Sign.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();



  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userData.email && userData.password) {
        // Implement login API logic here
        toast.success("Login successful!");
        setUserData({ email: "", password: "" });
        closeLoginModal();
        navigate("/");
      } else {
        toast.error("All fields are mandatory.");
      }
    } catch (error) {
      toast.error("Login failed, please try again.");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo">
            <img src={{Logo}} alt="Company Logo" />
          </Link>
        </div>

       
          <div className="nav-item">
            <button onClick={openLoginModal} className="sign-in-btn">
              <FaUserAlt size={20} />
              <span className="nav-text">Sign In</span>
            </button>
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

        <div className={`side-menu ${isMenuOpen ? "show" : ""}`}>
          <button className="close-side-menu" onClick={closeMenu}>
            <FaTimes size={24} color="white" />
          </button>
          <ul>
            <li><Link to="/new" onClick={closeMenu}>NEW</Link></li>
            <li><Link to="/fiction" onClick={closeMenu}>FICTION</Link></li>
            <li><Link to="/non-fiction" onClick={closeMenu}>NON-FICTION</Link></li>
            <li><Link to="/children-teen" onClick={closeMenu}>CHILDREN, TEEN & YOUNG ADULT</Link></li>
            <li><Link to="/gift-cards" onClick={closeMenu}>GIFT CARD</Link></li>
            <li><Link to="/vouchers-stationery" onClick={closeMenu}>VOUCHERS & STATIONERY</Link></li>
            <li><Link to="/pre-order" onClick={closeMenu}>PRE-ORDER</Link></li>
            <li><Link to="/corporate" onClick={closeMenu}>CORPORATE</Link></li>
          </ul>
        </div>

        {isLoginModalOpen && (
          <div className="login-modal">
            <div className="login-modal-content">
              <button className="close-btn" onClick={closeLoginModal} aria-label="Close Login Modal">
                X
              </button>
              <h3>Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="password-input-container">
                    <input
                      type={showPassword ? "password" : "text"}
                      id="password"
                      name="password"
                      value={userData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="toggle-password-btn"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn-login">Sign In</button>
                </div>
              </form>
              <div className="signup-prompt">
                <p>Don't have an account? <span onClick={() => navigate("/Register")} className="signup-link">register one</span></p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
