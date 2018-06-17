import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../../core/http";

import {
  CREATE_ANSWER_FAILURE,
  CREATE_ANSWER_REQUEST,
  CREATE_ANSWER_SUCCESS,
  CREATE_UPVOTE_ANSWER_REQUEST,
  CREATE_UPVOTE_ANSWER_SUCCESS,
  CREATE_UPVOTE_ANSWER_FAILURE
} from "../actions/answers_actions";

const createAnswerApi = (questionId, yourAnswer) => {
  return axios.post(`/answers`, { questionId, body: yourAnswer });
};

const createUpvoteAnswerApi = (questionId, answerId) => {
  return axios.post(`/questions/${questionId}/answers/${answerId}/upvotes`, {
    questionId,
    answerId
  });
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

function* createUpvoteAnswer(action) {
  try {
    const { questionId, answerId } = action.payload;
    const data = yield call(createUpvoteAnswerApi, questionId, answerId);
    yield put({ type: CREATE_UPVOTE_ANSWER_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: CREATE_UPVOTE_ANSWER_FAILURE, error });
  }
}

export function* watchCreateAnswerRequest() {
  yield takeLatest(CREATE_ANSWER_REQUEST, createAnswer);
}

export function* watchUpvoteAnswer() {
  yield takeLatest(CREATE_UPVOTE_ANSWER_REQUEST, createUpvoteAnswer);
}
