import * as React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateScreen from "../screens/tabs/CreateScreen";
import TaskScreen from "../screens/tabs/TaskScreen";
import ProfileScreen from "../screens/tabs/ProfileScreen";
import TabSearch from "../assets/icons/Tab_Search.svg";
import InactiveCreate from "../assets/icons/inactive_create.svg";
import InactiveTasks from "../assets/icons/inactive_tasks.svg";
import InactiveMeal from "../assets/icons/inactive_meal.svg";
import ActiveMeal from "../assets/icons/active_meal .svg";
import InactiveProfile from "../assets/icons/inactive_profile.svg";
import ActiveTasks from "../assets/icons/active_tasks.svg";
import SearchScreen from "../screens/tabs/SearchScreen";
import HomeScreen from "../screens/dashboard/HomeScreen";
import CreateTaskScreen from "../screens/tasks/CreateTaskScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SubscriptionScreen from "../screens/tasks/SubscriptionScreen";
import PaymentModeScreen from "../screens/tasks/PaymentModeScreen";
import ExhibitionScreen from "../screens/tabs/ExhibitionScreen";
import InviteUserScreen from "../screens/exhibition/InviteUserScreen";
import ExhibitionDetailsScreen from "../screens/exhibition/ExhibitionDetailsScreen";
import AddContactPerson from "../screens/exhibition/AddContactPerson";
import ShopProfileScreen from "../screens/settings/ShopProfileScreen";
import ThemeScreen from "../screens/settings/ThemeScreen";
import FontsScreen from "../screens/settings/FontsScreen";
import LanguageScreen from "../screens/settings/LanguageScreen";
import PushNotificationScreen from "../screens/settings/PushNotification";
import EmailSetupScreen from "../screens/settings/EmailSetupScreeen";
import SMSGatewayScreen from "../screens/settings/SMSGatewayScreen";
import CurrentSubscription from "../screens/tasks/CurrentSubscription";
import ProspectsScreen from "../screens/dashboard/ProspectsScreen";
import UserInfoFormScreen from "../screens/dashboard/BasicInfoForm";
import CameraScreen from "../screens/dashboard/CameraScreen";
import AdditionalSettingsScreen from "../screens/settings/AdditionalSettingsScreen";
import ReportScreen from "../screens/report/ReportScreen";
import ReportFilterScreen from "../screens/report/ReportsFilter";

const Tab = createBottomTabNavigator();
const TaskStack = createNativeStackNavigator();
const ExhibitionStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const DashboardStack = createNativeStackNavigator();

export function TaskStackScreen() {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name="Tasks"
        component={TaskScreen}
        options={{ headerShown: false }}
      />
      <TaskStack.Screen
        name="CreateTask"
        component={CreateTaskScreen}
        options={{ headerShown: false }}
      />
      <TaskStack.Screen
        name="SubscriptionPackages"
        component={SubscriptionScreen}
        options={{ headerShown: false }}
      />
      <TaskStack.Screen
        name="CurrentSubscriptionPackages"
        component={CurrentSubscription}
        options={{ headerShown: false }}
      />
      <TaskStack.Screen
        name="PaymentMode"
        component={PaymentModeScreen}
        options={{ headerShown: false }}
      />
    </TaskStack.Navigator>
  );
}

export function DashboardStackScreen() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name="Prospects"
        component={ProspectsScreen}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name="UserInfoForm"
        component={UserInfoFormScreen}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
      <DashboardStack.Screen
        name="Reports"
        component={ReportScreen}
        options={{ headerShown: false }}
      />

      <DashboardStack.Screen
        name="ReportsFilter"
        component={ReportFilterScreen}
        options={{ headerShown: false }}
      />
    </DashboardStack.Navigator>
  );
}

const ExhibitionStackScreen = () => {
  return (
    <ExhibitionStack.Navigator>
      <ExhibitionStack.Screen
        name="Exhibition"
        component={ExhibitionScreen}
        options={{ headerShown: false }}
      />
      <ExhibitionStack.Screen
        name="InviteUser"
        component={InviteUserScreen}
        options={{ headerShown: false }}
      />
      <ExhibitionStack.Screen
        name="ExhibitionDetails"
        component={ExhibitionDetailsScreen}
        options={{ headerShown: false }}
      />
      <ExhibitionStack.Screen
        name="AddContactPerson"
        component={AddContactPerson}
        options={{ headerShown: false }}
      />
    </ExhibitionStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="Theme"
        component={ThemeScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="Fonts"
        component={FontsScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="Language"
        component={LanguageScreen}
        options={{ headerShown: false }}
      />

      <ProfileStack.Screen
        name="PushNotification"
        component={PushNotificationScreen}
        options={{ headerShown: false }}
      />

      <ProfileStack.Screen
        name="EmailSetup"
        component={EmailSetupScreen}
        options={{ headerShown: false }}
      />

      <ProfileStack.Screen
        name="SMSGateway"
        component={SMSGatewayScreen}
        options={{ headerShown: false }}
      />

      <ProfileStack.Screen
        name="AdditionalSettings"
        component={AdditionalSettingsScreen}
        options={{ headerShown: false }}
      />

      <ProfileStack.Screen
        name="ShopProfile"
        component={ShopProfileScreen}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};

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
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused ? (
                  <View className="flex flex-col items-center gap-1">
                    <InactiveCreate />
                    <Text>Create</Text>
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
                    <Text>Tasks</Text>
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
        component={DashboardStackScreen}
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
        name="Shopprofile"
        component={ExhibitionStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused ? (
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ActiveMeal />
                    <Text>Exhibition</Text>
                  </View>
                ) : (
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <InactiveMeal />
                    <Text style={{ color: "gray" }}>Exhibition</Text>
                  </View>
                )}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
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
