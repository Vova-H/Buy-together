import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ShoppingList } from '../../interfaces/ShoppingList';
import { colors, spacing } from '../../constants';
import { getCardStyles } from '../../../styles/getCardStyles.ts';
import { getStyles } from '../../../styles/getStyles.ts';
import formatDataTime from '../../utils/formatDataTime.ts';
import { useRootNavigation } from '../../hooks/useStackNavigation.ts';

const ShoppingListCard = ({
  list,
  theme,
}: {
  list: ShoppingList;
  theme: 'light' | 'dark';
}) => {
  const isShared = list._shared;
  const cardStyles = getCardStyles(theme);
  const styles = getStyles(theme);
  const { navigate } = useRootNavigation();
  const goToListDetails = () => {
    navigate('ListDetailsScreen', { listId: list.id });
  };
  return (
    <TouchableOpacity
      onPress={goToListDetails}
      activeOpacity={1}
      style={[cardStyles.card, { backgroundColor: colors[theme].card }]}
    >
      <View style={cardStyles.row}>
        <Icon
          name="clipboard-text-outline"
          size={28}
          color={colors[theme].primary}
        />

        <View style={{ marginLeft: spacing.sm, width: '85%' }}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[
              styles.title,
              { color: colors[theme].text, maxWidth: '100%', height: '70%' },
            ]}
          >
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
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={[cardStyles.subtext, { color: colors[theme].subtext }]}
              >
                {isShared ? 'Спільний доступ' : 'Тільки ти'}
              </Text>
              <Text style={cardStyles.subtext}>
                {formatDataTime(list.createdAt)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ShoppingListCard);
