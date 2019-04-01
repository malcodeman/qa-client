import { SIGNUP_REQUEST, LOGIN_REQUEST } from "./authActionTypes";

export const signup = newUser => {
  return {
    type: SIGNUP_REQUEST,
    payload: newUser
  };
};

export const login = (payload, meta) => {
  return {
    type: LOGIN_REQUEST,
    payload,
    meta
  };
};
