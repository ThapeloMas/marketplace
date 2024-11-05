import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../actions/ProductActions';
import { addToCart } from '../actions/CartActions';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedProduct);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (product.stock > 0) {
      dispatch(addToCart(product));
    } else {
      alert('This product is out of stock');
    }
  };

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>Price: R{product.price}</p>
          <p>Category: {product.category}</p>
          <p>{product.description}</p>
          <button onClick={handleAddToCart} disabled={product.stock <= 0}>
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
