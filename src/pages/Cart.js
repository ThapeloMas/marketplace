import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItem, checkout } from '../actions/CartActions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateCartItem(id, quantity));
  };

  const handleCheckout = () => {
    dispatch(checkout(cartItems));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: R{total}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;

