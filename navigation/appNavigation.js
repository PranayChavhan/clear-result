import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/OnBoarding/WelcomeScreen';
import SignupScreen from '../screens/Authentication/SignupScreen';
import LoginScreen from '../screens/Authentication/LoginScreen';
import ForgetPasswordScreen from '../screens/Authentication/ForgetPasswordScreen';
import TabNavigation from './tabNavigation';
import CheckEmailScreen from '../screens/Authentication/CheckEmail';
import CreatePasswordScreen from '../screens/Authentication/CreatePassword';
import CreateTaskScreen from '../screens/Tasks/CreateTaskScreen';
const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tab'>

        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />


        <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreen} />

        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />

        <Stack.Screen name="ForgetPassword" options={{ headerShown: false }} component={ForgetPasswordScreen} />


        <Stack.Screen name="CheckEmail" options={{ headerShown: false }} component={CheckEmailScreen} />

        <Stack.Screen name="CreatePassword" options={{ headerShown: false }} component={CreatePasswordScreen} />

        <Stack.Screen name="Tab" options={{ headerShown: false }} component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}