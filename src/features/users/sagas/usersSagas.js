import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../../core/http";

import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  FIND_ME_FAILURE,
  FIND_ME_REQUEST,
  FIND_ME_SUCCESS,
  FIND_USER_BY_USERNAME_FAILURE,
  FIND_USER_BY_USERNAME_REQUEST,
  FIND_USER_BY_USERNAME_SUCCESS
} from "../actions/users_actions";

const getUsersApi = () => {
  return axios.get(`/users`);
};

const findMeApi = () => {
  return axios.get(`/users/me`);
};

const findByUsernameApi = username => {
  return axios.get(`/users/${username}`);
};

function* getUsers() {
  try {
    const data = yield call(getUsersApi);

    yield put({ type: GET_USERS_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_USERS_FAILURE, error });
  }
}

function* findMe() {
  try {
    const data = yield call(findMeApi);

    yield put({ type: FIND_ME_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: FIND_ME_FAILURE, error });
  }
}

function* findByUsername(action) {
  try {
    const { username } = action.payload;
    const data = yield call(findByUsernameApi, username);

    yield put({ type: FIND_USER_BY_USERNAME_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: FIND_USER_BY_USERNAME_FAILURE, error });
  }
}

const saga = function*() {
  yield takeLatest(GET_USERS_REQUEST, getUsers);
  yield takeLatest(FIND_ME_REQUEST, findMe);
  yield takeLatest(FIND_USER_BY_USERNAME_REQUEST, findByUsername);
};

export default saga;
