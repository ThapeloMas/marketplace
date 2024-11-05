import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails, updateProduct } from '../actions/ProductActions';
import ProductForm from '../components/ProductForm';

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedProduct);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  const handleSubmit = (updatedProduct) => {
    dispatch(updateProduct(id, updatedProduct));
  };

  return (
    <div>
      <h2>Edit Product</h2>
      {product ? (
        <ProductForm product={product} onSubmit={handleSubmit} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditProduct;
