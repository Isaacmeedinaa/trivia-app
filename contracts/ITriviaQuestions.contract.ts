import ITriviaQuestion from "./ITriviaQuestion.contract";

interface ITriviaQuestionsResponse {
  response: number;
  results: ITriviaQuestion[];
}

export default ITriviaQuestionsResponse;
