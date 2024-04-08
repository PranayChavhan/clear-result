import { View, Text } from "react-native";
import React from "react";

const ScreenTitle = ({ children }) => {
  return (
    <View className={"p-4"}>
      <Text className="text-xl font-semibold text-black">{children}</Text>
    </View>
  );
};

export default ScreenTitle;
