import React from "react";
import { Text } from "react-native";
import { ITextProps } from "./TextView.interfaces";
import generateTextStyles from "./TextView.styles";

const TextView: React.FC<ITextProps> = ({
  text,
  fontFamily,
  size,
  color,
  customStyles,
}) => {
  const textStyles = generateTextStyles(fontFamily, size, color);

  return <Text style={[textStyles.text, customStyles]}>{text}</Text>;
};

export default TextView;
