import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsNavigator from './BottomTabsNavigator';
import AuthStackNavigator from './AuthStackNavigator.tsx';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Auth"
        component={AuthStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainTabs"
        component={BottomTabsNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
