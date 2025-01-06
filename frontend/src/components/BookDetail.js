
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BookDetail() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => console.log(error));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <img src={book.imageUrl} alt={book.title} />
      <p>{book.description}</p>
      <p>Price: ${book.price}</p>
    </div>
  );
}

export default BookDetail;
