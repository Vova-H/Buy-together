import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext.tsx';

const HomeScreen = () => {
  const styles = useTheme()
  console.log(styles);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
