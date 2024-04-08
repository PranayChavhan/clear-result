import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import CrLogo from "../../assets/images/cr_logo.png";
import ImgDarkMode from "../../assets/images/theme_dark.png";
import ImgLightMode from "../../assets/images/theme_light.png";
import ImgSystemMode from "../../assets/images/theme_system.png";

import TopBar from "../../components/ui/TopBar";

const ThemeScreen = () => {
  const themes = [
    {
      name: "light",
      img: ImgLightMode,
    },
    {
      name: "dark",
      img: ImgDarkMode,
    },
    {
      name: "system",
      img: ImgSystemMode,
    },
  ];
  return (
    <Screen>
      <TopBar logo={CrLogo} />

      <View className="p-4">
        <Text className="font-bold text-md">Theme</Text>
        <Text className="text-gray-500 text-xs mt-2"> Mode</Text>
      </View>

      <View className="flex flex-row w-full flex-wrap justify-around gap-y-3">
        {themes.map((theme, i) => (
          <TouchableWithoutFeedback key={i}>
            <View className="flex my-3 items-center justify-start">
              <Image source={theme.img} style={{}} />
              <Text className="text-gray-500 text-xs mt-2 capitalize">
                {theme.name} Mode
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
      <TouchableWithoutFeedback>
        <View className="border m-3 border-blue-500 p-4 rounded-xl mt-4 items-center justify-center">
          <Text className="text-blue-500 text-center">Save Changes</Text>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({});
