import ExhibitionGraphScreen from "../../screens/admin/ExhibitionGraphScreen";
import ExhibitionInfoScreen from "../../screens/admin/ExhibitionInfoScreen";
import ExhibitionListScreen from "../../screens/admin/ExhibitionListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InviteUserScreen from "../../screens/exhibition/InviteUserScreen";
import ExhibitionFilter from "../../screens/exhibition/ExhibitionFilter";
import ExhibitionDetailsScreen from "../../screens/exhibition/ExhibitionDetailsScreen";
import AddContactPerson from "../../screens/exhibition/AddContactPerson";

const Stack = createNativeStackNavigator();
const ExhibitionStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="Exhibition"
        component={ExhibitionListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExhibitionInfo"
        component={ExhibitionInfoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExhibitionGraph"
        component={ExhibitionGraphScreen}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="InviteUser"
        component={InviteUserScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="ExhibitionFilter"
        component={ExhibitionFilter}
        options={{ headerShown: false }}
        />
      <Stack.Screen
        name="ExhibitionDetails"
        component={ExhibitionDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddContactPerson"
        component={AddContactPerson}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ExhibitionStack;
