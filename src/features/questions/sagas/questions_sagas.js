import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../../state/axios";

import {
  GET_QUESTIONS_FAILURE,
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  CREATE_QUESTION_FAILURE,
  CREATE_QUESTION_REQUEST,
  CREATE_QUESTION_SUCCESS
} from "../actions/questions_actions";


const getQuestionsApi = () => {
  return axios.get(`/questions`);
};

const createQuestionApi = newQuestion => {
  return axios.post(`/questions`, newQuestion);
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

export function* watchGetQuestions() {
  yield takeLatest(GET_QUESTIONS_REQUEST, getQuestions);
}

export function* watchCreateQuestionRequest() {
  yield takeLatest(CREATE_QUESTION_REQUEST, createQuestion);
}
