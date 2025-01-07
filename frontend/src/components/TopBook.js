import React, { useState } from 'react';
import '../style/TopBook.css';

import book1 from '../assets/img/book1.jpg';
import book2 from '../assets/img/book2.jpg';
import book3 from '../assets/img/book3.jpg';
import book4 from '../assets/img/book4.jpg';
import book5 from '../assets/img/book5.jpg';

const TopBooks = ({ setCartItems }) => {
  const books = [
    { id: 1, image: book1, title: 'Book 1', author: 'Author 1', rating: 4, price: '₹350' },
    { id: 2, image: book2, title: 'Book 2', author: 'Author 2', rating: 5, price: '₹499' },
    { id: 3, image: book3, title: 'Book 3', author: 'Author 3', rating: 4.5, price: '₹299' },
    { id: 4, image: book4, title: 'Book 4', author: 'Author 4', rating: 3.5, price: '₹250' },
    { id: 5, image: book5, title: 'Book 5', author: 'Author 5', rating: 5, price: '₹450' },
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
      <h2 className="section-title">Top Ten Best Sellers</h2>
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

export default TopBooks;
