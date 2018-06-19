export const CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST";
export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
export const CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE";

export const createComment = comment => {
  return {
    type: CREATE_COMMENT_REQUEST,
    payload: {
      id: comment.id,
      body: comment.body
    },
    meta: {
      answer: comment.answer
    }
  };
};
