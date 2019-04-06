import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../../core/http";

import {
  CREATE_ANSWER_FAILURE,
  CREATE_ANSWER_REQUEST,
  CREATE_ANSWER_SUCCESS,
  CREATE_UPVOTE_ANSWER_REQUEST,
  CREATE_UPVOTE_ANSWER_SUCCESS,
  CREATE_UPVOTE_ANSWER_FAILURE
} from "../actions/answersActionTypes";

const createAnswerApi = (questionId, body) => {
  return axios.post(`/answers`, { questionId, body });
};

const createUpvoteAnswerApi = (questionId, answerId) => {
  return axios.post(`/questions/${questionId}/answers/${answerId}/upvotes`, {
    questionId,
    answerId
  });
};

function* createAnswer(action) {
  const { setSubmitting } = action.meta;
  const { resetForm } = action.meta;

  try {
    const { questionId, body } = action.payload;
    const data = yield call(createAnswerApi, questionId, body);

    resetForm();
    setSubmitting(false);
    yield put({ type: CREATE_ANSWER_SUCCESS, payload: data.data });
  } catch (error) {
    resetForm();
    setSubmitting(false);
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

const saga = function*() {
  yield takeLatest(CREATE_ANSWER_REQUEST, createAnswer);
  yield takeLatest(CREATE_UPVOTE_ANSWER_REQUEST, createUpvoteAnswer);
};

export default saga;
