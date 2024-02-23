import * as React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateScreen from "../screens/Tabs/CreateScreen";
import TaskScreen from "../screens/Tabs/TaskScreen";
import MealPlansScreen from "../screens/Tabs/MealPlansScreen";
import ProfileScreen from "../screens/Tabs/ProfileScreen";
import IcFacebook from "../assets/icons/ic_facebook.svg";
import TabSearch from "../assets/icons/Tab_Search.svg";
import InactiveCreate from "../assets/icons/inactive_create.svg";
import InactiveTasks from "../assets/icons/inactive_tasks.svg";
import InactiveMeal from "../assets/icons/inactive_meal.svg";
import InactiveProfile from "../assets/icons/inactive_profile.svg";
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

export default function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Create" screenOptions={screenOptions}>
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused ? (
                 <View className="flex flex-col items-center gap-1">
                 <InactiveCreate/>
                 <Text>Create</Text>
                  </View>
                ) : (
                  <View className="flex flex-col items-center gap-1">
                  <InactiveCreate/>
                 <Text>Create</Text>
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={TaskScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused ? (
                   <View className="flex flex-col items-center gap-1">
                   <InactiveTasks/>
                  <Text>Tasks</Text>
                   </View>
                ) : (
                  <View className="flex flex-col items-center gap-1">
                  <InactiveTasks/>
                 <Text>Tasks</Text>
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
  name="Search"
  component={TaskScreen}
  options={{
    tabBarIcon: ({ focused }) => {
      return (
        <View className=" absolute -top-5" >
          {focused ? (
            <View className="flex flex-col items-center gap-1">
              <TabSearch/>
              
            </View>
          ) : (
            <View className="flex flex-col items-center gap-1">
              <TabSearch/>
             
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
                   <InactiveMeal/>
                  <Text>Meal Plans</Text>
                   </View>
                ) : (
                  <View className="flex flex-col items-center gap-1">
                  <InactiveMeal/>
                 <Text>Meal Plans</Text>
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
                  <InactiveProfile/>
                 <Text>Profile</Text>
                  </View>
                ) : (
                  <View className="flex flex-col items-center gap-1">
                  <InactiveProfile />
                 <Text>Profile</Text>
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
