import React, { useState } from "react";
import axios from "axios";
import { FaSearch, FaTimes } from "react-icons/fa"; // Import FaSearch and FaTimes icons
import { useNavigate } from "react-router-dom"; // Navigation for redirection
import "../style/Navbar2.css";

const Navbar2 = () => {
  const [query, setQuery] = useState(""); // Holds the search query
  const [isSearching, setIsSearching] = useState(false); // Loading state for search
  const navigate = useNavigate(); // For redirection

  const handleSearch = async () => {
    if (!query.trim()) {
      alert("Please enter a search term!"); // Alerts user if the query is empty
      return;
    }

    setIsSearching(true); // Sets loading state to true

    try {
      const response = await axios.post("http://localhost:5000/api/search", {
        query,
      });

      // Redirect to the search results page and pass search results as state
      navigate("/search-results", {
        state: { results: response.data.results },
      });
    } catch (error) {
      console.error("Search failed:", error); // Logs errors to the console
      alert("An error occurred while searching. Please try again later.");
    } finally {
      setIsSearching(false); // Resets loading state
    }
  };

  const clearSearch = () => {
    setQuery(""); // Clears the search input
    navigate("/"); // Redirects to the homepage or default page
  };

  return (
    <div className="navbar2 flex items-center justify-between px-4 py-2 shadow">
      {/* Logo Section */}
      <div className="logo">
        <img src="/CompanyLogo1.png" alt="Logo" className="h-10" />
      </div>

      {/* Search Bar Section */}
      <div className="search-container flex items-center border rounded p-2 relative">
        <input
          type="text"
          placeholder="Search here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()} // Trigger search on "Enter"
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
            onClick={clearSearch}
          />
        )}
      </div>

      {/* Loading Spinner */}
      {isSearching && <div className="loading">Searching...</div>}
    </div>
  );
};

export default Navbar2;
