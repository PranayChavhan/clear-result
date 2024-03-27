import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import Screen from "../../components/Screen";
import CrLogo from "../../assets/images/cr_logo.png";
import ImgDarkMode from "../../assets/images/theme_dark.png";
import ImgLightMode from "../../assets/images/theme_light.png";
import ImgSystemMode from "../../assets/images/theme_system.png";

import TopBar from "../../components/TopBar";

const PushNotificationScreen = () => {
  // toggle w
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Screen>
      <TopBar logo={CrLogo} />

      <View className="p-4">
        <Text className="font-bold text-md">Push Notification</Text>
      </View>

      <View className="px-4  flex gap-3">
        <View className="flex flex-row w-full  items-center justify-between">
          <Text className="text-gray-700">Task Remainder</Text>
          <Switch
            trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
            thumbColor={isEnabled ? "white" : "white"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <View className="px-4  flex gap-3">
        <View className="flex flex-row w-full  items-center justify-between">
          <Text className="text-gray-700">Exibition Updates</Text>
          <Switch
            trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
            thumbColor={isEnabled ? "white" : "white"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <View className="px-4  flex gap-3">
        <View className="flex flex-row w-full  items-center justify-between">
          <Text className="text-gray-700">Prospects/Customer Updates</Text>
          <Switch
            trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
            thumbColor={isEnabled ? "white" : "white"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </Screen>
  );
};

export default PushNotificationScreen;

const styles = StyleSheet.create({});
