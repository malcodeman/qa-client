import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  FIND_ME_SUCCESS,
  FIND_USER_BY_USERNAME_SUCCESS
} from "../actions/users_actions";

const initialState = {
  users: [],
  me: null,
  loading: true,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case FIND_ME_SUCCESS:
      return {
        ...state,
        me: action.payload
      };
    case FIND_USER_BY_USERNAME_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
