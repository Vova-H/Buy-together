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
import { registerSchema } from '../utils/validation/authSchema.ts';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@react-native-firebase/auth';

const RegisterScreen = () => {
  const { navigate } = useStackNavigation();
  const goToLoginScreen = () => {
    navigate('Login');
  };

  const handleRegister = async (values: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        getAuth(),
        values.email,
        values.password
      );

      await updateProfile(userCredential.user, {
        displayName: values.name,
      });

      goToLoginScreen()
    } catch (error: any) {
      console.error('Помилка при реєстрації:', error.message);
      Alert.alert('Помилка при реєстрації', error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Реєстрація 📝</Text>
        <Text style={styles.subtitle}>Створіть акаунт, щоб почати</Text>

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={registerSchema}
          onSubmit={handleRegister}
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
                label="Імʼя"
                placeholder="Ваше імʼя"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                touched={touched.name}
                error={errors.name}
              />

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

              <Input
                label="Підтвердити пароль"
                placeholder="••••••••"
                secureTextEntry
                autoCapitalize="none"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                touched={touched.confirmPassword}
                error={errors.confirmPassword}
              />

              <Button title="Зареєструватися" onPress={handleSubmit} />
            </>
          )}
        </Formik>

        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Вже маєте акаунт?</Text>
          <TouchableOpacity onPress={goToLoginScreen}>
            <Text style={styles.link}> Увійти</Text>
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

export default RegisterScreen;
