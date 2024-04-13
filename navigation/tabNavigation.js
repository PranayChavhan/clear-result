import { Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import DashboardStack from "./DashBoardNavigation";
import TaskStack from "./TaskStackNavigation";
import TabSearch from "../assets/icons/Tab_Search.svg";
import ExhibitionStack from "./ExhibitionNavigation";
import SettingsStack from "./SettingsNavigation";
import InactiveCreate from "../assets/icons/inactive_create.svg";
import InactiveProfile from "../assets/icons/inactive_profile.svg";
import InactiveTasks from "../assets/icons/inactive_tasks.svg";
import InactiveMeal from "../assets/icons/ic_exhibition.svg";
import ActiveMeal from "../assets/icons/ic_exhibition.svg";
import ActiveTasks from "../assets/icons/active_tasks.svg";
import SearchScreen from "../screens/tabs/SearchScreen";

import IcBsCamera from "../assets/icons/ic_bs_camera.svg";
import IcBsScan from "../assets/icons/ic_bs_scan.svg";
import IcBsForm from "../assets/icons/ic_bs_form.svg";

import React, { useState, useEffect, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";


const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 80,
    background: "#ffff",
  },
};

const TabNavigation = () => {

  const [bottomSheetModal, setBottomSheetModal] = useState(false);
  const bottomSheetRef = useRef(null);

  const navigation = useNavigation();

  const openBottomSheet = () => {
    bottomSheetRef.current.expand();
    setBottomSheetModal(true);
  }

  return (
    <>
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="HomeStack"
        component={DashboardStack}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            console.log("Hello")
            //Open Modal i.e. Bottom sheet
            openBottomSheet();
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  className={`flex flex-col items-center gap-1 ${
                    focused ? "text-gray-800" : "text-gray-500"
                  }`}
                >
                  <InactiveCreate />
                  <Text
                    className={`${focused ? "text-gray-800" : "text-gray-500"}`}
                  >
                    Create
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="TaskStack"
        component={TaskStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  className={`flex flex-col items-center gap-1 ${
                    focused ? "text-gray-800" : "text-gray-500"
                  }`}
                >
                  {focused ? <ActiveTasks /> : <InactiveTasks />}
                  <Text
                    className={`${focused ? "text-gray-800" : "text-gray-500"}`}
                  >
                    Task
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="SeachStack"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className=" absolute -top-5">
                {focused ? (
                  <View className="flex flex-col items-center gap-1">
                    <TabSearch />
                  </View>
                ) : (
                  <View className="flex flex-col items-center gap-1">
                    <TabSearch />
                  </View>
                )}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="ExhibitionStack"
        component={ExhibitionStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View className={`flex flex-col items-center gap-1`}>
                  {focused ? <ActiveMeal /> : <InactiveMeal />}
                  <Text
                    className={`${focused ? "text-gray-800" : "text-gray-500"}`}
                  >
                    Exhibition
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View className={`flex flex-col items-center gap-1 `}>
                  <InactiveProfile />
                  <Text
                    className={`${
                      focused ? "text-gray-800 font-medium" : "text-gray-500"
                    }`}
                  >
                    Profile
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
      

      {/* Bottom Sheet */}
      <BottomSheet
          ref={bottomSheetRef}
          snapPoints={["30%"]}
          index={-1}
          onClose={() => setBottomSheetModal(false)}
          backdropComponent={({ style }) => (
           bottomSheetModal && <View style={[style, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
          )}
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
                onPress={
                  () =>{ 
                    navigation.navigate("Camera"),
                    bottomSheetRef.current.close()}}
                className={`p-2 bg-sky-100 w-20 h-20 flex items-center justify-center rounded-3xl`}
              >
                <IcBsCamera />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  bottomSheetRef.current.close();
                }}
                className={`py-3   bg-sky-100 w-20 h-20 flex items-center justify-center rounded-3xl`}
              >
                <IcBsScan />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("UserInfoForm");
                  bottomSheetRef.current.close();
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

export default TabNavigation;
