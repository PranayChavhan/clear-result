import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Checkbox from "../../components/ui/Checkbox";
import React, { useState } from "react";
import Screen from "../../components/ui/Screen";
import CrLogo from "../../assets/images/cr_logo.png";
import { useNavigation } from "@react-navigation/native";

import TopBar from "../../components/ui/TopBar";
import Button from "../../components/ui/Button";

const LanguageScreen = () => {
  const navigation = useNavigation();
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

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />
      <ScrollView>
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

        {/* Apply  Button */}
        <View className="px-4">
          <Button varient={"outline"} onPress={handleBack}>
            Apply Changes
          </Button>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default LanguageScreen;
