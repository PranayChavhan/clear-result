import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { useFonts } from "expo-font";

function Screen({ children, style }) {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../assets/fonts/Inter/Inter-Black.ttf"),
    "Inter-Bold": require("../../assets/fonts/Inter/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("../../assets/fonts/Inter/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("../../assets/fonts/Inter/Inter-ExtraLight.ttf"),
    "Inter-Light": require("../../assets/fonts/Inter/Inter-Light.ttf"),
    "Inter-Medium": require("../../assets/fonts/Inter/Inter-Medium.ttf"),
    "Inter-Regular": require("../../assets/fonts/Inter/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../../assets/fonts/Inter/Inter-SemiBold.ttf"),
    "Inter-Thin": require("../../assets/fonts/Inter/Inter-Thin.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    "Poppins-Black": require("../../assets/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-ExtraLight": require("../../assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../../assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-Thin": require("../../assets/fonts/Poppins/Poppins-Thin.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Light": require("../../assets/fonts/Roboto/Roboto-Light.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Roboto/Roboto-Thin.ttf"),
    "Roboto-Black": require("../../assets/fonts/Roboto/Roboto-Black.ttf"),
    "OpenSans-Bold": require("../../assets/fonts/OpenSans/OpenSans-Bold.ttf"),
    "OpenSans-Regular": require("../../assets/fonts/OpenSans/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("../../assets/fonts/OpenSans/OpenSans-SemiBold.ttf"),
    "Montserrat-Bold": require("../../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("../../assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "Lato-Bold": require("../../assets/fonts/Lato/Lato-Bold.ttf"),
    "Lato-Regular": require("../../assets/fonts/Lato/Lato-Regular.ttf"),
    "Lato-Light": require("../../assets/fonts/Lato/Lato-Light.ttf"),
    "Lato-Thin": require("../../assets/fonts/Lato/Lato-Thin.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
