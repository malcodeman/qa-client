import {
  GET_QUESTIONS_SUCCESS,
  FIND_QUESTION_BY_ID_REQUEST,
  FIND_QUESTION_BY_ID_SUCCESS,
  CREATE_UPVOTE_SUCCESS,
  DESTROY_UPVOTE_SUCCESS
} from "../actions/questionsActionTypes";
import { CREATE_ANSWER_SUCCESS } from "../../answers/actions/answers_actions";
import {
  CREATE_QUESTION_COMMENT_SUCCESS,
  CREATE_ANSWER_COMMENT_SUCCESS
} from "../../comments/actions/commentsActionTypes";

const initialQuestionState = {
  title: "",
  body: "",
  createdAt: null,
  comments: [],
  user: {
    username: "",
    profilePhotoURL: null
  },
  answers: []
};

const initialState = {
  questions: [],
  question: initialQuestionState
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_QUESTION_BY_ID_REQUEST:
      return {
        ...state,
        question: initialQuestionState
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload
      };
    case FIND_QUESTION_BY_ID_SUCCESS:
      return {
        ...state,
        question: action.payload,
        votes: action.payload.votes
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
    case CREATE_QUESTION_COMMENT_SUCCESS:
      return {
        ...state,
        question: {
          ...state.question,
          comments: [...state.question.comments, action.payload]
        }
      };
    case CREATE_ANSWER_COMMENT_SUCCESS:
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
            }
            return answer;
          })
        }
      };
    default:
      return state;
  }
};
