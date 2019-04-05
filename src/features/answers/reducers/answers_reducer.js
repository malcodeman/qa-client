import { FIND_QUESTION_BY_ID_SUCCESS } from "../../questions/actions/questionsActionTypes";
import {
  CREATE_ANSWER_SUCCESS,
  CREATE_UPVOTE_ANSWER_SUCCESS
} from "../actions/answers_actions";

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
        num_answers: action.payload.answers.length
      };
    case CREATE_ANSWER_SUCCESS:
      return {
        ...state,
        answers: [...state.answers, action.payload],
        num_answers: state.num_answers + 1
      };
    case CREATE_UPVOTE_ANSWER_SUCCESS:
      return {
        ...state,
        answers: state.answers.map((answer, index) => {
          if (answer.id === action.payload.answerId) {
            return {
              ...answer,
              votes: answer.votes + 1
            };
          } else {
            return answer;
          }
        })
      };
    default:
      return state;
  }
};
