import { all, fork } from "redux-saga/effects";

import questionsSagas from "../../features/questions/sagas/questionsSagas";
import authSagas from "../../features/auth/sagas/authSagas";
import usersSagas from "../../features/users/sagas/usersSagas";
import answersSagas from "../../features/answers/sagas/answersSagas";
import commentsSagas from "../../features/comments/sagas/commentsSagas";

export default function* rootSaga() {
  yield all([
    fork(questionsSagas),
    fork(authSagas),
    fork(usersSagas),
    fork(answersSagas),
    fork(commentsSagas)
  ]);
}
