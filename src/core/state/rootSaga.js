import { all } from "redux-saga/effects";

import {
  watchGetQuestions,
  watchCreateQuestionRequest,
  watchFindQuestionById,
  watchUpvoteQuestion,
  watchDownvoteQuestion
} from "../../features/questions/sagas/questions_sagas";
import {
  watchSignupRequest,
  watchLoginRequest,
  watchLogoutRequest,
  watchFindMeRequest
} from "../../features/auth/sagas/auth_sagas";

import { watchGetUsers } from "../../features/users/sagas/users_sagas";

import {
  watchCreateAnswerRequest,
  watchDownvoteAnswer,
  watchUpvoteAnswer
} from "../../features/answers/sagas/answers_sagas";

export default function* rootSaga() {
  yield all([
    watchGetQuestions(),
    watchFindQuestionById(),
    watchCreateQuestionRequest(),
    watchUpvoteQuestion(),
    watchDownvoteQuestion(),
    watchUpvoteAnswer(),
    watchDownvoteAnswer(),
    watchCreateAnswerRequest(),
    watchSignupRequest(),
    watchLoginRequest(),
    watchLogoutRequest(),
    watchGetUsers(),
    watchFindMeRequest()
  ]);
}
