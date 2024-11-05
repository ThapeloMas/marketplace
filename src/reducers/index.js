import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import productReducer from './ProductReducer';
import cartReducer from './CartReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
