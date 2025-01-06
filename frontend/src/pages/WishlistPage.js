// src/pages/WishlistPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  // Sample wishlist data (replace with real data or state management later)
  const wishlistItems = [
    { id: 1, name: 'Event A', description: 'Exciting corporate event.' },
    { id: 2, name: 'Event B', description: 'Networking event for professionals.' },
    { id: 3, name: 'Event C', description: 'Tech talk and networking.' },
  ];

  return (
    <div className="wishlist-page">
      <h2>Wishlist</h2>
      <div className="wishlist-items">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
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
