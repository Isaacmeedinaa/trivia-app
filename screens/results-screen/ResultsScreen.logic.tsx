import React from "react";
import useDispatchAction from "../../store/hooks/useDispatchAction.hook";
import useStateSelector from "../../store/hooks/useStateSelector.hook";
import { resetAnsweredTriviaQuestions } from "../../store/slices/triviaQuestions.slice";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import TriviaAppStackParamList from "../../navigation/trivia-app-stack/TriviaAppStack.params";
import TriviaAppStackScreenNames from "../../navigation/trivia-app-stack/TriviaAppStack.screen-names";
import AnsweredTriviaQuestionCardView from "../../components/results-screen/answered-trivia-question-card/AnsweredTriviaQuestionCard.view";

const ResultsScreenLogic = () => {
  const { navigate } = useNavigation<NavigationProp<TriviaAppStackParamList>>();

  const dispatch = useDispatchAction();
  const answeredTriviaQuestions = useStateSelector(
    (s) => s.triviaQuestionsReducer.answeredTriviaQuestions
  );
  const correctCount = useStateSelector(
    (s) =>
      s.triviaQuestionsReducer.answeredTriviaQuestions.filter(
        (q) => q.answeredCorrectly === true
      ).length
  );

  const onPlayAgainPress = () => {
    dispatch(resetAnsweredTriviaQuestions());
    navigate(TriviaAppStackScreenNames.HOME_SCREEN);
  };

  const renderAnsweredTriviaQuestions = () => {
    return answeredTriviaQuestions.map((q) => (
      <AnsweredTriviaQuestionCardView
        key={q.question}
        answeredTriviaQuestion={q}
      />
    ));
  };

  return {
    onPlayAgainPress,
    renderAnsweredTriviaQuestions,
    correctCount,
    answeredTriviaQuestions,
  };
};

export default ResultsScreenLogic;
