import {
  GET_USERS_REQUEST,
  FIND_ME_REQUEST,
  FIND_USER_BY_USERNAME_REQUEST
} from "./usersActionTypes";

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
