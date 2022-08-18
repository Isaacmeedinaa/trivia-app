import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TriviaAppStack from "./trivia-app-stack/TriviaAppStack";

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <TriviaAppStack />
    </NavigationContainer>
  );
};

export default Navigator;
