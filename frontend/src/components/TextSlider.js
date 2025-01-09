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
    title: "The Scarlet Papers",
    review: "Was given as a gift. Recipient delighted, has thoroughly enjoyed reading it and said he thought it was excellent.",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Healing Through Words",
    review: "I bought this for my daughter, she absolutely loves it!",
    rating: 5,
  },
  {
    id: 6,
    title: "Honey Tales Africa",
    review: "These books are full of enchanting poems about Africa, the wildlife, people, and other creatures. Perfect entertainment for little ones. A must read!",
    rating: 4.7,
  },
  {
    id: 7,
    title: "The Women",
    review: "An emotional rollercoaster that plunges readers into the harrowing realities of the Vietnam War. A beautifully tragic and mesmerizing tribute to the women who served, leaving an undeniable mark on history.",
    rating: 5,
  },
  {
    id: 8,
    title: "The Antique Hunter’s Guide to Murder",
    review: "The story unfolds in a picturesque English village, where unexpected murder mysteries await. A charming mystery, perfect for those who enjoy old-school sleuths.",
    rating: 4.2,
  },
];

const BookSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Calculate the average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="main-container">
      {/* Centered content */}
      <div className="center-row">
        {/* Left side constant text with star rating */}
        <div className="left-side">
          <h2>What readers have to say</h2>
          <div className="rating">
            {/* Displaying average rating */}
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                color={index < averageRating ? "#FFD700" : "#D3D3D3"}
                size={20}
              />
            ))}
          </div>
          <span>{reviews.length} reviews</span>
        </div>

        {/* Centered reviews slider */}
        <div className="slider-container">
          <div className="book-slider">
            {reviews.slice(currentIndex, currentIndex + 3).map((review) => (
              <div key={review.id} className="review-box">
                <div className="review">
                  {/* Star Rating for each review */}
                  <div className="rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar
                        key={index}
                        color={index < review.rating ? "#FFD700" : "#D3D3D3"}
                        size={20}
                      />
                    ))}
                  </div>
                  <h3>{review.title}</h3>
                  <p>{review.review}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="control next" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookSlider;
