import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/TopBook.css';

import book2 from '../assets/img/book2.jpg';
import Child1 from '../assets/img/Child1.jpg';
import Child2 from '../assets/img/Child2.jpg';
import Child3 from '../assets/img/Child3.jpg';
import Child4 from '../assets/img/Child4.jpg';

const ChildrenBestsellers = ({ setCartItems }) => {
  const books = [
    { id: 1, image: book2, title: 'Book 2', author: 'Author 2', rating: 4, price: '₹350', description: 'This is Book 2.' },
    { id: 2, image: Child1, title: 'Child 2', author: 'Author 7', rating: 5, price: '₹499', description: 'This is Child 2.' },
    { id: 3, image: Child2, title: 'Child 3', author: 'Author 8', rating: 4.5, price: '₹299', description: 'This is Child 3.' },
    { id: 4, image: Child3, title: 'Child 4', author: 'Author 9', rating: 3.5, price: '₹250', description: 'This is Child 4.' },
    { id: 5, image: Child4, title: 'Child 5', author: 'Author 10', rating: 5, price: '₹450', description: 'This is Child 5.' },
  ];

  const navigate = useNavigate();

  const handleBookClick = (book) => {
    navigate(`/book-details/${book.id}`, { state: book });
  };

  const handleAddToCart = (book, event) => {
    event.stopPropagation(); // Prevent navigation when clicking the heart icon
    setCartItems((prevCart) => {
      if (!prevCart.find((item) => item.id === book.id)) {
        return [...prevCart, book];
      }
      return prevCart;
    });
  };

  return (
    <div className="top-books-container">
      <h2 className="section-title2">Children Bestsellers</h2>
      <hr className="section-line" />
      <div className="books-row">
        {books.map((book) => (
          <div
            key={book.id}
            className="book-item"
            onClick={() => handleBookClick(book)} // Navigate to book details
          >
            <div className="book-image-container">
              <img src={book.image} alt={book.title} className="book-image" />
              <div
                className="heart"
                onClick={(e) => handleAddToCart(book, e)}
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

export default ChildrenBestsellers;
