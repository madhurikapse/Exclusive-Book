import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        <ul>
          {cart.map((book, index) => (
            <li key={index}>
              {book.title} - R{book.price}
            </li>
          ))}
        </ul>
      )}
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
