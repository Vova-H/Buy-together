import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, useColorScheme } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { auth } from '../services/firebase';
import { getStyles } from '../../styles/getStyles';
import AddListModal from '../components/ui/modals/AddListModal';
import ShoppingListCard from '../components/ui/ShopingListCard';
import { ShoppingList } from '../interfaces/ShoppingList';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const theme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const styles = getStyles(theme);

  const [lists, setLists] = useState<ShoppingList[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const user = auth().currentUser;
    if (!user) return;

    const unsubscribeOwned = firestore()
      .collection('shoppingLists')
      .where('ownerId', '==', user.uid)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const owned: ShoppingList[] = snapshot.docs?.map(doc => ({
          ...(doc?.data() as ShoppingList),
          id: doc.id,
          _shared: false,
        }));
        setLists(prev => {
          const shared = prev.filter(l => l._shared);
          return [...owned, ...shared];
        });
      });

    const unsubscribeShared = firestore()
      .collection('shoppingLists')
      .where('sharedWith', 'array-contains', user.uid)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const shared: ShoppingList[] = snapshot.docs?.map(doc => ({
          ...(doc?.data() as ShoppingList),
          id: doc.id,
          _shared: true,
        }));

        setLists(prev => {
          const owned = prev.filter(l => !l._shared);
          return [...owned, ...shared];
        });
      });

    return () => {
      unsubscribeOwned();
      unsubscribeShared();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🧾 Мої списки</Text>

      <FlatList
        data={lists}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ShoppingListCard list={item} theme={theme} />
        )}
        contentContainerStyle={{ paddingBottom: 100, minWidth: '100%' }}
      />

      <TouchableOpacity
        style={[styles.fab]}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="plus" size={20} color={styles.buttonText.color} />
      </TouchableOpacity>

      <AddListModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        theme={theme}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
