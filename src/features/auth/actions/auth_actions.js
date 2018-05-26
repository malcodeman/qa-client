export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const SIGNUP_RESET = "SIGNUP_RESET";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_RESET = "LOGIN_RESET";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const signup = newUser => {
  return {
    type: SIGNUP_REQUEST,
    payload: newUser
  };
};

export const signupReset = () => {
  return {
    type: SIGNUP_RESET
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
