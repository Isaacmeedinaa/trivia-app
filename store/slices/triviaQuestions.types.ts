import IAnsweredTriviaQuestion from "../../contracts/IAnsweredTriviaQuestion.contract";
import ITriviaQuestion from "../../contracts/ITriviaQuestion.contract";

export type TriviaQuestionsState = {
  triviaQuestions: ITriviaQuestion[];
  answeredTriviaQuestions: IAnsweredTriviaQuestion[];
  isFetchingTriviaQuestions: "idle" | "loading";
};
