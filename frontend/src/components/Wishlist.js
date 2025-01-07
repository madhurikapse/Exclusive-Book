import React from 'react';

const Wishlist = ({ wishlist }) => {
  return (
    <div className="wishlist-container">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.title} className="wishlist-image" />
            <div>
              <h4>{item.title}</h4>
              <p>Author: {item.author}</p>
              <p>Price: {item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
