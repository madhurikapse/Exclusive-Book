import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Wishlist.css";
import Footer from '../components/Footer';
import PaymentFooter from "../components/PaymentFooter"

const WishlistPage = ({ wishlist,setWishlistItems }) => {
  const handleRemoveFromWishlist = (id) => {
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
                <img src={item.image} alt={item.title} className="wishlist-item-image" />
                <div className="wishlist-item-details">
                  <h3>{item.title}</h3> 
                  <p>{item.description}</p>
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
      
      <Footer/>
              <PaymentFooter/>
    </div>
    
  );
};

export default WishlistPage;
