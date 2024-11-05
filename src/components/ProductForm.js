import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/ProductActions';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price, category, stock, image };
    dispatch(addProduct(newProduct));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
      <input type="file" onChange={handleImageUpload} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
