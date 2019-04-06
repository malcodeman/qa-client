import {
  CREATE_ANSWER_REQUEST,
  CREATE_UPVOTE_ANSWER_REQUEST
} from "./answersActionTypes";

export const createAnswer = action => {
  return {
    type: CREATE_ANSWER_REQUEST,
    payload: {
      questionId: action.questionId,
      yourAnswer: action.body
    }
  };
};

export const createUpvote = (questionId, answerId) => {
  return {
    type: CREATE_UPVOTE_ANSWER_REQUEST,
    payload: {
      questionId,
      answerId
    }
  };
};
