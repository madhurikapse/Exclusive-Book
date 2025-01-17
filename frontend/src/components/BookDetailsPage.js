import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/BookDetail.css';

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state;

  if (!book) {
    return <p>No book details available.</p>;
  }

  return (
    <div className="book-details-page">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>
      <div className="book-details-container">
        <img src={book.image} alt={book.title} className="book-details-image" />
        <div className="book-details-info">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Price:</strong> {book.price}</p>
          <p><strong>Rating:</strong> {[...Array(5)].map((_, i) => (
            <span key={i}>{i < book.rating ? '★' : '☆'}</span>
          ))}</p>
          <p><strong>Description:</strong> {book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
