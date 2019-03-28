import { SIGNUP_REQUEST, LOGIN_REQUEST } from "./authActionTypes";

export const signup = newUser => {
  return {
    type: SIGNUP_REQUEST,
    payload: newUser
  };
};

export const login = user => {
  return {
    type: LOGIN_REQUEST,
    payload: user
  };
};
