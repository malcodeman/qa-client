export const GET_QUESTIONS_REQUEST = "GET_QUESTIONS_REQUEST";
export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";
export const GET_QUESTIONS_FAILURE = "GET_QUESTIONS_FAILURE";

export const CREATE_QUESTION_REQUEST = "CREATE_QUESTION_REQUEST";
export const CREATE_QUESTION_SUCCESS = "CREATE_QUESTION_SUCCESS";
export const CREATE_QUESTION_FAILURE = "CREATE_QUESTION_FAILURE";
export const CREATE_QUESTION_CLEAR = "CREATE_QUESTION_CLEAR";
export const CREATE_QUESTION_TRIGGER = "CREATE_QUESTION_TRIGGER";

export const getQuestions= () => {
  return {
    type: GET_QUESTIONS_REQUEST
  };
};

export const createQuestion = newQuestion=> {
  return {
    type: CREATE_QUESTION_REQUEST,
    payload: newQuestion
  };
};

export const createQuestionTrigger = () => {
  return {
    type: CREATE_QUESTION_TRIGGER
  };
};

export const createQuestionClear = () => {
  return {
    type: CREATE_QUESTION_CLEAR
  };
};
