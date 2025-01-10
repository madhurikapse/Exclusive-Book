import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "../style/BookSlider.css";

const reviews = [
  {
    id: 1,
    title: "Damaged but not destroyed by Mike Todd",
    review: "Perfect. So timely. Literally for anyone to read for any season.",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Satisfied customer",
    review: "Always happy to order from Exclusive - books received on time as always. Thank you.",
    rating: 5,
  },
  {
    id: 3,
    title: "Super book to have with when travelling!",
    review: "A joy to read. Wonderful stories. A nice break from this crazy world at the moment.",
    rating: 4.8,
  },
  {
    id: 4,
    title: "Healing Through Words",
    review: "I bought this for my daughter, she absolutely loves it!",
    rating: 5,
  },
  {
    id: 5,
    title: "Honey Tales Africa",
    review: "These books are full of enchanting poems about Africa, the wildlife, people, and other creatures. Perfect entertainment for little ones. A must read!",
    rating: 4.7,
  },
  {
    id: 6,
    title: "The Scarlet Papers",
    review: "Was given as a gift. Recipient delighted, has thoroughly enjoyed reading it and said he thought it was excellent.",
    rating: 4.6,
  },
];

const TextSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    const endIndex = currentIndex + 3;
    return reviews.slice(currentIndex, endIndex).concat(
      reviews.slice(0, endIndex > reviews.length ? endIndex - reviews.length : 0)
    );
  };

  return (
    <div className="slider-container">
      <h2>What readers have to say</h2>
      <div className="slider">
        {getVisibleReviews().map((review) => (
          <div key={review.id} className="review-box">
            {/* Star Rating for Each Review */}
            <div className="rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  color={index < Math.floor(review.rating) ? "#FFD700" : "#D3D3D3"}
                  size={20}
                />
              ))}
              {/* Fractional Star Handling */}
              {review.rating % 1 !== 0 && (
                <FaStar color="#FFD700" size={20} style={{ clipPath: "inset(0 50% 0 0)" }} />
              )}
            </div>
            <h3>{review.title}</h3>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
