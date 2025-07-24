declare module 'firebase/auth/react-native' {
  export * from 'firebase/auth';

  import { Persistence } from 'firebase/auth';
  import AsyncStorage from '@react-native-async-storage/async-storage';

  export function getReactNativePersistence(
    storage: typeof AsyncStorage
  ): Persistence;
}
