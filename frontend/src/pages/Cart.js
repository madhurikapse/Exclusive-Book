import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Cart = ({ cart }) => {
  const [cartItems, setCartItems] = useState(cart);
  const navigate = useNavigate();  // Initialize navigate hook

  const cartStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  };

  const headingStyles = {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const cartItemStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const cartItemImageStyles = {
    width: '80px',
    height: '120px',
    objectFit: 'cover',
    marginRight: '15px',
    borderRadius: '5px',
  };

  const cartItemDetailsStyles = {
    flexGrow: 1,
  };

  const cartItemTitleStyles = {
    fontSize: '18px',
    margin: '0',
  };

  const cartItemAuthorStyles = {
    fontSize: '16px',
    margin: '5px 0',
    color: '#555',
  };

  const cartItemPriceStyles = {
    fontSize: '16px',
    marginTop: '5px',
    color: '#333',
  };

  const cartItemDescriptionStyles = {
    fontSize: '14px',
    marginTop: '10px',
    color: '#777',
  };

  const buttonStyles = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
    marginRight: '10px',
  };

  const buttonHoverStyles = {
    backgroundColor: '#0056b3',
  };

  // Remove item from cart
  const removeItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  // Go to cart functionality
  const goToCart = () => {
    navigate('/'); // Navigate to cart page
  };

  return (
    <div className="cart1" style={cartStyles}>
      <h1 style={headingStyles}>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item" style={cartItemStyles}>
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
                style={cartItemImageStyles}
              />
              <div className="cart-item-details" style={cartItemDetailsStyles}>
                <h3 style={cartItemTitleStyles}>{item.title}</h3>
                <h3 style={cartItemAuthorStyles}>{item.author}</h3>
                <p style={cartItemPriceStyles}>₹{item.price}</p>
                <p style={cartItemDescriptionStyles}>{item.description}</p>
                <button
                  style={buttonStyles}
                  onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor}
                  onMouseOut={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor}
                  onClick={() => removeItem(index)}  // Remove button functionality
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button 
        style={buttonStyles}
        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor}
        onClick={goToCart}  // Go to cart button functionality
      >
        Go to Cart
      </button>
    </div>
  );
};

export default Cart;
