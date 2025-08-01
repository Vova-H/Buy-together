import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import type { RootStackParamList } from '../navigation/navigationTypes';
import { ShoppingList } from '../interfaces/ShoppingList.ts';
import Container from '../components/ui/Container.tsx';
import { Text } from 'react-native';

const ListDetailsScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ListDetailsScreen'>>();
  const { listId } = route.params;

  const [listData, setListData] = useState<ShoppingList | null>(null);
  console.log(listData);
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('shoppingLists')
      .doc(listId)
      .onSnapshot(doc => {
        if (doc.exists()) {
          setListData({ ...(doc.data() as ShoppingList), id: doc.id });
        }
      });

    return unsubscribe;
  }, [listId]);
  return (
    <Container>
      <Text>Details Screen</Text>
    </Container>
  );
};

export default ListDetailsScreen;
