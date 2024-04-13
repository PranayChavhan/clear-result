import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Screen from "../../components/ui/Screen";
import CrLogo from "../../assets/images/cr_logo.png";
import ImgDarkMode from "../../assets/images/theme_dark.png";
import ImgLightMode from "../../assets/images/theme_light.png";
import ImgSystemMode from "../../assets/images/theme_system.png";

import TopBar from "../../components/ui/TopBar";

const ThemeScreen = () => {
  const [selected, setSelected] = useState(1); // ["light", "dark", "system"
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

      <ScrollView>
        <View className="px-4 py-2">
          <Text className="font-bold text-md">Theme</Text>
          <Text className="text-gray-500 text-xs mt-2"> Mode</Text>
        </View>

        <View className="flex flex-row w-full flex-wrap justify-around gap-y-3">
          {themes.map((theme, i) => (
            <TouchableWithoutFeedback key={i} onPress={() => setSelected(i)}>
              <View className="flex my-3 items-center justify-start">
                <View
                  className={`${
                    selected == i
                      ? "border border-amber-400 p-1 rounded-[32px]"
                      : "border border-gray-100 p-1 rounded-[32px]"
                  }`}
                >
                  <Image source={theme.img} style={{}} resizeMode="contain" />
                </View>
                <Text className="text-gray-500 text-xs mt-2 capitalize">
                  {theme.name} Mode
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
        <TouchableWithoutFeedback>
          <View className="border mb-40 m-3 border-blue-500 p-4 rounded-xl mt-4 items-center justify-center">
            <Text className="text-blue-500 text-center">Save Changes</Text>
          </View>
        </TouchableWithoutFeedback>

        <View className="mb-32 mt-12">
              <Text className="text-gray-400 text-center italic text-sm text-light">
                Powered By ClearResult
              </Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({});
