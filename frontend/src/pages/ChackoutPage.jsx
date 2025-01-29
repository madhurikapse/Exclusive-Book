import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = ({ cartItems, totalPrice }) => {
  const navigate = useNavigate();

  const handlePaymentRedirect = () => {
    // Navigate to the payment page
    navigate('/payment');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h3>Order Summary</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '15px' }}>
                <h4>{item.title}</h4>
                <p>Author: {item.author}</p>
                <p>Price: ₹{item.price}</p>
              </li>
            ))}
          </ul>
          <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
          <button
            onClick={handlePaymentRedirect}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
