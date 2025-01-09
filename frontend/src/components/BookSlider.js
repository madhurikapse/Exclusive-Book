import React, { useState, useEffect } from "react";
import "../style/BookSlider.css";
import book1 from "../assets/img/book1.jpg";
import book2 from "../assets/img/book2.jpg";
import book3 from "../assets/img/book3.jpg";
import book4 from "../assets/img/book4.jpg";
import book5 from "../assets/img/book5.jpg";
import book6 from "../assets/img/book6.jpg";
import book7 from "../assets/img/book7.jpg";
import book8 from "../assets/img/book8.jpg";
import book9 from "../assets/img/book9.jpg";
import book10 from "../assets/img/book10.jpg";

const books = [
  { id: 1, title: "Book One", image: book1 },
  { id: 2, title: "Book Two", image: book2 },
  { id: 3, title: "Book Three", image: book3 },
  { id: 4, title: "Book Four", image: book4 },
  { id: 5, title: "Book Five", image: book5 },
  { id: 6, title: "Book Six", image: book6 },
  { id: 7, title: "Book Seven", image: book7 },
  { id: 8, title: "Book Eight", image: book8 },
  { id: 9, title: "Book Nine", image: book9 },
  { id: 10, title: "Book Ten", image: book10 },
];

const BookSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === books.length - 3 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // Change slides every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="slider-container">
      <button className="control prev" onClick={handlePrev}>
        &#8249;
      </button>
      <div className="book-slider">
        {books.slice(currentIndex, currentIndex + 3).map((book) => (
          <div key={book.id} className="book">
            <img src={book.image} alt={book.title} />
          </div>
        ))}
      </div>
      <button className="control next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default BookSlider;
