import QuestionsActionTypes from "./triviaQuestions.action-types";
import { IGetTriviaQuestions } from "./triviaQuestions.actions";
import TriviaAppStackScreenNames from "../../navigation/trivia-app-stack/TriviaAppStack.screen-names";

export const getTriviaQuestions = (
  navigate: (screenName: TriviaAppStackScreenNames) => void
): IGetTriviaQuestions => {
  return {
    type: QuestionsActionTypes.GET_TRIVIA_QUESTIONS,
    navigate: navigate,
  };
};
