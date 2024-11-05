import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products } = useSelector((state) => state.product);
  const [sortOption, setSortOption] = useState('asc');
  const [filterCategory, setFilterCategory] = useState('');

  const sortedProducts = [...products].sort((a, b) =>
    sortOption === 'asc' ? a.price - b.price : b.price - a.price
  );

  const filteredProducts = sortedProducts.filter((product) =>
    filterCategory ? product.category === filterCategory : true
  );

  return (
    <div>
      <div className="filter-sort">
        <select onChange={(e) => setFilterCategory(e.target.value)} value={filterCategory}>
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="books">Books</option>
        </select>

        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
