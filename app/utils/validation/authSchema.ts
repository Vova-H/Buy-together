import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Невірний email').required('Обовʼязково'),
  password: Yup.string().min(6, 'Мінімум 6 символів').required('Обовʼязково'),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Ім'я обов'язкове"),
  email: Yup.string().email('Невірний email').required('Email обовʼязковий'),
  password: Yup.string().min(6, 'Мінімум 6 символів').required('Пароль обовʼязковий'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Паролі не співпадають')
    .required('Підтвердження пароля обовʼязкове'),
});
