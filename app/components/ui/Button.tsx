import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';
import { colors, spacing, typography } from '../../constants';

interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading,
  disabled,
  style,
}) => {
  const theme = colors.light;
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, isDisabled && styles.disabledButton, style]}
      activeOpacity={0.8}
      disabled={isDisabled}
    >
      {loading ? (
        <ActivityIndicator color={theme.primaryText} />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.light.primary,
    paddingVertical: spacing.sm,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.light.primaryText,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium.toString() as any,
  },
  disabledButton: {
    opacity: 0.6,
  },
});

export default Button;
