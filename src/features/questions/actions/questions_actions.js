export const GET_QUESTIONS_REQUEST = "GET_QUESTIONS_REQUEST";
export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";
export const GET_QUESTIONS_FAILURE = "GET_QUESTIONS_FAILURE";

export const FIND_QUESTION_BY_ID_REQUEST = "FIND_QUESTION_BY_ID_REQUEST";
export const FIND_QUESTION_BY_ID_SUCCESS = "FIND_QUESTION_BY_ID_SUCCESS";
export const FIND_QUESTION_BY_ID_FAILURE = "FIND_QUESTION_BY_ID_FAILURE";
export const FIND_QUESTION_BY_ID_UNLOAD = "FIND_QUESTION_BY_ID_UNLOAD";

export const CREATE_UPVOTE_REQUEST = "CREATE_UPVOTE_REQUEST";
export const CREATE_UPVOTE_SUCCESS = "CREATE_UPVOTE_SUCCESS";
export const CREATE_UPVOTE_FAILURE = "CREATE_UPVOTE_FAILURE";

export const DESTROY_UPVOTE_REQUEST = "DESTROY_UPVOTE_REQUEST";
export const DESTROY_UPVOTE_SUCCESS = "DESTROY_UPVOTE_SUCCESS";
export const DESTROY_UPVOTE_FAILURE = "DESTROY_UPVOTE_FAILURE";

export const CREATE_QUESTION_REQUEST = "CREATE_QUESTION_REQUEST";
export const CREATE_QUESTION_SUCCESS = "CREATE_QUESTION_SUCCESS";
export const CREATE_QUESTION_FAILURE = "CREATE_QUESTION_FAILURE";

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

export const createUpvote = (id, answer) => {
  return {
    type: CREATE_UPVOTE_REQUEST,
    payload: {
      id
    },
    meta: {
      answer
    }
  };
};

export const destroyUpvote = (id, answer) => {
  return {
    type: DESTROY_UPVOTE_REQUEST,
    payload: id,
    meta: {
      answer
    }
  };
};

export const findQuestionByIdUnload = () => {
  return {
    type: FIND_QUESTION_BY_ID_UNLOAD
  };
};

export const createQuestion = (payload, meta) => {
  return {
    type: CREATE_QUESTION_REQUEST,
    payload,
    meta
  };
};
