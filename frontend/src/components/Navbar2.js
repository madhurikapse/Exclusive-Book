import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import "../style/Navbar2.css"
const Navbar2 = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return alert("Please enter a search term!");

    setIsSearching(true);

    try {
      const response = await axios.post("http://localhost:5000/api/search", {
        query,
      });
      setResults(response.data.results);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="navbar flex items-center justify-between px-4 py-2 shadow">
      {/* Logo */}
      <div className="logo">
        <img src="/path-to-your-logo/logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Search Bar */}
      <div className="search-container flex items-center border rounded p-2">
        <input
          type="text"
          placeholder="Search here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          className="outline-none px-2 w-64"
        />
        <FaSearch className="cursor-pointer ml-2" onClick={handleSearch} />
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="search-results absolute top-12 bg-white shadow rounded w-96">
          <ul>
            {results.map((item, index) => (
              <li key={index} className="p-2 border-b hover:bg-gray-100">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isSearching && <div className="loading">Searching...</div>}
    </div>
  );
};

export default Navbar2;
