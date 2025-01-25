import React, { useState } from 'react';
import '../style/Footer.css';
import Api from '../AxiosConfig'; // Ensure Api is correctly configured and imported

const Footer = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!firstName || !email) {
      setMessage('Please fill in both your first name and email address.');
      return;
    }
  
    try {
      console.log('Payload:', { firstName, email }); // Debug the payload
  
      const response = await Api.post('/subscribe', {
        firstName,
        email,
      });
  
      console.log('API Response:', response.data);
  
      if (response.data.success) {
        setMessage('Subscription successful! Check your email for confirmation.');
        setFirstName('');
        setEmail('');
      } else {
        setMessage(response.data.message || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during subscription:', error);
      setMessage('Subscription failed. Please check your internet connection or try again later.');
    }
  };
  

  return (
    <footer className="footer">
      {/* Customer Care Section */}
      <div className="footer-section customer-care">
        <h3>Customer Care</h3>
        <p>
          <strong>Toll-Free SA Only:</strong> 0800 332 550
        </p>
        <p>
          <strong>International:</strong> +27 (0) 87 365 4677
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@exclusivebooks.co.za">info@exclusivebooks.co.za</a>
        </p>
        <p><strong>Contact Hours:</strong></p>
        <ul>
          <li key="monday-friday">Monday to Friday: 7:30AM - 4:30PM</li>
          <li key="saturday">Saturday: 8:00AM - 1:00PM</li>
        </ul>
      </div>

      {/* About Us Section */}
      <div className="footer-section">
        <h3>About Us</h3>
        <ul>
          <li key="contact-us"><a href="#">Contact Us</a></li>
          <li key="store-locator"><a href="#">Store Locator</a></li>
          <li key="eb-news"><a href="#">EB News</a></li>
          <li key="events"><a href="#">Events</a></li>
          <li key="rewards-programme"><a href="#">Rewards Programme</a></li>
          <li key="loyalty-programme"><a href="#">Loyalty Programme</a></li>
          <li key="about-exclusive-books"><a href="#">About Exclusive Books</a></li>
          <li key="gift-cards"><a href="#">Gift Cards & Vouchers</a></li>
        </ul>
      </div>

      {/* Customer Services Section */}
      <div className="footer-section">
        <h3>Customer Services</h3>
        <ul>
          <li key="track-order"><a href="#">Track Order</a></li>
          <li key="delivery-information"><a href="#">Delivery Information</a></li>
          <li key="returns"><a href="#">Guarantee & Returns</a></li>
          <li key="banking-details"><a href="#">Banking Details</a></li>
          <li key="corporate-clients"><a href="#">Corporate Clients</a></li>
          <li key="vendor-registrations"><a href="#">Vendor Registrations</a></li>
          <li key="faqs"><a href="#">FAQs</a></li>
        </ul>
      </div>

      {/* Subscription Form Section */}
      <div className="footer-section">
        <h3>Subscribe</h3>
        <p>Get exclusive deals, previews, and updates when you subscribe.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">Your First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            aria-label="Enter your first name"
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Enter your email address"
          />

          <button type="submit">Subscribe</button>
        </form>

        {message && (
          <p className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}

        {/* Social Media Icons */}
        <div className="social-media-box">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter" aria-label="Twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook" aria-label="Facebook"></i>
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-tiktok" aria-label="TikTok"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter" aria-label="X"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
