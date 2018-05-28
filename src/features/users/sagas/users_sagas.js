import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../../state/axios";

import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS
} from "../actions/users_actions";

const getUsersApi = () => {
  return axios.get(`/users`);
};

function* getUsers() {
  try {
    const data = yield call(getUsersApi);
    yield put({ type: GET_USERS_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_USERS_FAILURE, error });
  }
}

export function* watchGetUsers() {
  yield takeLatest(GET_USERS_REQUEST, getUsers);
}
