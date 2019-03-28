import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/authActionTypes";

const initialState = {
  signup_success: false,
  signup_failure: false,
  login_success: false,
  login_failure: false
};

export default (state = initialState, action) => {
  console.log(
    `%c${action.type}`,
    "background: #000; color: #22edfc; padding: 4px"
  );
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup_success: true,
        signup_failure: false
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signup_failure: true,
        signup_success: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login_success: true,
        login_failure: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login_failure: true,
        login_success: false
      };
    default:
      return state;
  }
};
