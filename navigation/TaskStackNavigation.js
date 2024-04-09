import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopProfileScreen from "../screens/settings/ShopProfileScreen";
import TaskScreen from "../screens/tabs/TaskScreen";
import CreateTaskScreen from "../screens/tasks/CreateTaskScreen";
import CurrentSubscription from "../screens/tasks/CurrentSubscription";
import PaymentModeScreen from "../screens/tasks/PaymentModeScreen";
import SubscriptionScreen from "../screens/tasks/SubscriptionScreen";

const Stack = createNativeStackNavigator();
const TaskStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tasks"
        component={TaskScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateTask"
        component={CreateTaskScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubscriptionPackages"
        component={SubscriptionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CurrentSubscriptionPackages"
        component={CurrentSubscription}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentMode"
        component={PaymentModeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShopProfile"
        component={ShopProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TaskStack;
