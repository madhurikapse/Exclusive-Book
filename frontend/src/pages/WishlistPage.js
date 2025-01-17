import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Wishlist.css";

const WishlistPage = ({ wishlist,setWishlistItems }) => {

  // Function to remove item from wishlist
  const handleRemoveFromWishlist = (id) => {
    // Filtering out the item with the given id and updating the wishlist state
    setWishlistItems((prevWishlist) => prevWishlist.filter(item => item.id !== id));
  };

  return (
    <div className="wishlist-page">
      <h2>Wishlist</h2>
      <div className="wishlist-items">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div className="wishlist-item" key={item.id}>
              <div className="wishlist-item-info">
                {/* Displaying the image */}
                <img src={item.image} alt={item.title} className="wishlist-item-image" />
                <div className="wishlist-item-details">
                  <h3>{item.title}</h3> {/* Change 'name' to 'title' */}
                  <p>{item.description}</p>
                  {/* Remove button */}
                  <button onClick={() => handleRemoveFromWishlist(item.id)}>Remove from Wishlist</button>
                </div>
              </div>
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
