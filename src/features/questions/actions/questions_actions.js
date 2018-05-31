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

export const CREATE_DOWNVOTE_REQUEST = "CREATE_DOWNVOTE_REQUEST";
export const CREATE_DOWNVOTE_SUCCESS = "CREATE_DOWNVOTE_SUCCESS";
export const CREATE_DOWNVOTE_FAILURE = "CREATE_DOWNVOTE_FAILURE";

export const CREATE_UPVOTE_ANSWER_REQUEST = "CREATE_UPVOTE_ANSWER_REQUEST";
export const CREATE_UPVOTE_ANSWER_SUCCESS = "CREATE_UPVOTE_ANSWER_SUCCESS";
export const CREATE_UPVOTE_ANSWER_FAILURE = "CREATE_UPVOTE_ANSWER_FAILURE";

export const CREATE_DOWNVOTE_ANSWER_REQUEST = "CREATE_DOWNVOTE_ANSWER_REQUEST";
export const CREATE_DOWNVOTE_ANSWER_SUCCESS = "CREATE_DOWNVOTE_ANSWER_SUCCESS";
export const CREATE_DOWNVOTE_ANSWER_FAILURE = "CREATE_DOWNVOTE_ANSWER_FAILURE";

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

export const createUpvote = id => {
  return {
    type: CREATE_UPVOTE_REQUEST,
    payload: {
      id
    }
  };
};

export const createDownvote = id => {
  return {
    type: CREATE_DOWNVOTE_REQUEST,
    payload: {
      id
    }
  };
};

export const createUpvoteAnswer = (questionId, answerId) => {
  return {
    type: CREATE_UPVOTE_ANSWER_REQUEST,
    payload: {
      questionId,
      answerId
    }
  };
};

export const createDownvoteAnswer = (questionId, answerId) => {
  return {
    type: CREATE_DOWNVOTE_ANSWER_REQUEST,
    payload: {
      questionId,
      answerId
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
