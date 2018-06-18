import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../../core/http";

import {
  GET_QUESTIONS_FAILURE,
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  CREATE_QUESTION_FAILURE,
  CREATE_QUESTION_REQUEST,
  CREATE_QUESTION_SUCCESS,
  FIND_QUESTION_BY_ID_FAILURE,
  FIND_QUESTION_BY_ID_REQUEST,
  FIND_QUESTION_BY_ID_SUCCESS,
  CREATE_UPVOTE_FAILURE,
  CREATE_UPVOTE_REQUEST,
  CREATE_UPVOTE_SUCCESS,
  DESTROY_UPVOTE_FAILURE,
  DESTROY_UPVOTE_REQUEST,
  DESTROY_UPVOTE_SUCCESS
} from "../actions/questions_actions";

const getQuestionsApi = () => {
  return axios.get(`/questions`);
};

const createQuestionApi = newQuestion => {
  return axios.post(`/questions`, newQuestion);
};

const findQuestionByIdApi = id => {
  return axios.get(`/questions/${id}`);
};

const createUpvoteApi = id => {
  return axios.post(`/upvotes`, { questionId: id });
};

const createUpvoteAnswerApi = id => {
  return axios.post(`/upvotes`, { answerId: id });
};

const destroyUpvoteApi = id => {
  return axios.delete(`/upvotes/${id}`);
};

function* getQuestions() {
  try {
    const data = yield call(getQuestionsApi);
    yield put({ type: GET_QUESTIONS_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_QUESTIONS_FAILURE, error });
  }
}

function* createQuestion(action) {
  try {
    const data = yield call(createQuestionApi, action.payload);
    yield put({ type: CREATE_QUESTION_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: CREATE_QUESTION_FAILURE, error });
  }
}

function* findQuestionById(action) {
  try {
    const { id } = action.payload;
    const data = yield call(findQuestionByIdApi, id);
    yield put({ type: FIND_QUESTION_BY_ID_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: FIND_QUESTION_BY_ID_FAILURE, error });
  }
}

function* createUpvote(action) {
  try {
    const { id } = action.payload;
    const { answer } = action.meta;
    if (answer) {
      const data = yield call(createUpvoteAnswerApi, id);
      yield put({
        type: CREATE_UPVOTE_SUCCESS,
        payload: data.data,
        meta: action.meta
      });
    } else {
      const data = yield call(createUpvoteApi, id);
      yield put({
        type: CREATE_UPVOTE_SUCCESS,
        payload: data.data,
        meta: action.meta
      });
    }
  } catch (error) {
    yield put({ type: CREATE_UPVOTE_FAILURE, error });
  }
}

function* destroyUpvote(action) {
  try {
    const data = yield call(destroyUpvoteApi, action.payload);
    yield put({
      type: DESTROY_UPVOTE_SUCCESS,
      payload: data.data,
      meta: action.meta
    });
  } catch (error) {
    yield put({ type: DESTROY_UPVOTE_FAILURE, error });
  }
}

export function* watchGetQuestions() {
  yield takeLatest(GET_QUESTIONS_REQUEST, getQuestions);
}

export function* watchCreateQuestionRequest() {
  yield takeLatest(CREATE_QUESTION_REQUEST, createQuestion);
}

export function* watchFindQuestionById() {
  yield takeLatest(FIND_QUESTION_BY_ID_REQUEST, findQuestionById);
}

export function* watchUpvoteQuestion() {
  yield takeLatest(CREATE_UPVOTE_REQUEST, createUpvote);
}

export function* watchDestroyUpvote() {
  yield takeLatest(DESTROY_UPVOTE_REQUEST, destroyUpvote);
}
