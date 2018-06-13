export const CREATE_ANSWER_REQUEST = "CREATE_ANSWER_REQUEST";
export const CREATE_ANSWER_SUCCESS = "CREATE_ANSWER_SUCCESS";
export const CREATE_ANSWER_FAILURE = "CREATE_ANSWER_FAILURE";

export const CREATE_UPVOTE_ANSWER_REQUEST = "CREATE_UPVOTE_ANSWER_REQUEST";
export const CREATE_UPVOTE_ANSWER_SUCCESS = "CREATE_UPVOTE_ANSWER_SUCCESS";
export const CREATE_UPVOTE_ANSWER_FAILURE = "CREATE_UPVOTE_ANSWER_FAILURE";

export const CREATE_DOWNVOTE_ANSWER_REQUEST = "CREATE_DOWNVOTE_ANSWER_REQUEST";
export const CREATE_DOWNVOTE_ANSWER_SUCCESS = "CREATE_DOWNVOTE_ANSWER_SUCCESS";
export const CREATE_DOWNVOTE_ANSWER_FAILURE = "CREATE_DOWNVOTE_ANSWER_FAILURE";

export const createAnswer = action => {
  return {
    type: CREATE_ANSWER_REQUEST,
    payload: {
      questionId: action.questionId,
      yourAnswer: action.body
    }
  };
};

export const createUpvote = (questionId, answerId) => {
  return {
    type: CREATE_UPVOTE_ANSWER_REQUEST,
    payload: {
      questionId,
      answerId
    }
  };
};

export const createDownvote = (questionId, answerId) => {
  return {
    type: CREATE_DOWNVOTE_ANSWER_REQUEST,
    payload: {
      questionId,
      answerId
    }
  };
};
