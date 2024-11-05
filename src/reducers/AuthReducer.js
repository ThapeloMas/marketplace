
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
  } from '../actions/Types';
  
  const initialState = {
    user: null,
    isAuthenticated: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          error: null,
        };
      case LOGIN_FAIL:
      case REGISTER_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      case LOGOUT:
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  