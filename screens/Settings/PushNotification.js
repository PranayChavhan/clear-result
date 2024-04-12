import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import Screen from "../../components/ui/Screen";
import CrLogo from "../../assets/images/cr_logo.png";
import ImgDarkMode from "../../assets/images/theme_dark.png";
import ImgLightMode from "../../assets/images/theme_light.png";
import ImgSystemMode from "../../assets/images/theme_system.png";

import TopBar from "../../components/ui/TopBar";

const PushNotificationScreen = () => {
  // toggle w
  const [isEnabled1, setIsEnabled1] = React.useState(false);

  const [isEnabled2, setIsEnabled2] = React.useState(false);

  const [isEnabled3, setIsEnabled3] = React.useState(false);

  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);

  return (
    <Screen>
      <TopBar logo={CrLogo} />

      <View className="p-4">
        <Text className="font-bold text-md">Push Notification</Text>
      </View>

      <View className="px-4  flex gap-3">
        <View className="flex flex-row w-full  items-center justify-between">
          <Text className="text-gray-700">Task Reminder</Text>
          <Switch
            trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
            thumbColor={isEnabled1 ? "white" : "white"}
            onValueChange={toggleSwitch1}
            value={isEnabled1}
          />
        </View>
      </View>

      <View className="px-4  flex gap-3">
        <View className="flex flex-row w-full  items-center justify-between">
          <Text className="text-gray-700">Exhibition Updates</Text>
          <Switch
            trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
            thumbColor={isEnabled2 ? "white" : "white"}
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
      </View>

      <View className="px-4  flex gap-3">
        <View className="flex flex-row w-full  items-center justify-between">
          <Text className="text-gray-700">Prospects/Customer Updates</Text>
          <Switch
            trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
            thumbColor={isEnabled3 ? "white" : "white"}
            onValueChange={toggleSwitch3}
            value={isEnabled3}
          />
        </View>
      </View>
    </Screen>
  );
};

export default PushNotificationScreen;

const styles = StyleSheet.create({});
