import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserInfoFormScreen from "../screens/dashboard/BasicInfoForm";
import CameraScreen from "../screens/dashboard/CameraScreen";
import HomeScreen from "../screens/dashboard/HomeScreen";
import ProspectsScreen from "../screens/dashboard/ProspectsScreen";
import ReportScreen from "../screens/report/ReportScreen";
import ReportFilterScreen from "../screens/report/ReportsFilter";
import EditTemplateScreen from "../screens/smi/EditTemplateScreen";
import SubscriptionScreen from "../screens/tasks/SubscriptionScreen";
import PaymentModeScreen from "../screens/dashboard/PaymentModeScreen";
import InvoiceScreen from "../screens/dashboard/InvoiceScreen";

const Stack = createNativeStackNavigator();
export function DashboardStack() {
  return (
    <Stack.Navigator initialRouteName="SubscriptionPackage">
      <Stack.Screen
        name="SubscriptionPackage"
        component={SubscriptionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentMode"
        component={PaymentModeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InvoiceScreen"
        component={InvoiceScreen}
        options={{ headerShown: false }}
        />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Prospects"
        component={ProspectsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserInfoForm"
        component={UserInfoFormScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
      <Stack.Screen
        name="Reports"
        component={ReportScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ReportsFilter"
        component={ReportFilterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default DashboardStack;
