import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../app/constants';

export const getCardStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    card: {
      backgroundColor: colors[theme].card,
      padding: spacing.md,
      borderRadius: 12,
      marginBottom: spacing.md,
      shadowColor: colors[theme].text,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 4,
      borderWidth: 0.1,
      height: 88,
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 4,
    },
    title: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.medium,
      color: colors[theme].text,
    },
    meta: {
      fontSize: typography.fontSize.sm,
      color: colors[theme].subtext,
    },
    icon: {
      color: colors[theme].text,
    },
    subtext: {
      fontSize: typography.fontSize.sm,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
