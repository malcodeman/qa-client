import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  FIND_ME_SUCCESS,
  FIND_USER_BY_USERNAME_SUCCESS
} from "../actions/users_actions";

import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS
} from "../../auth/actions/authActionTypes";

const initialUserState = {
  name: "",
  username: "",
  nameFirstLetter: "",
  profilePhotoURL: null,
  createdAt: null,
  questions: [],
  answers: []
};

const initialState = {
  users: [],
  me: {
    email: "",
    name: "",
    username: "",
    nameFirstLetter: "",
    profilePhotoURL: null,
    createdAt: null,
    questions: [],
    answers: []
  },
  user: initialUserState,
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        me: action.payload.user
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        me: action.payload
      };
    case GET_USERS_REQUEST:
      return {
        ...state,
        user: initialUserState
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
