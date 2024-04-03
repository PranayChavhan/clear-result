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
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";

import Screen from "../../components/Screen";
import TopBar from "../../components/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcNewsLetter from "../../assets/icons/ic_news_letter.svg";
import SubscriptionCard from "../../components/SubscriptionCard";
import NewsLetterCard from "../../components/NewsLetterCard";
import UpcomingExCard from "../../components/UpcomingExCard";
import colors from "../../constants/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import IcBsCamera from "../../assets/icons/ic_bs_camera.svg";
import IcBsScan from "../../assets/icons/ic_bs_scan.svg";
import IcBsForm from "../../assets/icons/ic_bs_form.svg";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [bottomSheetModal, setBottomSheetModal] = useState(false);
  const bottomSheetRef = useRef(null);

  const navigation = useNavigation();

  useEffect(() => {
    bottomSheetRef && bottomSheetRef.current.close();
  }, []);

  const openBottomSheet = () => {
    bottomSheetRef.current.expand();
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "absolute",
          zIndex: 999,
          width: "100%",
          height: "100%",
          display: { bottomSheetModal } ? "none" : "flex",
        }}
      />

      <GestureHandlerRootView style={{ flex: 1 }}>
        <Screen>
          <TopBar logo={CrLogo} />

          <ScrollView
            classnName="px-2"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {/* Scrollable Cards. */}
            <ScrollView
              horizontal
              className="p-4 flex relative max-h-300 h-300 overflow-hidden"
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              <SubscriptionCard />
              <SubscriptionCard />
            </ScrollView>
            {/* Just For You */}
            <View className="flex flex-row  justify-start items-center px-4 gap-3">
              <IcNewsLetter />
              <Text
                className={"font-semibold text-lg"}
                style={{ fontFamily: "Poppins-Regular" }}
              >
                Just For You
              </Text>
            </View>
            <ScrollView
              horizontal
              className="p-4 flex relative max-h-300 h-300 overflow-hidden"
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              <NewsLetterCard />
              <NewsLetterCard />
            </ScrollView>
            {/* Upcoming Exibitions */}
            <ScrollView
              horizontal
              className="p-4 flex relative max-h-300 h-300 overflow-hidden"
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              <UpcomingExCard />
            </ScrollView>

            <TouchableOpacity
              onPress={openBottomSheet}
              className={` mx-3  mb-3 flex-row items-center justify-center p-3 rounded-lg bg-[${colors.primary}] `}
            >
              <Text
                className="text-white"
                style={{ fontFamily: "Poppins-Regular" }}
              >
                Invite Users
              </Text>
            </TouchableOpacity>

            <View className="pt-10 pb-16">
              <Text className="text-xs italic text-gray-300 text-center">
                Powered By Clear Results{" "}
              </Text>
            </View>
          </ScrollView>

          {/* Bottom Sheet */}

          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={["40%"]}
            onClose={() => setBottomSheetModal(false)}
            enablePanDownToClose
          >
            <BottomSheetView className="p-12 flex flex-1 items-center justify-center">
              <Text className="font-semibold text-center text-lg">
                Add Lead
              </Text>

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
        </Screen>
      </GestureHandlerRootView>
    </>
  );
};

export default HomeScreen;
