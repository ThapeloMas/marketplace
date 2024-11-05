import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/ProductActions';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchProducts(query)); // Adjust this based on your backend API
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
