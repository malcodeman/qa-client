import { all } from "redux-saga/effects";

import {
  watchGetQuestions,
  watchCreateQuestionRequest,
  watchFindQuestionById,
  watchUpvoteQuestion,
  watchDestroyUpvote
} from "../../features/questions/sagas/questions_sagas";
import {
  watchSignupRequest,
  watchLoginRequest,
  watchLogoutRequest
} from "../../features/auth/sagas/auth_sagas";

import {
  watchGetUsers,
  watchFindByUsernameRequest,
  watchFindMeRequest
} from "../../features/users/sagas/users_sagas";

import {
  watchCreateAnswerRequest,
  watchUpvoteAnswer
} from "../../features/answers/sagas/answers_sagas";

import { watchCreateComment } from "../../features/comments/sagas";

export default function* rootSaga() {
  yield all([
    watchGetQuestions(),
    watchFindQuestionById(),
    watchCreateQuestionRequest(),
    watchUpvoteQuestion(),
    watchDestroyUpvote(),
    watchUpvoteAnswer(),
    watchCreateAnswerRequest(),
    watchSignupRequest(),
    watchLoginRequest(),
    watchLogoutRequest(),
    watchGetUsers(),
    watchFindMeRequest(),
    watchFindByUsernameRequest(),
    watchCreateComment()
  ]);
}
