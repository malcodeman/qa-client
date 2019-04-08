import {
  GET_QUESTIONS_REQUEST,
  FIND_QUESTION_BY_ID_REQUEST,
  CREATE_QUESTION_REQUEST,
  CREATE_ANSWER_REQUEST,
  CREATE_QUESTION_UPVOTE_REQUEST,
  DESTROY_QUESTION_UPVOTE_REQUEST,
  CREATE_ANSWER_UPVOTE_REQUEST,
  DESTROY_ANSWER_UPVOTE_REQUEST
} from "./questionsActionTypes";

export const getQuestions = () => {
  return {
    type: GET_QUESTIONS_REQUEST
  };
};

export const findQuestionById = id => {
  return {
    type: FIND_QUESTION_BY_ID_REQUEST,
    payload: {
      id
    }
  };
};

export const createQuestion = (payload, meta) => {
  return {
    type: CREATE_QUESTION_REQUEST,
    payload,
    meta
  };
};

export const createAnswer = (payload, meta) => {
  return {
    type: CREATE_ANSWER_REQUEST,
    payload,
    meta
  };
};

export const upvoteQuestion = payload => {
  return {
    type: CREATE_QUESTION_UPVOTE_REQUEST,
    payload
  };
};

export const downvoteQuestion = payload => {
  return {
    type: DESTROY_QUESTION_UPVOTE_REQUEST,
    payload
  };
};

export const upvoteAnswer = payload => {
  return {
    type: CREATE_ANSWER_UPVOTE_REQUEST,
    payload
  };
};

export const downvoteAnswer = payload => {
  return {
    type: DESTROY_ANSWER_UPVOTE_REQUEST,
    payload
  };
};
