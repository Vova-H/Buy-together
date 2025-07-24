import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Formik } from 'formik';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { colors, spacing, typography } from '../constants';
import { useStackNavigation } from '../hooks/useStackNavigation.ts';
import { loginSchema } from '../utils/validation/authSchema.ts';

import {
  getAuth,
  signInWithEmailAndPassword,
} from '@react-native-firebase/auth';

const LoginScreen = () => {
  const { navigate } = useStackNavigation();

  const goToRegisterScreen = () => {
    navigate('Register');
  };

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      await signInWithEmailAndPassword(
        getAuth(),
        values.email,
        values.password,
      );
    } catch (error: any) {
      Alert.alert('Помилка при вході', error.message);
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Вітаємо 👋</Text>
        <Text style={styles.subtitle}>Увійдіть, щоб продовжити</Text>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={handleLogin}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <>
              <Input
                label="Email"
                placeholder="email@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                touched={touched.email}
                error={errors.email}
              />

              <Input
                label="Пароль"
                placeholder="••••••••"
                secureTextEntry
                autoCapitalize="none"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                touched={touched.password}
                error={errors.password}
              />

              <TouchableOpacity style={styles.forgot}>
                <Text style={styles.forgotText}>Забули пароль?</Text>
              </TouchableOpacity>

              <Button title="Увійти" onPress={handleSubmit} />
            </>
          )}
        </Formik>

        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Немає акаунту?</Text>
          <TouchableOpacity onPress={goToRegisterScreen}>
            <Text style={styles.link}> Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
  },
  scroll: {
    flexGrow: 1,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold.toString() as any,
    color: colors.light.text,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.light.textSecondary,
    marginBottom: spacing.lg,
  },
  forgot: {
    alignSelf: 'flex-end',
    marginBottom: spacing.md,
  },
  forgotText: {
    fontSize: typography.fontSize.sm,
    color: colors.light.primary,
  },
  bottom: {
    flexDirection: 'row',
    marginTop: spacing.lg,
    justifyContent: 'center',
  },
  bottomText: {
    color: colors.light.textSecondary,
  },
  link: {
    color: colors.light.primary,
    fontWeight: typography.fontWeight.medium.toString() as any,
  },
});

export default LoginScreen;
