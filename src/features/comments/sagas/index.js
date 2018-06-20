import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../../core/http";

import {
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS
} from "../actions";

const createCommentQuestionApi = (id, body) => {
  return axios.post(`/comments`, { questionId: id, body });
};

const createCommentAnswerApi = (id, body) => {
  return axios.post(`/comments`, { answerId: id, body });
};

function* createComment(action) {
  try {
    const { id, body } = action.payload;
    const { answer } = action.meta;
    if (answer) {
      const data = yield call(createCommentAnswerApi, id, body);
      yield put({
        type: CREATE_COMMENT_SUCCESS,
        payload: data.data,
        meta: action.meta
      });
    } else {
      const data = yield call(createCommentQuestionApi, id, body);
      yield put({
        type: CREATE_COMMENT_SUCCESS,
        payload: data.data,
        meta: action.meta
      });
    }
  } catch (error) {
    yield put({ type: CREATE_COMMENT_FAILURE, error });
  }
}

export function* watchCreateComment() {
  yield takeLatest(CREATE_COMMENT_REQUEST, createComment);
}
