export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_RESET = "LOGIN_RESET";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const FIND_ME_REQUEST = "FIND_ME_REQUEST";
export const FIND_ME_SUCCESS = "FIND_ME_SUCCESS";
export const FIND_ME_FAILURE = "FIND_ME_FAILURE";

export const findMe = () => {
  return {
    type: FIND_ME_REQUEST
  };
};

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

export const loginReset = () => {
  return {
    type: LOGIN_RESET
  };
};

export const logout = user => {
  return {
    type: LOGOUT_REQUEST,
    payload: user
  };
};
