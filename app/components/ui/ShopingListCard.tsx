import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ShoppingList } from '../../interfaces/ShoppingList';
import { colors, spacing } from '../../constants';
import { getCardStyles } from '../../../styles/getCardStyles.ts';
import formatDataTime from '../../utils/formatDataTime.ts';

const ShoppingListCard = ({
  list,
  theme,
}: {
  list: ShoppingList;
  theme: 'light' | 'dark';
}) => {
  const isShared = list._shared;
  const styles = getCardStyles(theme);


  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors[theme].card }]}
    >
      <View style={styles.row}>
        <Icon
          name="clipboard-text-outline"
          size={28}
          color={colors[theme].primary}
        />

        <View style={{ flex: 1, marginLeft: spacing.sm }}>
          <Text style={[styles.title, { color: colors[theme].text }]}>
            {list.title}
          </Text>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}
          >
            <Icon
              name={isShared ? 'account-multiple' : 'account'}
              size={14}
              color={colors[theme].subtext}
              style={{ marginRight: 4 }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}
            >
              <Text style={[styles.subtext, { color: colors[theme].subtext }]}>
                {isShared ? 'Спільний доступ' : 'Тільки ти'}
              </Text>
              <Text style={{ ...styles.subtext, marginRight: spacing.xl }}>
                {formatDataTime(list?.createdAt)}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <Icon name="dots-vertical" size={20} color={colors[theme].subtext} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ShoppingListCard;
