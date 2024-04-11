import { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Touchable,
} from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import CrLogo from "../../assets/images/cr_logo.png";
import ImgDarkMode from "../../assets/images/theme_dark.png";
import ImgLightMode from "../../assets/images/theme_light.png";
import ImgSystemMode from "../../assets/images/theme_system.png";

import TopBar from "../../components/ui/TopBar";
import Slider from "@react-native-community/slider";

const FontsScreen = () => {
  const [headingSize, setHeadingSize] = useState(16);
  const [descSize, setDescSize] = useState(8);

  const [sliderValue, setSliderValue] = useState(0);

  const onValueChange = (value) => {
    setSliderValue(value);
    setHeadingSize(16 + value / 4);
    setDescSize(8 + value / 4);
  };

  const fonts = [
    "Poppins-Regular",
    "Roboto-Regular",
    "Montserrat-Regular",
    "Lato-Regular",
    "OpenSans-Regular",
    "Inter-Regular",
  ];

  return (
    <Screen>
      <TopBar logo={CrLogo} />

      <View className="p-4">
        <Text className="font-bold text-md">Theme</Text>
      </View>
      <ScrollView>
        <ScrollView className="border border-black rounded-md mx-6 p-4 h-56">
          <Text
            className={`text-gray-800  mt-2 font-semibold`}
            style={{ fontSize: headingSize }}
          >
            Heading Text
          </Text>
          <Text
            className={`text-gray-800  mt-2 font-medium`}
            style={{ fontSize: descSize }}
          >
            Heading Text
          </Text>
          <Text
            className={`text-gray-800  mt-2 font-medium`}
            style={{ fontSize: descSize }}
          >
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </Text>
        </ScrollView>
        {/* Font Selection */}
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          className="pt-4 pl-7 flex gap-3 relativeoverflow-hidden"
        >
          {fonts.map((font, i) => (
            <TouchableWithoutFeedback
              key={i}
              onPress={() => setHeadingSize(28)}
            >
              <View className="flex my-6 items-center justify-center mx-2">
                <View className="p-4 px-8 border border-gray-900 rounded-md h-20">
                  <Text
                    className="font-medium text-5xl"
                    style={{ fontFamily: font }}
                  >
                    Aa
                  </Text>
                </View>
                <Text className="text-xs capitalize py-2">
                  {font.split("-")[0]}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>

        {/* Font Size */}
        <View className="p-4">
          <Text className="font-bold text-md">Font Size</Text>
          <View className="py-3">
            <Slider
              style={{
                zIndex: 1,
              }}
              minimumValue={0}
              maximumValue={50}
              value={sliderValue}
              onValueChange={onValueChange}
              minimumTrackTintColor="transparent"
              maximumTrackTintColor="gray"
              thumbTintColor="#007AFF"
            />
          </View>
        </View>
        {/* Apply  Button */}
        <TouchableWithoutFeedback>
          <View className="border m-3 border-blue-500 p-4 rounded-xl mt-4 items-center justify-center">
            <Text className="text-blue-500 text-center">Apply Changes</Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Screen>
  );
};

export default FontsScreen;
