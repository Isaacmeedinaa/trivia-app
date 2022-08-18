import { StyleSheet } from "react-native";
import Fonts from "../../styles/Fonts.enum";

const generateTextStyles = (fontFamily: Fonts, size: number, color: string) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: fontFamily,
      fontSize: size,
      color: color,
    },
  });

  return styles;
};

export default generateTextStyles;
