import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/CartActions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product.stock > 0) {
      dispatch(addToCart(product));
    } else {
      alert('This product is out of stock');
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: R{product.price}</p>
      <p>Category: {product.category}</p>
      <button onClick={handleAddToCart} disabled={product.stock <= 0}>
        {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  );
};

export default ProductCard;
