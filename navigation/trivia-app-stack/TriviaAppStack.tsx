import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TriviaAppStackParamList from "./TriviaAppStack.params";
import TriviaAppStackScreenNames from "./TriviaAppStack.screen-names";

import HomeScreenView from "../../screens/home-screen/HomeScreen.view";
import QuizScreenView from "../../screens/quiz-screen/QuizScreen.view";
import ResultsScreenView from "../../screens/results-screen/ResultsScreen.view";

const AppStack = createNativeStackNavigator<TriviaAppStackParamList>();

const TriviaAppStack = () => {
  return (
    <AppStack.Navigator
      initialRouteName={TriviaAppStackScreenNames.HOME_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen
        name={TriviaAppStackScreenNames.HOME_SCREEN}
        component={HomeScreenView}
      />
      <AppStack.Screen
        name={TriviaAppStackScreenNames.QUIZ_SCREEN}
        component={QuizScreenView}
      />
      <AppStack.Screen
        name={TriviaAppStackScreenNames.RESULTS_SCREEN}
        component={ResultsScreenView}
      />
    </AppStack.Navigator>
  );
};

export default TriviaAppStack;
