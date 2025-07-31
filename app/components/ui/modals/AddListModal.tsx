import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { getStyles } from '../../../../styles/getStyles';

const AddListModal = ({
  visible,
  onClose,
  theme,
}: {
  visible: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
}) => {
  const styles = getStyles(theme);
  const [title, setTitle] = useState('');

  const handleCreate = async () => {
    const user = auth().currentUser;
    if (!user || !title.trim()) return;

    await firestore().collection('shoppingLists').add({
      title: title.trim(),
      ownerId: user.uid,
      sharedWith: [],
      createdAt: firestore.FieldValue.serverTimestamp(),
      updatedAt: firestore.FieldValue.serverTimestamp(),
    });

    setTitle('');
    onClose();
  };

  return visible ? (
    <View style={modalStyles.overlay}>
      <View style={[styles.card, modalStyles.modalCard]}>
        <Text style={styles.title}>Новий список</Text>

        <TextInput
          placeholder="Введіть назву"
          placeholderTextColor={styles.placeholder.color}
          style={[styles.input, { marginBottom: 16 }]}
          value={title}
          onChangeText={setTitle}
        />

        <View style={modalStyles.buttonRow}>
          <TouchableOpacity onPress={onClose} style={modalStyles.cancelBtn}>
            <Text style={styles.subtitle}>Скасувати</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCreate} style={styles.button}>
            <Text style={styles.buttonText}>Створити</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : null;
};

export default AddListModal;

const modalStyles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  modalCard: {
    width: '100%',
    maxWidth: 700,
    padding: 20,
    borderRadius: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  cancelBtn: {
    marginRight: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
