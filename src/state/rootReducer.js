import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import auth from "../features/auth/reducers/auth_reducers";
import questions from "../features/questions/reducers/questions_reducers";
import answers from "../features/answers/reducers/answers_reducer";
import users from "../features/users/reducers/users_reducers";

const rootReducer = combineReducers({
  auth,
  questions,
  answers,
  users,
  router: routerReducer
});

export default rootReducer;
