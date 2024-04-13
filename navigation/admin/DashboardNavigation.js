import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserInfoFormScreen from "../../screens/dashboard/BasicInfoForm";
import CameraScreen from "../../screens/dashboard/CameraScreen";
import HomeScreen from "../../screens/dashboard/HomeScreen";
import ProspectsScreen from "../../screens/dashboard/ProspectsScreen";
import ReportScreen from "../../screens/report/ReportScreen";
import ReportFilterScreen from "../../screens/report/ReportsFilter";
import PaymentModeScreen from "../../screens/dashboard/PaymentModeScreen";
import DashboardScreen from "../../screens/admin/DashboardScreen";
import SalesRepresentative from "../../screens/admin/SalesRepresentative";

const Stack = createNativeStackNavigator();
export function DashboardStack() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SalesRepresentative"
        component={SalesRepresentative}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PaymentMode"
        component={PaymentModeScreen}
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
