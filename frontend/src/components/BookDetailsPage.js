import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`https://api.example.com/books/${id}`) // Replace with real API URL
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the book details!", error);
      });
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <img src={book.imageUrl} alt={book.title} />
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>Price: R{book.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default BookDetailsPage;
