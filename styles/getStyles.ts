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
      backgroundColor: colors[theme].backgroundSecondary,
      padding: spacing.md,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
      marginBottom: spacing.md,
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
  });
