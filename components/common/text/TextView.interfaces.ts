import { StyleProp, TextStyle } from "react-native";
import Fonts from "../../styles/Fonts.enum";

export interface ITextProps {
  text: string;
  fontFamily: Fonts;
  color: string;
  size: number;
  customStyles?: StyleProp<TextStyle>;
}
