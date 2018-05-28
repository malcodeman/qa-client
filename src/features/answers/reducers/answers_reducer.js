import { FIND_QUESTION_BY_ID_SUCCESS } from "../../questions/actions/questions_actions";

const initialState = {
  answers: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_QUESTION_BY_ID_SUCCESS:
      return {
        ...state,
        answers: action.payload.answers
      };
    default:
      return state;
  }
};
