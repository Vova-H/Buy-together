import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../app/constants';

export const getStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors[theme].background,
      padding: spacing.md,
      justifyContent: 'center',
      alignItems: 'center',

    },

    card: {
      width: '100%',
      backgroundColor: theme === 'dark' ? '#2b2b2b' : '#fff',
      padding: 16,
      borderRadius: 16,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
      flexDirection: 'column',
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme === 'dark' ? '#fff' : '#000',
    },
    accessInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    accessText: {
      fontSize: 14,
      color: theme === 'dark' ? '#aaa' : '#555',
      marginLeft: 4,
    },

    title: {
      fontSize: typography.fontSize.xl,
      fontWeight: typography.fontWeight.bold,
      color: colors[theme].text,
      marginBottom: spacing.sm,
    },

    subtitle: {
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.medium,
      color: colors[theme].textSecondary,
      marginBottom: spacing.xs,
    },

    paragraph: {
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.regular,
      color: colors[theme].text,
      lineHeight: 22,
    },

    button: {
      backgroundColor: colors[theme].primary,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.lg,
      borderRadius: 8,
      alignItems: 'center',
    },

    buttonText: {
      color: colors[theme].primaryText,
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.medium,
    },

    input: {
      backgroundColor: colors[theme].inputBackground,
      color: colors[theme].text,
      fontSize: typography.fontSize.md,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      borderRadius: 8,
      borderColor: colors[theme].border,
      borderWidth: 1,
      marginBottom: spacing.md,
    },

    placeholder: {
      color: colors[theme].placeholder,
    },

    separator: {
      height: 1,
      backgroundColor: colors[theme].border,
      marginVertical: spacing.md,
    },

    errorText: {
      color: colors[theme].error,
      fontSize: typography.fontSize.sm,
      marginTop: spacing.xs,
    },
    fab: {
      position: 'absolute',
      right: spacing.lg,
      bottom: spacing.xl,
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      backgroundColor: colors[theme].primary,
    },
  });
