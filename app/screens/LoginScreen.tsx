import React from 'react';
import { Button, Text, View } from 'react-native';
import { useStackNavigation } from '../hooks/useStackNavigation.ts';
import { useTabNavigation } from '../hooks/useTabNavigation.ts';

import { getStyles } from '../../styles/getStyles.ts';
import { useTheme } from '../../contexts/ThemeContext.tsx';

const LoginScreen = () => {
  const { navigate } = useStackNavigation();
  const { goToHome } = useTabNavigation();
  const goToRegisterScreen = () => {
    navigate('Register');
  };

  const {theme}  = useTheme();

  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Button title="Login" onPress={goToHome} />
      <Button title="Go to Register" onPress={goToRegisterScreen} />
    </View>
  );
};

export default LoginScreen;
