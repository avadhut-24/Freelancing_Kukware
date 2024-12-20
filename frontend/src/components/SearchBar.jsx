import React from 'react';
import './SearchBar.css'
import search from '../assets/search.png'

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-bar">
    <span className="search-icon"><img src={search} alt=''/></span>
    <input
    type="text" 
    placeholder="Search for Product" 
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    />

</div>
  );
}

export default SearchBar;

