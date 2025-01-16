import React, { useState, useEffect } from "react";
import "../style/Footer.css";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [expandedSection, setExpandedSection] = useState(null);

  // Check for screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const footerSections = [
    {
      title: "CUSTOMER CARE",
      content: (
        <>
          <p>TOLL FREE SA ONLY: 0800 332 550</p>
          <p>INTERNATIONAL: +27 (0) 87 365 4677</p>
          <p>EMAIL: info@exclusivebooks.co.za</p>
          <p>CONTACT HOURS:</p>
          <p>Monday to Friday: 7:30AM - 16:30PM</p>
          <p>Saturday: 8:00AM - 13:00PM</p>
        </>
      ),
    },
    {
      title: "ABOUT US",
      content: (
        <ul>
          <li>Contact Us</li>
          <li>Store Locator</li>
          <li>EB News</li>
          <li>Events</li>
          <li>Rewards Programme</li>
          <li>Loyalty Programme</li>
          <li>About Exclusive Books</li>
          <li>Gift Cards & Vouchers</li>
          <li>Help</li>
          <li>Rewards Partners</li>
          <li>Cookie Policy</li>
          <li>T's and C's</li>
          <li>Privacy Policy</li>
          <li>POPIA Compliance</li>
          <li>Sitemap</li>
        </ul>
      ),
    },
    {
      title: "CUSTOMER SERVICES",
      content: (
        <ul>
          <li>Track Order</li>
          <li>Delivery Information</li>
          <li>Guarantee & Returns</li>
          <li>Banking Details</li>
          <li>Corporate Clients</li>
          <li>Vendor Registrations</li>
          <li>Corporate Registration</li>
          <li>FAQs</li>
        </ul>
      ),
    },
    {
      title: "SUBSCRIBE",
      content: (
        <form>
          <p>Get exclusive deals, previews, and updates when you subscribe.</p>
          <input
            type="text"
            placeholder="Your First Name"
            className="footer-input"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="footer-input"
          />
          <button type="submit" className="footer-button">
            Subscribe
          </button>
        </form>
      ),
    },
  ];

  return (
    <footer className="footer">
      {footerSections.map((section, index) => {
        const isSubscribe = section.title === "SUBSCRIBE";

        return (
          <div
            key={index}
            className={`footer-section ${
              expandedSection === index ? "expanded" : ""
            }`}
          >
            <h2
              onClick={
                isMobile && !isSubscribe
                  ? () => toggleSection(index)
                  : null
              }
            >
              {section.title}
              {isMobile && !isSubscribe && (
                <span className="arrow">
                  {expandedSection === index ? "▲" : "▼"}
                </span>
              )}
            </h2>
            <div
              className={`footer-content ${
                expandedSection === index || !isMobile ? "visible" : ""
              }`}
            >
              {section.content}
            </div>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
