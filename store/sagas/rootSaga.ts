// Saga
import { all } from "redux-saga/effects";

import triviaQuestionsWatcher from "./trivia-questions/triviaQuestions.watcher";

function* rootSaga() {
  yield all([triviaQuestionsWatcher()]);
}

export default rootSaga;
