import { useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { TabsParamList } from '../navigation/navigationTypes.ts';

export const useTabNavigation = () => {
  const navigation = useNavigation<BottomTabNavigationProp<TabsParamList>>();

  return {
    goToHome: () => navigation.navigate('MainTabs'),
    goBack: () => navigation.goBack(),
  };
};
