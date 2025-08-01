import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SwipeListView } from 'react-native-swipe-list-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { auth } from '../services/firebase';
import { getStyles } from '../../styles/getStyles';
import AddListModal from '../components/ui/modals/AddListModal';
import ShoppingListCard from '../components/ui/ShopingListCard';
import { ShoppingList } from '../interfaces/ShoppingList';
import HiddenDeleteButton from '../components/ui/HiddenDeleteButton.tsx';

const HomeScreen = () => {
  const theme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const styles = getStyles(theme);
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
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

  const handleDelete = async (id: string) => {
    try {
      await firestore().collection('shoppingLists').doc(id).delete();
      setLists(prev => prev.filter(list => list.id !== id));
    } catch (error) {
      console.error('Помилка при видаленні списку:', error);
    }
  };
  const renderHiddenItem = useCallback(
    (data: { item: ShoppingList }) => (
      <HiddenDeleteButton onDelete={() => handleDelete(data.item.id)} />
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.extraTitle}>🧾 Мої списки</Text>

      <SwipeListView
        data={lists}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <ShoppingListCard list={item} theme={theme} />
          </View>
        )}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={isLandscape ? -width * 0.1 : -width * 0.15}
        disableRightSwipe
        contentContainerStyle={{ paddingBottom: 100 }}
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
