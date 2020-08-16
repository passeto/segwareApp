import * as Yup from 'yup';

export const loginFormValidationSchema = Yup.object().shape({
  username: Yup.string().required('O campo usuário é obrigatório').trim(),
  password: Yup.string().required('O campo senha é obrigatório').trim(),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'As senhas digitadas não coincidem'
  ),
});
