import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors.enum";

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
    paddingRight: 22,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {},
  subtitle: {
    marginTop: 20,
    textAlign: "center",
  },
  subtitleTwo: {
    marginTop: 20,
    textAlign: "center",
  },
  btn: {
    marginTop: 100,
  },
});

export default styles;
