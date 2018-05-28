import { all } from "redux-saga/effects";

import {
  watchGetQuestions,
  watchCreateQuestionRequest
} from "../features/questions/sagas/questions_sagas";
import {
  watchSignupRequest,
  watchLoginRequest,
  watchLogoutRequest
} from "../features/auth/sagas/auth_sagas";

import { watchGetUsers } from "../features/users/sagas/users_sagas";

export default function* rootSaga() {
  yield all([
    watchGetQuestions(),
    watchCreateQuestionRequest(),
    watchSignupRequest(),
    watchLoginRequest(),
    watchLogoutRequest(),
    watchGetUsers()
  ]);
}
