import React from "react";
import ResultsScreenLogic from "./ResultsScreen.logic";
import styles from "./ResultsScreen.styles";
import { ScrollView, SafeAreaView, View } from "react-native";
import TextView from "../../components/common/text/TextView.view";
import Colors from "../../styles/Colors.enum";
import Fonts from "../../styles/Fonts.enum";
import PrimaryButtonView from "../../components/common/primary-button/PrimaryButton.view";

const ResultsScreenView: React.FC = () => {
  const {
    onPlayAgainPress,
    renderAnsweredTriviaQuestions,
    correctCount,
    answeredTriviaQuestions,
  } = ResultsScreenLogic();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <TextView
          text={`You scored\n${correctCount} out of ${answeredTriviaQuestions.length}`}
          color={Colors.WHITE}
          size={22}
          fontFamily={Fonts.POPPINS_BOLD}
          customStyles={styles.score}
        />
        <View style={styles.questionsContainer}>
          {renderAnsweredTriviaQuestions()}
        </View>
        <PrimaryButtonView
          buttonText="Play Again?"
          onPress={onPlayAgainPress}
          isLoading={false}
          customStyles={styles.btn}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultsScreenView;
