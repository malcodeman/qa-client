export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const FIND_ME_REQUEST = "FIND_ME_REQUEST";
export const FIND_ME_SUCCESS = "FIND_ME_SUCCESS";
export const FIND_ME_FAILURE = "FIND_ME_FAILURE";

export const FIND_USER_BY_USERNAME_REQUEST = "FIND_USER_BY_USERNAME_REQUEST";
export const FIND_USER_BY_USERNAME_SUCCESS = "FIND_USER_BY_USERNAME_SUCCESS";
export const FIND_USER_BY_USERNAME_FAILURE = "FIND_USER_BY_USERNAME_FAILURE";

export const getUsers = () => {
  return {
    type: GET_USERS_REQUEST
  };
};

export const findMe = () => {
  return {
    type: FIND_ME_REQUEST
  };
};

export const findUserByUsername = username => {
  return {
    type: FIND_USER_BY_USERNAME_REQUEST,
    payload: {
      username
    }
  };
};
