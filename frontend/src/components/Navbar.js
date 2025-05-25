import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaBars, FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import Logo from "../assets/img/Africa Annual Review 2024_files/Logo.jpeg";
import "../style/Navbar.css";
import axios from "axios";

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
      const response = await axios.post("http://localhost:5000/api/v1/auth/login", {
        email: userData.email,
        password: userData.password,
      });

      toast.success("Login successful!");
      setUserData({ email: "", password: "" });
      closeLoginModal(); // Close modal after login
      navigate("/"); // Redirect to home/dashboard
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Invalid credentials.");
      } else {
        toast.error("Login failed, please try again.");
      }
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo">
            <img src={Logo} alt="Company Logo" />
          </Link>
        </div>

        <div className="navbar-right">
          <button onClick={openLoginModal} className="sign-in-btn">
            <FaUserAlt size={20} />
            <span className="nav-text">Sign In</span>
          </button>
        </div>

        <div className="navbar-mobile">
          <button className="menu-icon" onClick={toggleMenu}>
            <FaBars size={24} color="black" />
          </button>
          <div className="nav-item-mobile">
            <button onClick={openLoginModal}>
              <FaUserAlt size={20} />
            </button>
          </div>
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
              <button
                className="close-btn"
                onClick={closeLoginModal}
                aria-label="Close Login Modal"
              >
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
                      type={showPassword ? "text" : "password"}
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
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
