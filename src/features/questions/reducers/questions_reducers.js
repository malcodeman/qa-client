import {
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  FIND_QUESTION_BY_ID_REQUEST,
  FIND_QUESTION_BY_ID_SUCCESS,
  FIND_QUESTION_BY_ID_UNLOAD,
  CREATE_QUESTION_CLEAR,
  CREATE_QUESTION_FAILURE,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_TRIGGER,
  CREATE_UPVOTE_SUCCESS,
  DESTROY_UPVOTE_SUCCESS
} from "../actions/questions_actions";
import { LOGOUT_SUCCESS } from "../../auth/actions/auth_actions";

import { CREATE_ANSWER_SUCCESS } from "../../answers/actions/answers_actions";

const initialState = {
  questions: [],
  question: null,
  loading: true,
  create_question_success: false,
  create_question_failure: false,
  create_question_trigger: false
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_QUESTIONS_REQUEST:
      return {
        ...state
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        loading: false
      };
    case FIND_QUESTION_BY_ID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FIND_QUESTION_BY_ID_SUCCESS:
      return {
        ...state,
        question: action.payload,
        votes: action.payload.votes,
        loading: false
      };
    case FIND_QUESTION_BY_ID_UNLOAD:
      return {
        ...state,
        question: null
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        questions: [],
        loading: true
      };
    case CREATE_QUESTION_TRIGGER:
      return {
        ...state,
        create_question_trigger: true
      };
    case CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        create_question_success: true,
        create_question_trigger: false
      };
    case CREATE_QUESTION_FAILURE:
      return {
        ...state,
        create_question_failure: true,
        create_question_trigger: false
      };
    case CREATE_QUESTION_CLEAR:
      return {
        ...state,
        create_question_success: false,
        create_question_failure: false,
        create_question_trigger: false
      };
    case CREATE_UPVOTE_SUCCESS:
      return {
        ...state,
        question: {
          ...state.question,
          upvotesCount: state.question.upvotesCount + 1,
          upvoted: {
            upvoteId: action.payload.id
          }
        }
      };
    case DESTROY_UPVOTE_SUCCESS:
      return {
        ...state,
        question: {
          ...state.question,
          upvotesCount: state.question.upvotesCount - 1,
          upvoted: false
        }
      };
    case CREATE_ANSWER_SUCCESS:
      return {
        ...state,
        question: {
          ...state.question,
          answers: [...state.question.answers, action.payload]
        }
      };
    default:
      return state;
  }
};
