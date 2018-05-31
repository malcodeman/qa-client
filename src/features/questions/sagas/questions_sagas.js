import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../../state/axios";

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
  CREATE_DOWNVOTE_REQUEST,
  CREATE_DOWNVOTE_SUCCESS,
  CREATE_DOWNVOTE_FAILURE,
  CREATE_UPVOTE_ANSWER_REQUEST,
  CREATE_DOWNVOTE_ANSWER_REQUEST,
  CREATE_DOWNVOTE_ANSWER_SUCCESS,
  CREATE_DOWNVOTE_ANSWER_FAILURE,
  CREATE_UPVOTE_ANSWER_SUCCESS,
  CREATE_UPVOTE_ANSWER_FAILURE
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
  return axios.post(`/questions/${id}/upvotes`, { questionId: id });
};

const createDownvoteApi = id => {
  return axios.post(`/questions/${id}/downvotes`, { questionId: id });
};

const createUpvoteAnswerApi = (questionId, answerId) => {
  return axios.post(`/questions/${questionId}/answers/${answerId}/upvotes`, {
    questionId,
    answerId
  });
};

const createDownvoteAnswerApi = (questionId, answerId) => {
  return axios.post(`/questions/${questionId}/answers/${answerId}/downvotes`, {
    questionId,
    answerId
  });
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
    const data = yield call(createUpvoteApi, id);
    yield put({ type: CREATE_UPVOTE_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: CREATE_UPVOTE_FAILURE, error });
  }
}

function* createDownvote(action) {
  try {
    const { id } = action.payload;
    const data = yield call(createDownvoteApi, id);
    yield put({ type: CREATE_DOWNVOTE_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: CREATE_DOWNVOTE_FAILURE, error });
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

function* createDownvoteAnswer(action) {
  try {
    const { questionId, answerId } = action.payload;
    const data = yield call(createDownvoteAnswerApi, questionId, answerId);
    yield put({ type: CREATE_DOWNVOTE_ANSWER_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: CREATE_DOWNVOTE_ANSWER_FAILURE, error });
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

export function* watchDownvoteQuestion() {
  yield takeLatest(CREATE_DOWNVOTE_REQUEST, createDownvote);
}

export function* watchUpvoteAnswer() {
  yield takeLatest(CREATE_UPVOTE_ANSWER_REQUEST, createUpvoteAnswer);
}

export function* watchDownvoteAnswer() {
  yield takeLatest(CREATE_DOWNVOTE_ANSWER_REQUEST, createDownvoteAnswer);
}
