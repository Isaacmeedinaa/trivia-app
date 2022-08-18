import { StyleSheet } from "react-native";
import Colors from "../../../styles/Colors.enum";

const styles = StyleSheet.create({
  card: {
    marginTop: 50,
    width: "100%",
    backgroundColor: Colors.BLACK2,
    justifyContent: "center",
    alignItems: "center",
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
  question: {
    textAlign: "center",
  },
});

export default styles;
