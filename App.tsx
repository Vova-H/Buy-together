import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './app/navigation/StackNavigator.tsx';

function App() {
  return (
    <ThemeProvider>
      <GestureHandlerRootView>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

export default App;
