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
  CREATE_ANSWER_FAILURE,
  CREATE_ANSWER_REQUEST,
  CREATE_ANSWER_SUCCESS,
  CREATE_ANSWER_UPVOTE_FAILURE,
  CREATE_ANSWER_UPVOTE_REQUEST,
  CREATE_ANSWER_UPVOTE_SUCCESS,
  CREATE_QUESTION_UPVOTE_FAILURE,
  CREATE_QUESTION_UPVOTE_REQUEST,
  CREATE_QUESTION_UPVOTE_SUCCESS,
  DESTROY_QUESTION_UPVOTE_SUCCESS,
  DESTROY_QUESTION_UPVOTE_FAILURE,
  DESTROY_QUESTION_UPVOTE_REQUEST,
  DESTROY_ANSWER_UPVOTE_REQUEST,
  DESTROY_ANSWER_UPVOTE_SUCCESS,
  DESTROY_ANSWER_UPVOTE_FAILURE
} from "../actions/questionsActionTypes";

const getQuestionsApi = () => {
  return axios.get(`/questions`);
};

const createQuestionApi = newQuestion => {
  return axios.post(`/questions`, newQuestion);
};

const findQuestionByIdApi = id => {
  return axios.get(`/questions/${id}`);
};

const createAnswerApi = (questionId, body) => {
  return axios.post(`/answers`, { questionId, body });
};

const upvoteQuestionApi = questionId => {
  return axios.post(`/questions/${questionId}/upvotes`);
};

const downvoteQuestionApi = upvoteId => {
  return axios.delete(`/upvotes/${upvoteId}`);
};

const upvoteAnswerApi = answerId => {
  return axios.post(`/answers/${answerId}/upvotes`);
};

const downvoteAnswerApi = upvoteId => {
  return axios.delete(`/upvotes/${upvoteId}`);
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
  const { setSubmitting, history } = action.meta;

  try {
    const data = yield call(createQuestionApi, action.payload);

    yield put({ type: CREATE_QUESTION_SUCCESS, payload: data.data });
    setSubmitting(false);
    history.push("/");
  } catch (error) {
    yield put({ type: CREATE_QUESTION_FAILURE, error });
    setSubmitting(false);
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

function* upvoteQuestion(action) {
  try {
    const data = yield call(upvoteQuestionApi, action.payload);

    yield put({ type: CREATE_QUESTION_UPVOTE_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: CREATE_QUESTION_UPVOTE_FAILURE, error });
  }
}

function* upvoteAnswer(action) {
  try {
    const data = yield call(upvoteAnswerApi, action.payload);

    yield put({ type: CREATE_ANSWER_UPVOTE_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: CREATE_ANSWER_UPVOTE_FAILURE, error });
  }
}

function* downvoteQuestion(action) {
  try {
    const data = yield call(downvoteQuestionApi, action.payload);

    yield put({ type: DESTROY_QUESTION_UPVOTE_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: DESTROY_QUESTION_UPVOTE_FAILURE, error });
  }
}

function* downvoteAnswer(action) {
  try {
    const data = yield call(downvoteAnswerApi, action.payload);

    yield put({ type: DESTROY_ANSWER_UPVOTE_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: DESTROY_ANSWER_UPVOTE_FAILURE, error });
  }
}

const saga = function*() {
  yield takeLatest(GET_QUESTIONS_REQUEST, getQuestions);
  yield takeLatest(CREATE_QUESTION_REQUEST, createQuestion);
  yield takeLatest(FIND_QUESTION_BY_ID_REQUEST, findQuestionById);
  yield takeLatest(CREATE_ANSWER_REQUEST, createAnswer);
  yield takeLatest(CREATE_QUESTION_UPVOTE_REQUEST, upvoteQuestion);
  yield takeLatest(CREATE_ANSWER_UPVOTE_REQUEST, upvoteAnswer);
  yield takeLatest(DESTROY_QUESTION_UPVOTE_REQUEST, downvoteQuestion);
  yield takeLatest(DESTROY_ANSWER_UPVOTE_REQUEST, downvoteAnswer);
};

export default saga;
