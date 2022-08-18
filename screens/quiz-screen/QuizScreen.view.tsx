import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import QuizScreenLogic from "./QuizScreen.logic";
import styles from "./QuizScreen.styles";
import TextView from "../../components/common/text/TextView.view";
import Colors from "../../styles/Colors.enum";
import Fonts from "../../styles/Fonts.enum";
import TriviaQuestionCardView from "../../components/quiz-screen/trivia-question-card/TriviaQuestionCard.view";
import PrimaryButtonView from "../../components/common/primary-button/PrimaryButton.view";

const QuizScreenView: React.FC = () => {
  const { currentIdx, triviaQuestions, onAnswerBtnPress } = QuizScreenLogic();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {triviaQuestions.length === 0 ? null : (
        <View style={styles.screen}>
          <TextView
            text={`${triviaQuestions[currentIdx].category}`}
            size={22}
            color={Colors.WHITE}
            fontFamily={Fonts.POPPINS_BOLD}
          />
          <TriviaQuestionCardView
            triviaQuestion={triviaQuestions[currentIdx]}
          />
          <PrimaryButtonView
            buttonText="True"
            onPress={() => onAnswerBtnPress("True")}
            isLoading={false}
            customStyles={styles.trueBtn}
          />
          <PrimaryButtonView
            buttonText="False"
            onPress={() => onAnswerBtnPress("False")}
            isLoading={false}
            customStyles={styles.falseBtn}
          />
          <TextView
            text={`${currentIdx + 1} out of ${triviaQuestions.length}`}
            size={16}
            color={Colors.WHITE}
            fontFamily={Fonts.POPPINS_MEDIUM}
            customStyles={styles.totalCount}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default QuizScreenView;
