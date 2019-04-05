import {
  CREATE_QUESTION_COMMENT_REQUEST,
  CREATE_ANSWER_COMMENT_REQUEST
} from "./commentsActionTypes";

export const createQuestionComment = payload => {
  return {
    type: CREATE_QUESTION_COMMENT_REQUEST,
    payload
  };
};

export const createAnswerComment = payload => {
  return {
    type: CREATE_ANSWER_COMMENT_REQUEST,
    payload
  };
};
