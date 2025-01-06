
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Book Store</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <Link to={`/book/${book._id}`}>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
