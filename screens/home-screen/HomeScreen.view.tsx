import React from "react";
import styles from "./HomeScreen.styles";
import HomeScreenLogic from "./HomeScreen.logic";
import { IHomeScreenProps } from "./HomeScreen.interfaces";
import { SafeAreaView, View } from "react-native";
import TextView from "../../components/common/text/TextView.view";
import Colors from "../../styles/Colors.enum";
import Fonts from "../../styles/Fonts.enum";
import PrimaryButtonView from "../../components/common/primary-button/PrimaryButton.view";

const HomeScreenView: React.FC<IHomeScreenProps> = ({}) => {
  const { onStartGamePress, isFetchingTriviaQuestions } = HomeScreenLogic();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.screen}>
        <View style={styles.textContainer}>
          <TextView
            text={`Welcome to the\nTrivia Challenge!`}
            size={28}
            color={Colors.WHITE}
            fontFamily={Fonts.POPPINS_BOLD}
            customStyles={styles.title}
          />
          <TextView
            text="You will be presented with 10 True or False questions"
            size={20}
            color={Colors.GRAY}
            fontFamily={Fonts.POPPINS_SEMIBOLD}
            customStyles={styles.subtitle}
          />
          <TextView
            text="Can you score 100%? 🤔"
            size={20}
            color={Colors.GRAY}
            fontFamily={Fonts.POPPINS_SEMIBOLD}
            customStyles={styles.subtitleTwo}
          />
        </View>
        <PrimaryButtonView
          buttonText="Start Game"
          onPress={onStartGamePress}
          customStyles={styles.btn}
          isLoading={isFetchingTriviaQuestions}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreenView;
