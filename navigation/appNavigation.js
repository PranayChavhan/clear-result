import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "../screens/OnBoarding/WelcomeScreen";
import SignupScreen from "../screens/Authentication/SignupScreen";
import LoginScreen from "../screens/Authentication/LoginScreen";
import ForgetPasswordScreen from "../screens/Authentication/ForgetPasswordScreen";
import TabNavigation from "./tabNavigation";
import CheckEmailScreen from "../screens/Authentication/CheckEmail";
import CreatePasswordScreen from "../screens/Authentication/CreatePassword";
import CreateTaskScreen from "../screens/Tasks/CreateTaskScreen";
import SubscriptionScreen from "../screens/Tasks/SubscriptionScreen";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import IcNotification from "../assets/icons/ic_notification.svg";
import IcMenu from "../assets/icons/ic_menu.svg";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="Tab"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Subscription Model"
        component={SubscriptionScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <View className="mt-8">
      <View className="flex flex-row items-center justify-between px-4 py-2 mb-10 ">
        <TouchableOpacity onPress={closeDrawer}>
          <View className="p-2  rounded-lg bg-gray-50 shadow-2xl flex items-center justify-center  ">
            <IcMenu width={20} height={20} />
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-[#F4F9FF] p-4 rounded-xl"
        onPress={() =>
          navigation.navigate("Tasks", {
            screen: "CurrentSubscriptionPackages",
          })
        }
      >
        <Text className="font-semibold ">Subscription Model</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-[#F4F9FF] p-4 rounded-xl my-2"
        onPress={() =>
          navigation.navigate("Tasks", {
            screen: "CurrentSubscriptionPackages",
          })
        }
      >
        <Text className="font-semibold ">Social Media Integration</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Signup"
          options={{ headerShown: false }}
          component={SignupScreen}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="ForgetPassword"
          options={{ headerShown: false }}
          component={ForgetPasswordScreen}
        />
        <Stack.Screen
          name="CheckEmail"
          options={{ headerShown: false }}
          component={CheckEmailScreen}
        />
        <Stack.Screen
          name="CreatePassword"
          options={{ headerShown: false }}
          component={CreatePasswordScreen}
        />
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => <DrawerNavigation />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
