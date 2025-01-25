import React, { useState } from 'react';
import axios from 'axios';
import '../style/Navbar2.css';
import { FaSearch } from 'react-icons/fa';
import CompanyLogo1 from '../components/CompanyLogo1.jpg'; // Adjust the path if necessary
import Api from '../AxiosConfig';

const Navbar2 = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = async () => {
        if (!query.trim()) {
            console.error('Search term is empty');
            return;
        }
    
        setIsSearching(true);
        console.log('Sending search query:', query);
        try {
            const response = await Api.post('/product/search', {
                searchedWord: query,
            });
            console.log('API Response:', response.data);
            setResults(response.data.products || []);
        } catch (error) {
            console.error('Search failed:', error.response?.data || error.message);
        } finally {
            setIsSearching(false);
        }
    };
    
    
       
         
    return (
        <div className="navbar2">
            <a href="#" className="logo">
                <img src={CompanyLogo1} alt="Company Logo" />
            </a>
            <div className="search-container">
                <FaSearch className="search-icon" onClick={handleSearch} />
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') handleSearch();
                    }}
                />
            </div>
            {results.length > 0 && (
                <div className="search-results">
                    <ul>
                        {results.map((result) => (
                            <li key={result._id}>{result.name}</li>
                        ))}
                    </ul>
                </div>
            )}
            {isSearching && <div className="search-loading">Searching...</div>}
        </div>
    );
};

export default Navbar2;
