import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardStack from "./DashBoardNavigation";
import TaskStack from "./TaskStackNavigation";
import TabSearch from "../assets/icons/Tab_Search.svg";
import ExhibitionStack from "./ExhibitionNavigation";
import SettingsStack from "./SettingsNavigation";
import InactiveCreate from "../assets/icons/inactive_create.svg";
import InactiveProfile from "../assets/icons/inactive_profile.svg";
import InactiveTasks from "../assets/icons/inactive_tasks.svg";
import InactiveMeal from "../assets/icons/inactive_meal.svg";
import ActiveMeal from "../assets/icons/active_meal .svg";
import ActiveTasks from "../assets/icons/active_tasks.svg";

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
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="CreateStack"
        component={DashboardStack}
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
        component={DashboardStack}
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
  );
};

export default TabNavigation;
