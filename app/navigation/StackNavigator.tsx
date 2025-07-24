import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsNavigator from './BottomTabsNavigator';
import AuthStackNavigator from './AuthStackNavigator.tsx';
import {
  FirebaseAuthTypes,
  getAuth,
  onAuthStateChanged,
} from '@react-native-firebase/auth';
import Loader from '../components/ui/Loader.tsx';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="MainTabs" component={BottomTabsNavigator} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
