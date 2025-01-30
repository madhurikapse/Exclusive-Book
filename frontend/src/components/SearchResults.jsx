import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/SearchResults.css"; // ✅ Import CSS file
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import styles
import "../style/Cart.css"
const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load cart and wishlist from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCart(storedCart);
    setWishlist(storedWishlist);
  }, []);

  // Fetch the results from state or query params
  useEffect(() => {
    if (location.state && location.state.results) {
      setResults(location.state.results);
    }
  }, [location]);

  // Add to Cart and Wishlist Function
  const addToCartAndWishlist = (item) => {
    // Add to Cart
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save in localStorage

    // Add to Wishlist
    const updatedWishlist = [...wishlist, item];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save in localStorage

    // Show toast notification
    toast.success(`${item.title} added to both cart and wishlist!`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  // Navigate to Cart Page
  const goToCart = () => {
    // Ensure latest cart state is updated before navigation
    localStorage.setItem("cart", JSON.stringify(cart)); // Store cart in localStorage before navigating
    navigate("/Cart");
  };

  return (
    <div className="search-results-page">
      <h1 className="title">Search Results</h1>
      {results.length > 0 ? (
        <ul className="results-grid">
          {results.map((item, index) => {
            const imageIndex = (index % 10) + 1;
            const imagePath = `/assets/img/book${imageIndex}.jpg`;

            return (
              <li key={index} className="result-card">
                {/* Book Image */}
                <img
                  src={imagePath}
                  alt={item.title}
                  onError={(e) => (e.target.src = "/assets/placeholder.jpg")}
                  className="book-image"
                  onClick={() => AndWishlist(item)} // Add to cart and wishlist on image click
                />

                <div className="book-info">
                  <h2 className="book-title">{item.title}</h2>
                  <p className="book-author">by {item.author}</p>
                  <p className="book-price">${item.price}</p>
                  <p className="book-description">{item.description}</p>

                  {/* Add to Cart Button */}
                  <button className="add-to-cart-btn" onClick={() => addToCartAndWishlist(item)}>
                    Add to Cart 🛒
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="no-results">No results found</p>
      )}

      {/* Go to Cart Button */}
      <button onClick={goToCart}>Go to Cart</button>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default SearchResults;
