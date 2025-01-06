import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.imageUrl} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>R{book.price}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
