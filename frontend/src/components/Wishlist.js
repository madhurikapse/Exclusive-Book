import React from 'react';

const Wishlist = ({ wishlist, onCheckout }) => {
  const calculateTotalPrice = () =>
    wishlist.reduce((total, item) => total + item.price,1);

  return (
    <div className="wishlist-container">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div>
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img
                src={item.image}
                alt={item.title}
                className="wishlist-image"
              />
              <div>
                <h4>{item.title}</h4>
                <p>{item.image}</p>
                <p>Author: {item.author}</p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="wishlist-summary">
            <h3>Total Price: ₹{calculateTotalPrice().toFixed(2)}</h3>
            <button
              className="checkout-button"
              onClick={onCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
