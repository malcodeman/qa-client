export const CREATE_ANSWER_REQUEST = "CREATE_ANSWER_REQUEST";
export const CREATE_ANSWER_SUCCESS = "CREATE_ANSWER_SUCCESS";
export const CREATE_ANSWER_FAILURE = "CREATE_ANSWER_FAILURE";

export const createAnswer = action => {
  return {
    type: CREATE_ANSWER_REQUEST,
    payload: {
      questionId: action.questionId,
      yourAnswer: action.body
    }
  };
};
