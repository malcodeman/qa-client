import {
  GET_QUESTIONS_REQUEST,
  FIND_QUESTION_BY_ID_REQUEST,
  CREATE_UPVOTE_REQUEST,
  DESTROY_UPVOTE_REQUEST,
  CREATE_QUESTION_REQUEST
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

export const createUpvote = (id, answer) => {
  return {
    type: CREATE_UPVOTE_REQUEST,
    payload: {
      id
    },
    meta: {
      answer
    }
  };
};

export const destroyUpvote = (id, answer) => {
  return {
    type: DESTROY_UPVOTE_REQUEST,
    payload: id,
    meta: {
      answer
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
