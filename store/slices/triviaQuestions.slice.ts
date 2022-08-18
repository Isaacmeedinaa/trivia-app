import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TriviaQuestionsState } from "./triviaQuestions.types";
import {
  ISetTriviaQuestions,
  IAddAnsweredTriviaQuestion,
} from "../actions/triviaQuestions.actions";
import IAnsweredTriviaQuestion from "../../contracts/IAnsweredTriviaQuestion.contract";

const initialState: TriviaQuestionsState = {
  triviaQuestions: [],
  answeredTriviaQuestions: [],
  isFetchingTriviaQuestions: "idle",
};

const triviaQuestionsSlice = createSlice({
  name: "triviaQuestions",
  initialState: initialState,
  reducers: {
    setIsFetchingTriviaQuestions(state) {
      state.isFetchingTriviaQuestions = "loading";
    },
    setIsNotFetchingTriviaQuestions(state) {
      state.isFetchingTriviaQuestions = "idle";
    },
    setTriviaQuestions(state, action: PayloadAction<ISetTriviaQuestions>) {
      state.triviaQuestions = action.payload.triviaQuestions;
    },
    addAnsweredTriviaQuestion(
      state,
      action: PayloadAction<IAddAnsweredTriviaQuestion>
    ) {
      state.answeredTriviaQuestions = [
        ...state.answeredTriviaQuestions,
        action.payload.answeredTriviaQuestion,
      ];
    },
    resetAnsweredTriviaQuestions(state) {
      state.answeredTriviaQuestions = [];
    },
  },
});

export const {
  setIsFetchingTriviaQuestions,
  setIsNotFetchingTriviaQuestions,
  setTriviaQuestions,
  addAnsweredTriviaQuestion,
  resetAnsweredTriviaQuestions,
} = triviaQuestionsSlice.actions;

export default triviaQuestionsSlice.reducer;
