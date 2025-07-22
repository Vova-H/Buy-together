import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const getTabBarIcon =
  (routeName: string) =>
  ({ color, size }: { color: string; size: number }) => {
    const iconMap: Record<string, string> = {
      Home: 'home',
      Profile: 'user',
    };

    const iconName = iconMap[routeName] ?? 'question';

    return <FontAwesome name={iconName} size={size} color={color} />;
  };

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: getTabBarIcon(route.name),
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
