import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../../core/http";

import {
  CREATE_ANSWER_FAILURE,
  CREATE_ANSWER_REQUEST,
  CREATE_ANSWER_SUCCESS
} from "../actions/answers_actions";

const createAnswerApi = (questionId, yourAnswer) => {
  return axios.post(`/answers`, { questionId, body: yourAnswer });
};

function* createAnswer(action) {
  try {
    const { questionId, yourAnswer } = action.payload;
    const data = yield call(createAnswerApi, questionId, yourAnswer);
    yield put({ type: CREATE_ANSWER_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: CREATE_ANSWER_FAILURE, error });
  }
}

export function* watchCreateAnswerRequest() {
  yield takeLatest(CREATE_ANSWER_REQUEST, createAnswer);
}
