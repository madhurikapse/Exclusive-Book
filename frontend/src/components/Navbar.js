// Navbar.js
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import Api from "../axiosconfig";
import CompanyLogo1 from "../components/CompanyLogo1.jpg";
import "../style/Style.css";
import "../style/Sign.css";

const Navbar = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userData.email && userData.password) {
        const response = await Api.post("/auth/login",{userData});
        if (response.data.success) {
          dispatch({ type: "LOGIN", payload: response.data.userData });
          setUserData({
            email: "",
            password: "",
          });
          closeLoginModal();
          navigate("/");
          toast.success(response.data.message);
        } else {
          toast.error(response?.data?.error);
        }
      } else {
        toast.error("All fields are mandatory.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.error || ". Please try again.");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo">
            <img src={CompanyLogo1} alt="Company Logo" />
          </Link>
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
              <span className="nav-text">Cart: {cartItems.length}</span>
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

        <div className={`side-menu ${isMenuOpen ? "show" : ""}`}>
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
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="form-actions">
                  
                  <button type="submit" className="btn-login">Sign In</button>
                </div>
              </form>
              <div className="signup-prompt">
                <p>Don't have an account? <span onClick={() => navigate("/Register")} style={{ cursor: "pointer", color: "blue" }}>register one</span></p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
