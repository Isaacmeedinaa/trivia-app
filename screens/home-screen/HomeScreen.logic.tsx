import useDispatchAction from "../../store/hooks/useDispatchAction.hook";
import useStateSelector from "../../store/hooks/useStateSelector.hook";
import { getTriviaQuestions } from "../../store/actions/triviaQuestions.action-creators";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import TriviaAppStackParamList from "../../navigation/trivia-app-stack/TriviaAppStack.params";

const HomeScreenLogic = () => {
  const { navigate } = useNavigation<NavigationProp<TriviaAppStackParamList>>();
  const dispatch = useDispatchAction();
  const isFetchingTriviaQuestions = useStateSelector(
    (s) => s.triviaQuestionsReducer.isFetchingTriviaQuestions === "loading"
  );

  const onStartGamePress = () => {
    dispatch(getTriviaQuestions(navigate));
  };

  return { onStartGamePress, isFetchingTriviaQuestions };
};

export default HomeScreenLogic;
