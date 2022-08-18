import { StyleProp, ViewStyle } from "react-native";

export interface IPrimaryButtonProps {
  buttonText: string;
  onPress: () => void;
  isLoading: boolean;
  customStyles?: StyleProp<ViewStyle>;
}
