import * as Yup from 'yup'

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Введите корректный e-mail')
    .required('Обязательно'),
  password: Yup.string()
    .required('Обязательно')
    .min(6, 'Минимум 6 символов'),
})
