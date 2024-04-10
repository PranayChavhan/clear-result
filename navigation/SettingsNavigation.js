import AdditionalSettingsScreen from "../screens/settings/AdditionalSettingsScreen";
import EmailSetupScreeen from "../screens/settings/EmailSetupScreeen";
import EmailTemplateScreen from "../screens/settings/EmailTemplateScreen";
import FontsScreen from "../screens/settings/FontsScreen";
import LanguageScreen from "../screens/settings/LanguageScreen";
import PushNotificationScreen from "../screens/settings/PushNotification";
import SelectTemplateScreen from "../screens/settings/SelectTemplateScreen";
import SMSGatewayScreeen from "../screens/settings/SMSGatewayScreen";
import ThemeScreen from "../screens/settings/ThemeScreen";
import ProfileScreen from "../screens/tabs/ProfileScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Theme"
        component={ThemeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fonts"
        component={FontsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PushNotification"
        component={PushNotificationScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EmailSetup"
        component={EmailSetupScreeen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EmailTemplate"
        component={EmailTemplateScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SelectTemplate"
        component={SelectTemplateScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SMSGateway"
        component={SMSGatewayScreeen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AdditionalSettings"
        component={AdditionalSettingsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
