import { StyleSheet } from "react-native";
import Colors from "../../../styles/Colors.enum";

const styles = StyleSheet.create({
  triviaQuestion: {
    marginTop: 25,
    width: "100%",
    backgroundColor: Colors.BLACK2,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.04,
    shadowRadius: 5,
  },
  badgeCorrect: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "rgba(39, 174, 96, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  badgeIncorrect: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "rgba(192, 57, 43, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  question: {
    marginTop: 10,
  },
});

export default styles;
