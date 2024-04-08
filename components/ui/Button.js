import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ children, varient, onPress, className }) => {
  console.log("Button -> varient", varient);
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`py-3 border-[1px] flex-1 mx-1 border-[#2F80ED] ${
        varient == "outline" ? "bg-white" : "bg-[#2F80ED]"
      }  rounded-xl `}
    >
      <Text
        className={`text-[16px] font-semibold text-center ${
          varient != "outline" ? "text-white" : "text-[#2F80ED]"
        }`}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
