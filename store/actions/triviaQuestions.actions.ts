import IAnsweredTriviaQuestion from "../../contracts/IAnsweredTriviaQuestion.contract";
import ITriviaQuestion from "../../contracts/ITriviaQuestion.contract";
import TriviaAppStackScreenNames from "../../navigation/trivia-app-stack/TriviaAppStack.screen-names";
import QuestionsActionTypes from "./triviaQuestions.action-types";

export interface IGetTriviaQuestions {
  type: QuestionsActionTypes.GET_TRIVIA_QUESTIONS;
  navigate: (screenName: TriviaAppStackScreenNames) => void;
}

export interface ISetTriviaQuestions {
  triviaQuestions: ITriviaQuestion[];
}

export interface IAddAnsweredTriviaQuestion {
  answeredTriviaQuestion: IAnsweredTriviaQuestion;
}
