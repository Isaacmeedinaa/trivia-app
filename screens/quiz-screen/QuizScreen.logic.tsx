import { useState } from "react";
import IAnsweredTriviaQuestion from "../../contracts/IAnsweredTriviaQuestion.contract";
import useStateSelector from "../../store/hooks/useStateSelector.hook";
import useDispatchAction from "../../store/hooks/useDispatchAction.hook";
import { addAnsweredTriviaQuestion } from "../../store/slices/triviaQuestions.slice";
import TriviaQuestionsActionTypes from "../../store/actions/triviaQuestions.action-types";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import TriviaAppStackParamList from "../../navigation/trivia-app-stack/TriviaAppStack.params";
import TriviaAppStackScreenNames from "../../navigation/trivia-app-stack/TriviaAppStack.screen-names";

const QuizScreenLogic = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const { navigate } = useNavigation<NavigationProp<TriviaAppStackParamList>>();

  const dispatch = useDispatchAction();
  const triviaQuestions = useStateSelector(
    (s) => s.triviaQuestionsReducer.triviaQuestions
  );

  const onAnswerBtnPress = (answer: "True" | "False") => {
    let currentTriviaQuestion = triviaQuestions[currentIdx];
    let answeredCorrectly = currentTriviaQuestion.correct_answer === answer;

    let answeredTriviaQuestion: IAnsweredTriviaQuestion = {
      question: currentTriviaQuestion.question,
      givenAnswer: answer,
      answeredCorrectly: answeredCorrectly,
    };

    dispatch(addAnsweredTriviaQuestion({ answeredTriviaQuestion }));

    if (triviaQuestions.length === currentIdx + 1) {
      navigate(TriviaAppStackScreenNames.RESULTS_SCREEN);
      return;
    } else {
      setCurrentIdx(currentIdx + 1);
    }
  };

  return { currentIdx, triviaQuestions, onAnswerBtnPress };
};

export default QuizScreenLogic;
