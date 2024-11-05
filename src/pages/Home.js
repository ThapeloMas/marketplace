import React from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div>
      <SearchBar />
      <ProductList />
    </div>
  );
};

export default Home;
