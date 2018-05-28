import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import auth from "../features/auth/reducers/auth_reducers";
import questions from "../features/questions/reducers/questions_reducers";
import users from "../features/users/reducers/users_reducers";

const rootReducer = combineReducers({
  auth,
  questions,
  users,
  router: routerReducer
});

export default rootReducer;
