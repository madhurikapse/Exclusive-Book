import React from 'react';
import '../style/Navbar2.css';
import { FaSearch } from 'react-icons/fa';
import CompanyLogo from '../components/CompanyLogo.jpg'; // Adjust path if necessary

const Navbar2 = () => {
    return (
        <div className="navbar2">
            <a href="#" className="logo">
                <img src={CompanyLogo} alt="Company Logo" />
            </a>
            <div className="search-container">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="What are you looking for?" />
            </div>
        </div>
    );
};

export default Navbar2;
