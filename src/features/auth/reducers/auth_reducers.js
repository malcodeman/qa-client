import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_RESET,
  FIND_ME_SUCCESS
} from "../actions/auth_actions";

const initialState = {
  me: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_ME_SUCCESS:
      return {
        ...state,
        me: action.payload
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        me: action.payload.user
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signup_failure: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        me: action.payload.user,
        login_success: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login_failure: true
      };
    case LOGIN_RESET:
      return {
        ...state,
        login_success: false,
        login_failure: false
      };
    default:
      return state;
  }
};
