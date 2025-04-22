export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const CHECK_AUTH = 'CHECK_AUTH';

export const signupRequest = (userData) => ({
  type: SIGNUP_REQUEST,
  payload: userData, // { email, password, name }
});

export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user, // { id, email, name }
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials, // { email, password }
});

export const loginSuccess = (user, token) => ({
  type: LOGIN_SUCCESS,
  payload: { user, token }, // { user: { id, email, name }, token }
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const checkAuth = () => ({
  type: CHECK_AUTH,
});