import React from "react";
import App from "./App";
import { registerRootComponent } from "expo";
import MainLogic from "./Main.logic";
import { Provider } from "react-redux";
import store from "./store/store";
import { StatusBar } from "react-native";

const Main: React.FC = () => {
  const { fontsLoaded } = MainLogic();

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <App />
    </Provider>
  );
};

export default registerRootComponent(Main);
