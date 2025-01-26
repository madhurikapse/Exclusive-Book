import React, { useState } from "react";
import axios from "axios";
import { FaSearch, FaTimes } from "react-icons/fa"; // Import FaTimes for cross icon
import { useNavigate } from "react-router-dom"; // Use this for redirection
import "../style/Navbar2.css";

const Navbar2 = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate(); // Use navigate hook for redirection

  const handleSearch = async () => {
    if (!query.trim()) return alert("Please enter a search term!");

    setIsSearching(true);

    try {
      const response = await axios.post("http://localhost:5000/api/search", {
        query,
      });

      // Navigate to the search results page and pass the results
      navigate("/search-results", {
        state: { results: response.data.results },
      });
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsSearching(false);
    }
  };

  // Function to clear the search query and reset search results
  const clearSearch = () => {
    setQuery(""); // Clears the input field
    navigate("/"); // Navigate to the homepage or the page you want to redirect to after clearing
  };

  return (
    <div className="navbar2 flex items-center justify-between px-4 py-2 shadow">
      {/* Logo */}
      <div className="logo">
        <img src="/path-to-your-logo/logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Search Bar */}
      <div className="search-container flex items-center border rounded p-2 relative">
        <input
          type="text"
          placeholder="Search here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          className="outline-none px-2 w-64"
        />
        
        {/* Search Icon */}
        <FaSearch
          className="cursor-pointer ml-2"
          onClick={handleSearch}
        />

        {/* Clear (Cross) Icon */}
        {query && (
          <FaTimes
            className="cursor-pointer absolute right-2 text-gray-600"
            onClick={clearSearch} // Calls clearSearch on click
          />
        )}
      </div>

      {/* Loading Spinner */}
      {isSearching && <div className="loading">Searching...</div>}
    </div>
  );
};

export default Navbar2;
