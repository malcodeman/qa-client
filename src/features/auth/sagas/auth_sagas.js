import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/authActionTypes";

const signupApi = newUser => {
  return axios.post(`auth/signup`, newUser);
};

const loginApi = user => {
  return axios.post(`/auth/login`, user);
};

function* signupUser(action) {
  try {
    const data = yield call(signupApi, action.payload);

    localStorage.setItem("token", data.data.token);
    yield put({ type: SIGNUP_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: SIGNUP_FAILURE, error });
  }
}

function* loginUser(action) {
  try {
    const data = yield call(loginApi, action.payload);

    localStorage.setItem("token", data.data.token);
    yield put({ type: LOGIN_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, error });
  }
}

export function* watchSignupRequest() {
  yield takeLatest(SIGNUP_REQUEST, signupUser);
}

export function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}
