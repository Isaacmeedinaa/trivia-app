import { call, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga/index";
import {
  setIsFetchingTriviaQuestions,
  setIsNotFetchingTriviaQuestions,
  setTriviaQuestions,
} from "../../../slices/triviaQuestions.slice";
import { IGetTriviaQuestions } from "../../../actions/triviaQuestions.actions";
import triviaQuestionsAPI from "../../../../services/API/triviaQuestions.api";
import ITriviaQuestionsResponse from "../../../../contracts/ITriviaQuestions.contract";
import { AxiosError, AxiosResponse } from "axios";
import TriviaAppStackScreenNames from "../../../../navigation/trivia-app-stack/TriviaAppStack.screen-names";

function* getTriviaQuestions({ navigate }: IGetTriviaQuestions): SagaIterator {
  try {
    // starts the loader
    yield put(setIsFetchingTriviaQuestions());

    // Calls the backend API
    const getTriviaQuestionsRes: AxiosResponse = yield call(
      triviaQuestionsAPI.getTriviaQuestions
    );

    // Gets the response data and sets it to a variable
    const triviaQuestionsResponse: ITriviaQuestionsResponse =
      getTriviaQuestionsRes.data;

    // Sets the trivia questions to the Redux state
    yield put(
      setTriviaQuestions({ triviaQuestions: triviaQuestionsResponse.results })
    );

    // Stops loader
    yield put(setIsNotFetchingTriviaQuestions());

    // Navigates to the quiz screen
    navigate(TriviaAppStackScreenNames.QUIZ_SCREEN);
  } catch (err: any) {
    const error: AxiosError = err;
    yield put(setIsNotFetchingTriviaQuestions());
    console.error(error);
  }
}

export default getTriviaQuestions;
