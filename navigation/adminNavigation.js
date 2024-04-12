import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabSearch from "../assets/icons/Tab_Search.svg";
import InactiveCreate from "../assets/icons/inactive_create.svg";
import InactiveProfile from "../assets/icons/inactive_profile.svg";
import InactiveTasks from "../assets/icons/inactive_tasks.svg";
import InactiveMeal from "../assets/icons/ic_exhibition.svg";
import ActiveMeal from "../assets/icons/ic_exhibition.svg";
import ActiveTasks from "../assets/icons/active_tasks.svg";
import SearchScreen from "../screens/tabs/SearchScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import DashboardScreen from "../screens/admin/DashboardScreen";

import SettingsStack from "./SettingsNavigation";
import ExhibitionStack from "./ExhibitionNavigation";
import AdminTaskScreen from "../screens/admin/AdminTaskScreen";
import SalesRepresentative from "../screens/admin/SalesRepresentative";
// import DashboardStack from "./DashBoardNavigation";
// import TaskStack from "./TaskStackNavigation";

const Tab = createBottomTabNavigator();
const Dashboard = createNativeStackNavigator();


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


const DashboardTabNavigation = () => {
    return (
        <Dashboard.Navigator screenOptions={screenOptions}>
            <Dashboard.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{headerShown: false}}
            />
            <Dashboard.Screen
                name="SalesRepresentative"
                component={SalesRepresentative}
                options={{headerShown: false}}
            />
        </Dashboard.Navigator>
    );
};


// Tab Navigation
const AdminTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="CreateStack"
        component={DashboardTabNavigation}
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
        component={AdminTaskScreen}
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
  );
};

export default AdminTabNavigation;
