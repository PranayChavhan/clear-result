import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Checkbox from "../../components/ui/Checkbox";
import React, { useState } from "react";
import Screen from "../../components/ui/Screen";
import CrLogo from "../../assets/images/cr_logo.png";
import ImgDarkMode from "../../assets/images/theme_dark.png";
import ImgLightMode from "../../assets/images/theme_light.png";
import ImgSystemMode from "../../assets/images/theme_system.png";

import TopBar from "../../components/ui/TopBar";

const LanguageScreen = () => {
  const languages = [
    "English",
    "Hindi",
    "Marathi",
    "Gujarati",
    "Tamil",
    "Telugu",
    "Kannada",
    "Malayalam",
    "Bengali",
    "Punjabi",
  ];

  const [lang, setLang] = useState(languages[0]);
  return (
    <Screen>
      <TopBar logo={CrLogo} />

      <View className="p-4">
        <Text className="font-bold text-md">Language</Text>
      </View>

      <View className="flex border m-6 p-4 rounded-md border-gray-900 ">
        <Text className="text-xl font-medium">{lang}</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            setLang("English");
          }}
        >
          <Text className="text-blue-500 mt-2 italic ">Edit</Text>
        </TouchableWithoutFeedback>
      </View>
      <View className="flex flex-wrap justify-around gap-y-3 p-4 px-6">
        {/* Check box for languages */}
        {languages.map((language, i) => (
          <TouchableWithoutFeedback key={i}>
            <View className="flex p-2 flex-row gap-3 ">
              <Checkbox
                checked={lang === language}
                label={language}
                onChange={() => {
                  setLang(language);
                }}
              />
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

export default LanguageScreen;
