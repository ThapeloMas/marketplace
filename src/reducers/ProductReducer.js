import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  FILTER_PRODUCTS,
  SORT_PRODUCTS,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAIL,
} from '../actions/Types';

const initialState = {
  products: [],
  selectedProduct: null,
  error: null,
  filteredProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case FETCH_PRODUCTS_FAIL:
    case ADD_PRODUCT_FAIL:
    case UPDATE_PRODUCT_FAIL:
    case DELETE_PRODUCT_FAIL:
    case FETCH_PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };
    case FETCH_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter((product) =>
          product.category === action.payload || action.payload === 'All'
        ),
      };
    case SORT_PRODUCTS:
      const sortedProducts = [...state.filteredProducts].sort((a, b) => {
        return action.payload === 'asc' ? a.price - b.price : b.price - a.price;
      });
      return {
        ...state,
        filteredProducts: sortedProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
