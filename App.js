import AppNavigation from "./navigation/appNavigation";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider } from "@ui-kitten/components";
import { UserRoleProvider } from "./context/UserContext";
export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <UserRoleProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </UserRoleProvider>
    </ApplicationProvider>
  );
}
