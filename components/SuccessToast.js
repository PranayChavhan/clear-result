import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IcClose from "../assets/icons/ic_close_x.svg";

const SuccessToast = ({ text, onPress, color }) => {
    const bg = color ||"emerald";
  return (
    <View className={`p-3 rounded-xl my-4 relative m-3 bg-${color}-500 flex flex-row items-center justify-between h-14`}>
      <View className={`h-10 w-1 bg-${bg}-200 absolute rounded-full top-2`}></View>
      <Text className="text-xs text-white ">{text} </Text>
      <TouchableOpacity className="" onPress={onPress}>
        <IcClose />
      </TouchableOpacity>
    </View>
  );
};

export default SuccessToast;
