import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import questions from "../../features/questions/reducers/questions_reducers";
import answers from "../../features/answers/reducers/answers_reducer";
import users from "../../features/users/reducers/users_reducers";

const rootReducer = combineReducers({
  questions,
  answers,
  users,
  router: routerReducer
});

export default rootReducer;
