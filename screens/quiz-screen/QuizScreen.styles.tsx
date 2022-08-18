import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors.enum";

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 22,
    backgroundColor: Colors.BLACK,
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  trueBtn: {
    marginTop: 30,
  },
  falseBtn: {
    marginTop: 25,
  },
  totalCount: {
    marginTop: 30,
  },
});

export default styles;
