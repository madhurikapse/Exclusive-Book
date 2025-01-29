import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);

  // Fetch the results from state or query params
  useEffect(() => {
    if (location.state && location.state.results) {
      setResults(location.state.results);
    }
  }, [location]);

  return (
    <div className="search-results-page p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {results.length > 0 ? (
        <ul className="space-y-6">
          {results.map((item, index) => {
            // Ensure you don’t exceed the 10 available images
            const imageIndex = (index % 10) + 1;  // This ensures images repeat if there are more than 10 results
            const imagePath = `../assets/img/book${imageIndex}.jpg`; // Image path for debugging
            return (
              <li
                key={index}
                className="p-4 border rounded shadow hover:bg-gray-100 flex flex-col md:flex-row items-center md:space-x-6"
              >
                {/* Book Image */}
                <img
                  src={imagePath} // Correct image path for book1, book2, book3, etc.
                  alt={item.title}
                  onError={(e) => e.target.src = "/img/placeholder.jpg"} // Fallback image
                  className="h-32 w-24 object-cover mb-4 md:mb-0 md:h-40 md:w-28 rounded-md"
                />

                <div className="flex-1">
                  {/* Book Title */}
                  <h2 className="text-xl font-semibold">{item.title}</h2>

                  {/* Author */}
                  <p className="text-md text-gray-600">by {item.author}</p>

                  {/* Price */}
                  <p className="text-lg text-green-600 font-bold">{`$${item.price}`}</p>

                  {/* Description */}
                  <p className="text-sm text-gray-700 mt-2">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-lg text-gray-500">No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
