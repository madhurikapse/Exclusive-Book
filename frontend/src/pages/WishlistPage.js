// src/pages/WishlistPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const WishlistPage = ({ wishlist = [] }) => {
  return (
    <div className="wishlist-page">
      <h2>Wishlist</h2>
      <div className="wishlist-items">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div className="wishlist-item" key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button>Remove from Wishlist</button>
            </div>
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
      <Link to="/cart">
        <button className="go-to-cart-btn">Go to Cart</button>
      </Link>
    </div>
  );
};

export default WishlistPage;
