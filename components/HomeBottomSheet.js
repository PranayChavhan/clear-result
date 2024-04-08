import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Platform,
  ImageBackground,
} from "react-native";

import React, { useState, useEffect, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import IcBsCamera from "../assets/icons/ic_bs_camera.svg";
import IcBsScan from "../assets/icons/ic_bs_scan.svg";
import IcBsForm from "../assets/icons/ic_bs_form.svg";
import HomeScreen from "../screens/dashboard/HomeScreen";
const HomeBottomSheet = () => {
  const [bottomSheetModal, setBottomSheetModal] = useState(false);
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    bottomSheetRef && bottomSheetRef.current.close();
  }, []);

  const openBottomSheet = () => {
    bottomSheetRef.current.expand();
  };

  return (
    <>
      <HomeScreen />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["40%"]}
        index={0}
        onClose={() => setBottomSheetModal(false)}
        backgroundStyle={{
          backgroundColor: "rgba(255, 255, 255,1)",
        }}
        style={{
          shadowColor: "#000",

          shadowOffset: { width: 0, height: 10 }, // Adjust as needed
          shadowOpacity: 1,
          shadowRadius: 4,
        }}
        enablePanDownToClose
      >
        <BottomSheetView className="p-12 flex flex-1 items-center justify-center">
          <Text className="font-semibold text-center text-lg">Add Lead</Text>

          <Text className="text-center text-gray-400 mt-2">
            Please select one of the options for adding the lead.
          </Text>

          <View className="flex flex-row gap-x-6 py-8 items-center justify-center">
            <TouchableOpacity
              onPress={() => navigation.navigate("Camera")}
              className={`p-2 bg-sky-100 w-20 h-20 flex items-center justify-center rounded-3xl`}
            >
              <IcBsCamera />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CreateTask");
              }}
              className={`py-3   bg-sky-100 w-20 h-20 flex items-center justify-center rounded-3xl`}
            >
              <IcBsScan />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("UserInfoForm");
              }}
              className={`py-3   bg-sky-100 h-20 w-20 flex items-center justify-center rounded-3xl`}
            >
              <IcBsForm />
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default HomeBottomSheet;
