import React from "react";
import { IPrimaryButtonProps } from "./PrimaryButton.interfaces";
import { TouchableOpacity } from "react-native";
import styles from "./PrimaryButton.styles";
import TextView from "../text/TextView.view";
import Fonts from "../../../styles/Fonts.enum";
import Colors from "../../../styles/Colors.enum";
import Lottie from "lottie-react-native";
import LoadingSpinner from "../../../assets/animations/LoadingSpinner.json";

const PrimaryButtonView: React.FC<IPrimaryButtonProps> = ({
  onPress,
  customStyles,
  buttonText,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, customStyles]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {isLoading ? (
        <Lottie
          style={styles.loadingSpinner}
          source={LoadingSpinner}
          loop
          autoPlay
        />
      ) : (
        <TextView
          text={buttonText}
          fontFamily={Fonts.POPPINS_SEMIBOLD}
          size={18}
          color={Colors.WHITE}
        />
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButtonView;
