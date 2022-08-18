import { StyleSheet } from "react-native";
import Colors from "../../../styles/Colors.enum";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.PURPLE,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.PURPLE,
    shadowOffset: {
      width: 3,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  loadingSpinner: {
    width: 25,
    height: 25,
  },
});

export default styles;
