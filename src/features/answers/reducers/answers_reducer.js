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
      const { answers } = action.payload;
      return {
        ...state,
        answers,
        num_answers: answers.length
      };
    case CREATE_ANSWER_SUCCESS:
      return {
        ...state,
        answers: [...state.answers, action.payload],
        num_answers: state.num_answers + 1
      };
    default:
      return state;
  }
};
