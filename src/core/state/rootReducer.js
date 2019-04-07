import { combineReducers } from "redux";

import questions from "../../features/questions/reducers/questionsReducers";
import users from "../../features/users/reducers/usersReducers";
import auth from "../../features/auth/reducers/authReducers";

const rootReducer = combineReducers({
  questions,
  users,
  auth
});

export default rootReducer;
