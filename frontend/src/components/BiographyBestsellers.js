import React, { useState } from 'react';
import '../style/TopBook.css';

import book6 from '../assets/img/book6.jpg';
import book7 from '../assets/img/book7.jpg';
import book8 from '../assets/img/book8.jpg';
import book9 from '../assets/img/book9.jpg';
import book10 from '../assets/img/book10.jpg';

const BiographyBestsellers = ({ setCartItems }) => {
  const books = [
    { id: 6, image: book6, title: 'Book 6', author: 'Author 6', rating: 4, price: '₹350' },
    { id: 2, image: book7, title: 'Book 7', author: 'Author 7', rating: 5, price: '₹499' },
    { id: 3, image: book8, title: 'Book 8', author: 'Author 8', rating: 4.5, price: '₹299' },
    { id: 4, image: book9, title: 'Book 9', author: 'Author 9', rating: 3.5, price: '₹250' },
    { id: 5, image: book10, title: 'Book 10', author: 'Author 10', rating: 5, price: '₹450' },
  ];

  
  const handleAddToCart = (book) => {
    setCartItems((prevCart) => {
      if (!prevCart.find((item) => item.id === book.id)) {
        return [...prevCart, book];
      }
      return prevCart;
    });
  };
  
  return (
    <div className="top-books-container">
      <h2 className="section-title2">Biography  Bestsellers</h2>
      <hr className="section-line" />
      <div className="books-row">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <div className="book-image-container">
              <img src={book.image} alt={book.title} className="book-image" />
              <div
                className="heart"
                onClick={() => handleAddToCart(book)}
              >
                ❤️
              </div>
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
