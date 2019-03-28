import {
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  FIND_QUESTION_BY_ID_REQUEST,
  FIND_QUESTION_BY_ID_SUCCESS,
  FIND_QUESTION_BY_ID_UNLOAD,
  CREATE_UPVOTE_SUCCESS,
  DESTROY_UPVOTE_SUCCESS
} from "../actions/questions_actions";
import { CREATE_ANSWER_SUCCESS } from "../../answers/actions/answers_actions";
import { CREATE_COMMENT_SUCCESS } from "../../comments/actions";

const initialState = {
  questions: [],
  question: null,
  loading: true
};

export default (state = initialState, action) => {
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
    case CREATE_UPVOTE_SUCCESS:
      if (action.meta.answer) {
        return {
          ...state,
          question: {
            ...state.question,
            answers: state.question.answers.map(answer => {
              if (answer.id === action.payload.answerId) {
                return {
                  ...answer,
                  upvotesCount: answer.upvotesCount + 1,
                  upvoted: {
                    upvoteId: action.payload.id
                  }
                };
              } else {
                return answer;
              }
            })
          }
        };
      } else {
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
      }
    case DESTROY_UPVOTE_SUCCESS:
      if (action.meta.answer) {
        return {
          ...state,
          question: {
            ...state.question,
            answers: state.question.answers.map(answer => {
              if (answer.id === action.payload.answerId) {
                return {
                  ...answer,
                  upvotesCount: answer.upvotesCount - 1,
                  upvoted: false
                };
              } else {
                return answer;
              }
            })
          }
        };
      } else {
        return {
          ...state,
          question: {
            ...state.question,
            upvotesCount: state.question.upvotesCount - 1,
            upvoted: false
          }
        };
      }
    case CREATE_ANSWER_SUCCESS:
      return {
        ...state,
        question: {
          ...state.question,
          answers: [...state.question.answers, action.payload]
        }
      };
    case CREATE_COMMENT_SUCCESS:
      if (action.meta.answer) {
        return {
          ...state,
          question: {
            ...state.question,
            answers: state.question.answers.map(answer => {
              if (answer.id === action.payload.answerId) {
                return {
                  ...answer,
                  comments: [...answer.comments, action.payload]
                };
              } else {
                return answer;
              }
            })
          }
        };
      } else {
        return {
          ...state,
          question: {
            ...state.question,
            comments: [...state.question.comments, action.payload]
          }
        };
      }
    default:
      return state;
  }
};
