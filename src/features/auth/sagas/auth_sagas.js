import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";

import axios from "../../../core/http";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  FIND_ME_FAILURE,
  FIND_ME_REQUEST,
  FIND_ME_SUCCESS
} from "../actions/auth_actions";

const signupApi = newUser => {
  return axios.post(`auth/signup`, newUser);
};

const loginApi = user => {
  return axios.post(`/auth/login`, user);
};

const logoutApi = user => {
  return axios.post(`/auth/logout`, user);
};

const findMeApi = () => {
  return axios.get(`/users/me`);
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

function* logoutUser(action) {
  try {
    const data = yield call(logoutApi, action.payload);
    localStorage.removeItem("token");
    yield put({ type: LOGOUT_SUCCESS, payload: data.data });
    yield put(push("/login"));
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, error });
  }
}

function* findMe(action) {
  try {
    const data = yield call(findMeApi);
    yield put({ type: FIND_ME_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: FIND_ME_FAILURE, error });
  }
}

export function* watchFindMeRequest() {
  yield takeLatest(FIND_ME_REQUEST, findMe);
}

export function* watchSignupRequest() {
  yield takeLatest(SIGNUP_REQUEST, signupUser);
}

export function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}

export function* watchLogoutRequest() {
  yield takeLatest(LOGOUT_REQUEST, logoutUser);
}
