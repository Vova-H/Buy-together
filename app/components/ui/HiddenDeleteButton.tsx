import React from 'react';
import { StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  onDelete: () => void;
}

const CARD_HEIGHT = 88;

const HiddenDeleteButton = ({ onDelete }: Props) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const calculatedWidth = isLandscape ? width * 0.818 : width * 0.89;

  return (
    <View style={[styles.rowBack, { width: calculatedWidth }]}>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Icon name="trash-can-outline" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rowBack: {
    height: CARD_HEIGHT,
    flexDirection: 'row',
  },
  deleteButton: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
});

export default React.memo(HiddenDeleteButton);
