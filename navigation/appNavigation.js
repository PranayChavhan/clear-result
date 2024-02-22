import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/OnBoarding/WelcomeScreen';
const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}