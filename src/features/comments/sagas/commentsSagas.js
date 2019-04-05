import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../../core/http";

import {
  CREATE_QUESTION_COMMENT_FAILURE,
  CREATE_QUESTION_COMMENT_REQUEST,
  CREATE_QUESTION_COMMENT_SUCCESS,
  CREATE_ANSWER_COMMENT_FAILURE,
  CREATE_ANSWER_COMMENT_REQUEST,
  CREATE_ANSWER_COMMENT_SUCCESS
} from "../actions/commentsActionTypes";

const createQuestionCommentApi = (questionId, body) => {
  return axios.post(`/questions/${questionId}/comments`, { questionId, body });
};

const createAnswerCommentApi = (answerId, body) => {
  return axios.post(`/answers/${answerId}/comments`, { answerId, body });
};

function* createQuestionComment(action) {
  try {
    const { id, body } = action.payload;
    const data = yield call(createQuestionCommentApi, id, body);

    yield put({
      type: CREATE_QUESTION_COMMENT_SUCCESS,
      payload: data.data
    });
  } catch (error) {
    yield put({ type: CREATE_QUESTION_COMMENT_FAILURE, error });
  }
}

function* createAnswerComment(action) {
  try {
    const { id, body } = action.payload;
    const data = yield call(createAnswerCommentApi, id, body);

    yield put({
      type: CREATE_ANSWER_COMMENT_SUCCESS,
      payload: data.data
    });
  } catch (error) {
    yield put({ type: CREATE_ANSWER_COMMENT_FAILURE, error });
  }
}

export function* watchCreateQuestionComment() {
  yield takeLatest(CREATE_QUESTION_COMMENT_REQUEST, createQuestionComment);
}

export function* watchCreateAnswerComment() {
  yield takeLatest(CREATE_ANSWER_COMMENT_REQUEST, createAnswerComment);
}
