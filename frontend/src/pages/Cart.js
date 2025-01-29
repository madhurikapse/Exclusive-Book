import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart }) => {
  const [cartItems, setCartItems] = useState(cart);
  const navigate = useNavigate();

  // Calculate Total Price
  const calculateTotalPrice = () => {
    if (!cartItems || cartItems.length === 0) {
      return 0;
    }

    // Calculate the total price
    const total = cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);

      // Log the price for each item for debugging
      console.log(`Item: ${item.title}, Price: ${itemPrice}`);

      // If price is not a valid number, return 0 for that item
      if (isNaN(itemPrice)) {
        console.error(`Invalid price for item: ${item.title}`);
        return total;
      }

      return total + itemPrice;
    }, 0);

    // Return the total or 0 if total is NaN
    return total;
  };

  // Handle Checkout Navigation
  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    navigate('/checkout');
  };

  // Handle Payment Navigation
  const handlePayment = () => {
    alert('Redirecting to payment...');
    navigate('/payment');
  };

  // Remove Item from Cart
  const removeItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  useEffect(() => {
    // Log the cart items whenever the cart is updated
    console.log('Updated Cart:', cartItems);
  }, [cartItems]);

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
              {/* Displaying the image of the book */}
              <img
                src={item.image} // Make sure 'image' property is available in your cart items
                alt={item.title}
                style={{ width: '50px', height: '75px', marginRight: '15px' }}
              />
              <div>
                <h3>{item.title}</h3>
                <p>Author: {item.author}</p>
                <p>Price: ₹{item.price}</p>
                <button onClick={() => removeItem(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div style={{ marginTop: '20px' }}>
        <h2>Total: ₹{totalPrice && totalPrice !== NaN ? totalPrice.toFixed(2) : '0.00'}</h2>
        {cartItems.length > 0 && (
          <div>
            <button onClick={handleCheckout}>Checkout</button>
            <button onClick={handlePayment}>Proceed to Payment</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
