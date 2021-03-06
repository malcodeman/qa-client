import {
  GET_QUESTIONS_SUCCESS,
  FIND_QUESTION_BY_ID_REQUEST,
  FIND_QUESTION_BY_ID_SUCCESS,
  CREATE_ANSWER_SUCCESS,
  CREATE_ANSWER_UPVOTE_SUCCESS,
  CREATE_QUESTION_UPVOTE_SUCCESS,
  DESTROY_QUESTION_UPVOTE_SUCCESS,
  DESTROY_ANSWER_UPVOTE_SUCCESS,
  GET_QUESTIONS_REQUEST
} from "../actions/questionsActionTypes";
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
  answers: [],
  upvotesCount: null,
  upvoted: false
};

const initialState = {
  questions: [],
  question: initialQuestionState,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FIND_QUESTION_BY_ID_REQUEST:
      return {
        ...state,
        question: initialQuestionState
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        loading: false
      };
    case FIND_QUESTION_BY_ID_SUCCESS:
      return {
        ...state,
        question: action.payload,
        votes: action.payload.votes
      };
    case CREATE_QUESTION_UPVOTE_SUCCESS:
      return {
        ...state,
        question: {
          ...state.question,
          upvotesCount: state.question.upvotesCount + 1,
          upvoted: true
        }
      };
    case DESTROY_QUESTION_UPVOTE_SUCCESS:
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
    case CREATE_ANSWER_UPVOTE_SUCCESS:
      return {
        ...state,
        ...state,
        question: {
          ...state.question,
          answers: state.question.answers.map(answer => {
            if (answer.id === action.payload.answerId) {
              return {
                ...answer,
                upvotesCount: answer.upvotesCount + 1,
                upvoted: true
              };
            }
            return answer;
          })
        }
      };
    case DESTROY_ANSWER_UPVOTE_SUCCESS:
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
            }
            return answer;
          })
        }
      };
    default:
      return state;
  }
};
