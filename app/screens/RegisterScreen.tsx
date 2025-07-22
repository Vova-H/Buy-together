import React from 'react';
import { View, Text, Button } from 'react-native';
import { useStackNavigation } from '../hooks/useStackNavigation.ts';

const RegisterScreen = () => {

  const { navigate } = useStackNavigation();
  const goToLoginScreen = () => {
    navigate('Login');
  };
  return (
    <View>
      <Text>Register Screen</Text>
      <Button title="Register" />
      <Button title="Go to Login" onPress={goToLoginScreen} />
    </View>
  );
};

export default RegisterScreen;
