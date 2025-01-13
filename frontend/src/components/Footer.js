import React from 'react';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
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
          <li>Monday to Friday: 7:30AM - 4:30PM</li>
          <li>Saturday: 8:00AM - 1:00PM</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>About Us</h3>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Store Locator</a></li>
          <li><a href="#">EB News</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Rewards Programme</a></li>
          <li><a href="#">Loyalty Programme</a></li>
          <li><a href="#">About Exclusive Books</a></li>
          <li><a href="#">Gift Cards & Vouchers</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Customer Services</h3>
        <ul>
          <li><a href="#">Track Order</a></li>
          <li><a href="#">Delivery Information</a></li>
          <li><a href="#">Guarantee & Returns</a></li>
          <li><a href="#">Banking Details</a></li>
          <li><a href="#">Corporate Clients</a></li>
          <li><a href="#">Vendor Registrations</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Subscribe</h3>
        <p>Get exclusive deals, previews, and updates when you subscribe.</p>
        <form action="#" method="post">
          <label htmlFor="first-name">Your First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="First Name"
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
          />
          <button type="submit">Subscribe</button>
        </form>

        {/* Social media icons */}
        <div className="social-media-box">
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-x"></i></a>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
