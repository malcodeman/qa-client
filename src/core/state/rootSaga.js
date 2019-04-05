import { all } from "redux-saga/effects";

import {
  watchGetQuestions,
  watchCreateQuestionRequest,
  watchFindQuestionById,
  watchUpvoteQuestion,
  watchDestroyUpvote
} from "../../features/questions/sagas/questionsSagas";
import {
  watchSignupRequest,
  watchLoginRequest
} from "../../features/auth/sagas/authSagas";

import {
  watchGetUsers,
  watchFindByUsernameRequest,
  watchFindMeRequest
} from "../../features/users/sagas/users_sagas";

import {
  watchCreateAnswerRequest,
  watchUpvoteAnswer
} from "../../features/answers/sagas/answers_sagas";

import {
  watchCreateQuestionComment,
  watchCreateAnswerComment
} from "../../features/comments/sagas/commentsSagas";

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
    watchGetUsers(),
    watchFindMeRequest(),
    watchFindByUsernameRequest(),
    watchCreateQuestionComment(),
    watchCreateAnswerComment()
  ]);
}
