import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import auth from "../features/auth/reducers/auth_reducers";
import questions from "../features/questions/reducers/questions_reducers";

const rootReducer = combineReducers({ auth, questions, router: routerReducer });

export default rootReducer;
