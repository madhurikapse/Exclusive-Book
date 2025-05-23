import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/TopBook.css';

import book6 from '../assets/img/book6.jpg';
import book7 from '../assets/img/book7.jpg';
import book8 from '../assets/img/book8.jpg';
import book9 from '../assets/img/book9.jpg';
import book10 from '../assets/img/book10.jpg';

const BiographyBestsellers = ({ setCart, setWishlistItems }) => {
  const books = [
    { id: 6, image: book6, title: 'MASHIN ME', author: 'Author 6', rating: 4, price: '₹350', description: 'This is Book 6' },
    { id: 7, image: book7, title: 'ANTONITY MY LIFE', author: 'Author 7', rating: 5, price: '₹499', description: 'This is Book 7' },
    { id: 8, image: book8, title: 'MY MIND', author: 'Author 8', rating: 4.5, price: '₹299', description: 'This is Book 8' },
    { id: 9, image: book9, title: 'MY BODY', author: 'Author 9', rating: 3.5, price: '₹250', description: 'This is Book 9' },
    { id: 10, image: book10, title: 'APECTRUMB', author: 'Author 10', rating: 5, price: '₹450', description: 'This is Book 10' },
  ];

  const navigate = useNavigate();

  const handleBookClick = (book) => {
    // Add book to both wishlist and cart
    setWishlistItems((prevWishlist) => {
      if (!prevWishlist.find((item) => item.id === book.id)) {
        return [...prevWishlist, book];
      }
      return prevWishlist;
    });

    setCart((prevCart) => {
      if (!prevCart.find((item) => item.id === book.id)) {
        return [...prevCart, book];
      }
      return prevCart;
    });

    // Optionally navigate to book details page
    navigate(`/book-details/${book.id}`, { state: book });
  };

  return (
    <div className="top-books-container">
      <h2 className="section-title1">Biography Bestsellers</h2>
      <hr className="section-line" />
      <div className="books-row">
        {books.map((book) => (
          <div
            key={book.id}
            className="book-item"
            onClick={() => handleBookClick(book)} // Add to wishlist, cart, and navigate
          >
            <div className="book-image-container">
              <img src={book.image} alt={book.title} className="book-image" />
              <div className="delivery-badge">4 Day Delivery</div>
            </div>
            <div className="book-details">
              <div className="book-title">{book.title}</div>
              <div className="book-author">by {book.author}</div>
              <div className="book-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < book.rating ? '★' : '☆'}</span>
                ))}
              </div>
              <div className="book-price">{book.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiographyBestsellers;
