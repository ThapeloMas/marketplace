import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM,
    CHECKOUT_SUCCESS,
  } from '../actions/Types';
  
  const initialState = {
    items: [],
    totalAmount: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
        if (itemIndex !== -1) {
          const updatedItems = [...state.items];
          updatedItems[itemIndex].quantity += action.payload.quantity;
          return {
            ...state,
            items: updatedItems,
          };
        } else {
          return {
            ...state,
            items: [...state.items, action.payload],
          };
        }
      case REMOVE_FROM_CART:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
      case UPDATE_CART_ITEM:
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      case CHECKOUT_SUCCESS:
        return {
          ...state,
          items: [],
          totalAmount: 0,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  