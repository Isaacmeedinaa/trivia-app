import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors.enum";

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  scrollViewContent: {
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 22,
  },
  score: {
    textAlign: "center",
  },
  questionsContainer: {
    marginTop: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    marginTop: 30,
  },
});

export default styles;
