import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  SIGNUP_REQUEST,
  signupSuccess,
  signupFailure,
  SIGNUP_OTP_REQUEST,
  signupOtpSuccess,
  signupOtpFailure,
  LOGIN_OTP_REQUEST,
  loginOtpSuccess,
  loginOtpFailure,
  LOGIN_REQUEST,
  loginSuccess,
  loginFailure,
  LOGOUT,
} from '../action/authActions';

// Mock API base URL (replace with your backend)
const API_BASE_URL = 'https://zs-e-commerce-backend.onrender.com/v1/api';

// Signup API call
function* signupSaga(action) {
  try {
    // Correct payload (fix typo: emial -> email)
    const payload = {
      ...action.payload,
      email: action.payload.emial || action.payload.email, // Handle typo
      isAdmin : true
    };
    const response = yield call(axios.post, `${API_BASE_URL}/signup`, payload);
    if (response?.data) {
      yield put(signupSuccess(response.data));
    } else {
      throw new Error('No user data in response');
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || 'Signup failed';
    yield put(signupFailure(errorMessage));
  }
}


function* signupOtpSaga(action) {
  try {
    // Correct payload (fix typo: emial -> email)
    const payload = {
      ...action.payload,
    };
    const response = yield call(axios.post, `${API_BASE_URL}/signup/verify`, payload);
    if (response?.data) {
      yield put(signupOtpSuccess(response.data));
    } else {
      throw new Error('OTP Not verified');
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || 'Verification failed';
    yield put(signupOtpFailure(errorMessage));
  }
}

// Login API call
function* loginSaga(action) {
  let payload = action.payload?.loginData
  try {
    const response = yield call(axios.post, `${API_BASE_URL}/user/signIn`, payload);
    if(response?.data){
      yield put(loginSuccess(response.data));
      try{
        yield put(loginSuccess(response.data));
      }catch(error){
        yield put(loginFailure(error.response?.data?.message || 'Signup failed'));
      }
    }
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message || 'Login failed'));
  }
}

function* loginOtpSaga(action) {
  try {
    // Correct payload (fix typo: emial -> email)
    const payload = {
      ...action.payload,
    };
    const response = yield call(axios.post, `${API_BASE_URL}/signIn/verify`, payload);
    if (response?.data) {
      yield put(loginOtpSuccess(response.data));
    } else {
      throw new Error('OTP Not verified');
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || 'Verification failed';
    yield put(loginOtpFailure(errorMessage));
  }
}

// Logout API call (optional, if backend requires)
function* logoutSaga() {
  try {
    yield call(axios.post, `${API_BASE_URL}/logout`, {});
    yield put({ type: LOGOUT });
  } catch (error) {
    yield put({ type: LOGOUT }); // Clear state even if API fails
  }
}

function* authSaga() {
  yield takeEvery(SIGNUP_REQUEST, signupSaga);
  yield takeEvery(SIGNUP_OTP_REQUEST,signupOtpSaga);
  yield takeEvery(LOGIN_OTP_REQUEST,loginOtpSaga);
  yield takeEvery(LOGIN_REQUEST, loginSaga);
  yield takeEvery(LOGOUT, logoutSaga);
}

export default authSaga;