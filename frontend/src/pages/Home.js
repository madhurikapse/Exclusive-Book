import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/books') // Replace with real API URL
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the books!", error);
      });
  }, []);

  return (
    <div className="home">
      <h1>Exclusive Books</h1>
      <div className="book-list">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
