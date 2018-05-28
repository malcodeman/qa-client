import { all } from "redux-saga/effects";

import {
  watchGetQuestions,
  watchCreateQuestionRequest,
  watchFindQuestionById
} from "../features/questions/sagas/questions_sagas";
import {
  watchSignupRequest,
  watchLoginRequest,
  watchLogoutRequest
} from "../features/auth/sagas/auth_sagas";

import { watchGetUsers } from "../features/users/sagas/users_sagas";

import {watchCreateAnswerRequest} from "../features/answers/sagas/answers_sagas";

export default function* rootSaga() {
  yield all([
    watchGetQuestions(),
    watchFindQuestionById(),
    watchCreateQuestionRequest(),
    watchCreateAnswerRequest(),
    watchSignupRequest(),
    watchLoginRequest(),
    watchLogoutRequest(),
    watchGetUsers()
  ]);
}
