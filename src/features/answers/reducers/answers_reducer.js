import {
  FIND_QUESTION_BY_ID_SUCCESS,
  GET_QUESTIONS_SUCCESS
} from "../../questions/actions/questions_actions";
import { CREATE_ANSWER_SUCCESS } from "../actions/answers_actions";

const initialState = {
  answers: [],
  num_answers: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_QUESTION_BY_ID_SUCCESS:
      return {
        ...state,
        answers: action.payload.answers,
        num_answers: action.payload.num_answers
      };
    case CREATE_ANSWER_SUCCESS:
      return {
        ...state,
        answers: [...state.answers, action.payload]
      };
    default:
      return state;
  }
};
