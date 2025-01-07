import React, { useState, useEffect } from 'react';
import '../style/Slider.css';

const Slider = () => {
  const images = [
    'https://exclusivebooks.co.za/cdn/shop/files/RIMS_2025_Web_Banner_48436fb1-167b-4393-9aea-990d6f7dbc06.jpg?pad_color=fff&v=1735682147&width=2900',
    'https://exclusivebooks.co.za/cdn/shop/files/EBR_Jan_Web_Banner.jpg?pad_color=fff&v=1735682243&width=2900',
    'https://exclusivebooks.co.za/cdn/shop/files/Untitled_design_5_ce7272b5-bed3-438e-9f87-f4a232dc93a0.png?pad_color=fff&v=1735682374&width=2900',
    'https://exclusivebooks.co.za/cdn/shop/files/JBP-Pumpkin-Spice-Cafe-EB-5000x426-1.jpg?pad_color=fff&v=1732702712&width=2900',
    'https://exclusivebooks.co.za/cdn/shop/files/Fake_Profiles_Alert_2024-01.jpg?pad_color=fff&v=1727269811&width=2900',
    'https://exclusivebooks.co.za/cdn/shop/files/Jan_2025_Multibuys_Banner_30_dd975ac6-2689-41d7-8819-4403f3e0e8f7.jpg?pad_color=fff&v=1735683081&width=2900',
    'https://exclusivebooks.co.za/cdn/shop/files/Jan_2025_Multibuys_Banner_50_ba00b988-1d85-40f8-87e3-1204e6c6eb77.jpg?pad_color=fff&v=1735683167&width=2900',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage(); // Call nextImage to update the image
    }, 2000); // 2000ms = 2 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="prev" onClick={prevImage}>
          &#10094;
        </button>
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className="slider-image" />
        <button className="next" onClick={nextImage}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
