import AppNavigation from './navigation/appNavigation';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
export default function App() {
  return (
    
    <ApplicationProvider {...eva} theme={eva.light}>
    <AppNavigation />
  </ApplicationProvider>
  );
}
