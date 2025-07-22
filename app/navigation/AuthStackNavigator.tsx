import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen.tsx';
import RegisterScreen from '../screens/RegisterScreen.tsx';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => (
  <AuthStack.Navigator >
    <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <AuthStack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
  </AuthStack.Navigator>
);

export default AuthStackNavigator;
