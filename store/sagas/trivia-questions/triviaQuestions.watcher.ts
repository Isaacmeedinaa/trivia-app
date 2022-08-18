// Redux Saga
import { all, takeEvery } from "redux-saga/effects";

import TriviaQuestionsActionTypes from "../../actions/triviaQuestions.action-types";
import getTriviaQuestions from "./workers/getTriviaQuestions.worker";

function* triviaQuestionsWatcher() {
  yield all([
    takeEvery(
      TriviaQuestionsActionTypes.GET_TRIVIA_QUESTIONS,
      getTriviaQuestions
    ),
  ]);
}

export default triviaQuestionsWatcher;
