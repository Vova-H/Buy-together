import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type {
  AuthStackParamList,
  RootStackParamList,
} from '../navigation/navigationTypes.ts';

export const useStackNavigation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return {
    navigate: navigation.navigate,
    goBack: navigation.goBack,
    replace: navigation.replace,
    push: navigation.push,
    reset: navigation.reset,
  };
};
export const useRootNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
