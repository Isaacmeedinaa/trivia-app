import React from "react";
import styles from "./AnsweredTriviaQuestionCard.styles";
import { IAnsweredTriviaQuestionsCardProps } from "./AnsweredTriviaQuestionCard.interfaces";
import { View } from "react-native";
import TextView from "../../common/text/TextView.view";
import Colors from "../../../styles/Colors.enum";
import Fonts from "../../../styles/Fonts.enum";

const AnsweredTriviaQuestionCardView: React.FC<
  IAnsweredTriviaQuestionsCardProps
> = ({ answeredTriviaQuestion }) => {
  return (
    <View style={styles.triviaQuestion}>
      <View
        style={
          answeredTriviaQuestion.answeredCorrectly
            ? styles.badgeCorrect
            : styles.badgeIncorrect
        }
      >
        <TextView
          text={
            answeredTriviaQuestion.answeredCorrectly ? "Correct" : "Incorrect"
          }
          color={
            answeredTriviaQuestion.answeredCorrectly ? Colors.GREEN : Colors.RED
          }
          size={12}
          fontFamily={Fonts.POPPINS_SEMIBOLD}
        />
      </View>
      <TextView
        text={answeredTriviaQuestion.question}
        color={Colors.WHITE}
        size={16}
        fontFamily={Fonts.POPPINS_MEDIUM}
        customStyles={styles.question}
      />
    </View>
  );
};

export default AnsweredTriviaQuestionCardView;
