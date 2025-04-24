import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    CHECK_AUTH,
    SIGNUP_OTP_SUCCESS,
    SIGNUP_OTP_FAILURE,
    LOGIN_OTP_SUCCESS,
    LOGIN_OTP_FAILURE
    } from '../action/authActions';
  
  const initialState = {
    user: null, // { id, email, name }
    token: null, // JWT token
    isAuthenticated: false,
    error: null,
    userOtpVerify:null,
    isLoading: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_SUCCESS:
        return {
          ...state,
          user: action.payload,
          error: null,
        };
      case SIGNUP_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
        case SIGNUP_OTP_SUCCESS:
          return {
            ...state,
            userOtpVerify: action.payload,
            error: null,
          };
        case SIGNUP_OTP_FAILURE:
          return {
            ...state,
            error: action.payload,
          };
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          error: null,
          isLoading: true,
          
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      case LOGOUT:
        localStorage.removeItem('token'); // Clear token
        return {
          ...state,
          user: null,
          token: null,
          isAuthenticated: false,
          error: null,
          isLoading: false,
        };
        case LOGIN_OTP_SUCCESS:
          localStorage.setItem('token', action.payload.token); // Store token
          return {
            ...state,
          user: action.payload.user,
          token: action.payload.token,
          isAuthenticated: true,
          error: null,
          };
        case LOGIN_OTP_FAILURE:
          localStorage.removeItem('token'); // Clear token
          return {
            ...state,
          user: null,
          token: null,
          isAuthenticated: false,
            error: action.payload,
          };
      
        case CHECK_AUTH:
        const token = localStorage.getItem('token');
        return {
          ...state,
          token,
          isAuthenticated: !!token, // True if token exists
        };
      default:
        return state;
    }
  };
  
  export default authReducer;