import { Text, View } from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import HomeScreen from "../dashboard/HomeScreen";
import CrLogo from "../../assets/images/cr_logo.png";
import InputFeild from "../../components/ui/InputFeild";

const SearchScreen = () => {
  return (
    <Screen>
      <TopBar logo={CrLogo} />
      <View className="px-4">
        <InputFeild />
      </View>
    </Screen>
  );
};

export default SearchScreen;
