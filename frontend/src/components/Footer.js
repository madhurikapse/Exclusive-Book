import React, { useState } from 'react';
import '../style/Footer.css';
import Api from '../axiosconfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      console.log('Payload:', { firstName, email });

      const { data } = await Api.post('/subscribe', {
        firstName,
        email,
      });

      console.log('API Response:', data);

      if (data.success) {
        setMessage('Subscription successful! Please check your email for confirmation.');
        toast.success('Subscription successful! Please check your email for confirmation.');
        setFirstName('');
        setEmail('');
      } else {
        setMessage(data.message || 'Subscription failed. Please try again.');
        toast.error('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during subscription:', error);
      setMessage('Subscription failed. Please check your internet connection or try again later.');
      toast.error('Subscription failed. Please try again later.');
    }
  };

  return (
    <footer className="footer">
      {/* Customer Care Section */}
      <div className="footer-section customer-care">
        <h3>Customer Care</h3>
        <p><strong>Toll-Free SA Only:</strong> 0800 332 550</p>
        <p><strong>International:</strong> +27 (0) 87 365 4677</p>
        <p><strong>Email:</strong> <a href="mailto:anelisabolosha@gmail.com">anelisabolosha@gmail.com</a></p>
        <p><strong>Contact Hours:</strong></p>
        <ul>
          <li>Monday to Friday: 7:30AM - 4:30PM</li>
          <li>Saturday: 8:00AM - 1:00PM</li>
        </ul>
      </div>

      {/* About Us Section */}
      <div className="footer-section">
        <h3>About Us</h3>
        <ul>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/store-locator">Store Locator</a></li>
          <li><a href="/eb-news">EB News</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/rewards-programme">Rewards Programme</a></li>
          <li><a href="/loyalty-programme">Loyalty Programme</a></li>
          <li><a href="/about">About Exclusive Books</a></li>
          <li><a href="/gift-cards">Gift Cards & Vouchers</a></li>
        </ul>
      </div>

      {/* Customer Services Section */}
      <div className="footer-section">
        <h3>Customer Services</h3>
        <ul>
          <li><a href="/track-order">Track Order</a></li>
          <li><a href="/delivery-info">Delivery Information</a></li>
          <li><a href="/returns">Guarantee & Returns</a></li>
          <li><a href="/banking">Banking Details</a></li>
          <li><a href="/corporate-clients">Corporate Clients</a></li>
          <li><a href="/vendor-registration">Vendor Registrations</a></li>
          <li><a href="/faqs">FAQs</a></li>
        </ul>
      </div>

      {/* Subscription Form Section */}
      <div className="footer-section">
        <h3>Contact</h3>
        <p>Get exclusive deals, previews, and updates when you Send Enquiry.</p>

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

          <button type="submit">Send Enquiry</button>
        </form>

        {message && (
          <p className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}

      <div className="social-media-box">
  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
    <i className="fab fa-whatsapp"></i>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
    <i className="fab fa-facebook-f"></i>
  </a>
</div>

      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </footer>
  );
};

export default Footer;
