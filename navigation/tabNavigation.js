import * as React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateScreen from "../screens/Tabs/CreateScreen";
import TaskScreen from "../screens/Tabs/TaskScreen";
import MealPlansScreen from "../screens/Tabs/MealPlansScreen";
import ProfileScreen from "../screens/Tabs/ProfileScreen";
import TabSearch from "../assets/icons/Tab_Search.svg";
import InactiveCreate from "../assets/icons/inactive_create.svg";
import InactiveTasks from "../assets/icons/inactive_tasks.svg";
import InactiveMeal from "../assets/icons/inactive_meal.svg";
import InactiveProfile from "../assets/icons/inactive_profile.svg";
import ActiveTasks from "../assets/icons/active_tasks.svg";
import SearchScreen from "../screens/Tabs/SearchScreen";
import HomeScreen from "../screens/Dashboard/HomeScreen";
import CreateTaskScreen from "../screens/Tasks/CreateTaskScreen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubscriptionScreen from "../screens/Tasks/SubscriptionScreen";
import PaymentModeScreen from "../screens/Tasks/PaymentModeScreen";
const Tab = createBottomTabNavigator();
const TaskStack = createNativeStackNavigator();

const TaskStackScreen = () => (
  <TaskStack.Navigator>
    <TaskStack.Screen name="Tasks" component={TaskScreen} options={{ headerShown: false }}/>
    <TaskStack.Screen name="CreateTask" component={CreateTaskScreen} options={{ headerShown: false }}/>
    <TaskStack.Screen name="SubscriptionPackages" component={SubscriptionScreen} options={{ headerShown: false }}/>
    <TaskStack.Screen name="PaymentMode" component={PaymentModeScreen} options={{ headerShown: false }}/>
  </TaskStack.Navigator>
);

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

export default function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Search" screenOptions={screenOptions}>
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused ? (
                  <View className="flex flex-col items-center gap-1">
                    <InactiveCreate />
                    <Text >Create</Text>
                  </View>
                ) : (
                  <View className="flex flex-col items-center gap-1">
                    <InactiveCreate />
                    <Text className="text-gray-600">Create</Text>
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={TaskStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused ? (
                  <View className="flex flex-col items-center gap-1">
                    <ActiveTasks />
                    <Text >Tasks</Text>
                  </View>
                ) : (
                  <View className="flex flex-col items-center gap-1">
                    <InactiveTasks />
                    <Text className="text-gray-600">Tasks</Text>
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className=" absolute -top-5" >
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
        name="Meal Plans"
        component={MealPlansScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused ? (
                  <View className="flex flex-col items-center gap-1">
                    <InactiveMeal />
                    <Text >More</Text>
                  </View>
                ) : (
                  <View className="flex flex-col items-center gap-1">
                    <InactiveMeal />
                    <Text className="text-gray-600">Meal Plans</Text>
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className=" ">
                {focused ? (
                  <View className="flex flex-col items-center gap-1">
                    <InactiveProfile />
                    <Text>Profile</Text>
                  </View>
                ) : (
                  <View className="flex flex-col items-center gap-1">
                    <InactiveProfile />
                    <Text className="text-gray-600">Profile</Text>
                  </View>
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
