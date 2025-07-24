import React from 'react';
import { Text } from 'react-native';
import Button from '../components/ui/Button.tsx';
import Container from '../components/ui/Container.tsx';
import { getAuth } from '@react-native-firebase/auth';

const ProfileScreen = () => {
  const handleLogout = async () => {
    await getAuth().signOut();
  };

  return (
    <Container>
      <Text>Profile Screen</Text>
      <Button title="Вийти" onPress={handleLogout} />
    </Container>
  );
};

export default ProfileScreen;
