import React from "react";
import styles from "./TriviaQuestionCard.styles";
import { ITriviaQuestionCardProps } from "./TriviaQuestionCard.interfaces";
import { View } from "react-native";
import TextView from "../../common/text/TextView.view";
import Colors from "../../../styles/Colors.enum";
import Fonts from "../../../styles/Fonts.enum";

const TriviaQuestionCardView: React.FC<ITriviaQuestionCardProps> = ({
  triviaQuestion,
}) => {
  return (
    <View style={styles.card}>
      <TextView
        text={triviaQuestion.question}
        color={Colors.WHITE}
        fontFamily={Fonts.POPPINS_MEDIUM}
        size={18}
        customStyles={styles.question}
      />
    </View>
  );
};

export default TriviaQuestionCardView;
