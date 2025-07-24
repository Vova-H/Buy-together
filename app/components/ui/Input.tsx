import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { colors, spacing, typography } from '../../constants';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({ label, error, touched, ...rest }) => {
  const theme = colors.light;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={[styles.input, touched && error ? styles.inputError : null]}
        placeholderTextColor={theme.placeholder}
        {...rest}
      />

      {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    fontSize: typography.fontSize.sm,
    color: colors.light.textSecondary,
    marginBottom: spacing.xs,
  },
  input: {
    backgroundColor: colors.light.inputBackground,
    padding: spacing.sm,
    borderRadius: 8,
    fontSize: typography.fontSize.md,
    color: colors.light.text,
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  inputError: {
    borderColor: colors.light.error,
  },
  errorText: {
    marginTop: spacing.xs,
    fontSize: typography.fontSize.sm,
    color: colors.light.error,
  },
});

export default Input;
