import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/Cart.css"
const Cart = ({ cart }) => {
  const [cartItems, setCartItems] = useState(cart || []);
  const navigate = useNavigate();

  // Calculate Total Price
  const calculateTotalPrice = () => {
    if (!cartItems || cartItems.length === 0) {
      return 0;
    }

    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price) || 0; // Ensure price is a valid number
      return total + itemPrice;
    }, 0);
  };

  useEffect(() => {
    setCartItems(cart || []); // Update cart items if cart changes
  }, [cart]);

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    navigate('/checkout');
  };

  const handlePayment = () => {
    alert('Redirecting to payment...');
    navigate('/payment');
  };

  const removeItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '50px', height: '75px', marginRight: '15px' }}
              />
              <div>
                <h3>{item.title}</h3>
                <p>Author: {item.author}</p>
                <p>Price: ₹{parseFloat(item.price).toFixed(2)}</p>
                <button onClick={() => removeItem(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div style={{ marginTop: '20px' }}>
        <h2>Total: ₹{totalPrice.toFixed(2)}</h2>
        {cartItems.length > 0 && (
          <div className='flex'>
            <button onClick={handleCheckout}>Checkout</button>
            <button onClick={handlePayment}>Proceed to Payment</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
