export const GET_QUESTIONS_REQUEST = "GET_QUESTIONS_REQUEST";
export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";
export const GET_QUESTIONS_FAILURE = "GET_QUESTIONS_FAILURE";

export const FIND_QUESTION_BY_ID_REQUEST = "FIND_QUESTION_BY_ID_REQUEST";
export const FIND_QUESTION_BY_ID_SUCCESS = "FIND_QUESTION_BY_ID_SUCCESS";
export const FIND_QUESTION_BY_ID_FAILURE = "FIND_QUESTION_BY_ID_FAILURE";
export const FIND_QUESTION_BY_ID_UNLOAD = "FIND_QUESTION_BY_ID_UNLOAD";

export const UPVOTE_QUESTION_REQUEST = "UPVOTE_QUESTION_REQUEST";
export const UPVOTE_QUESTION_SUCCESS = "UPVOTE_QUESTION_SUCCESS";
export const UPVOTE_QUESTION_FAILURE = "UPVOTE_QUESTION_FAILURE";

export const DOWNVOTE_QUESTION_REQUEST = "DOWNVOTE_QUESTION_REQUEST";
export const DOWNVOTE_QUESTION_SUCCESS = "DOWNVOTE_QUESTION_SUCCESS";
export const DOWNVOTE_QUESTION_FAILURE = "DOWNVOTE_QUESTION_FAILURE";

export const CREATE_QUESTION_REQUEST = "CREATE_QUESTION_REQUEST";
export const CREATE_QUESTION_SUCCESS = "CREATE_QUESTION_SUCCESS";
export const CREATE_QUESTION_FAILURE = "CREATE_QUESTION_FAILURE";
export const CREATE_QUESTION_CLEAR = "CREATE_QUESTION_CLEAR";
export const CREATE_QUESTION_TRIGGER = "CREATE_QUESTION_TRIGGER";

export const getQuestions = () => {
  return {
    type: GET_QUESTIONS_REQUEST
  };
};

export const findQuestionById = id => {
  return {
    type: FIND_QUESTION_BY_ID_REQUEST,
    payload: {
      id
    }
  };
};

export const upvoteQuestion = id => {
  return {
    type: UPVOTE_QUESTION_REQUEST,
    payload: {
      id
    }
  };
};

export const downvoteQuestion = id => {
  return {
    type: DOWNVOTE_QUESTION_REQUEST,
    payload: {
      id
    }
  };
};

export const findQuestionByIdUnload = () => {
  return {
    type: FIND_QUESTION_BY_ID_UNLOAD
  };
};

export const createQuestion = newQuestion => {
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
