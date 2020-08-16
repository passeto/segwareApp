import * as RootNavigation from '../services/navigator';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';
import types from './types';

export function forgotPassword(values) {
  return async (dispatch) => {
    if (values.username === '') {
      return Alert.alert('Dados incompletos', 'Digite seu usuário.');
    }
    values.username.trim();
    const username = values.username;

    return dispatch({
      type: types.FORGOT_PASSWORD,
      payload: {
        request: {
          url: `/forgot-password/${username}`,
          method: 'GET',
        },
      },
    })
      .then(async ({ payload }) => {
        Alert.alert('Recuperação de senha', `Senha: ${payload.data.password}`);
        setTimeout(() => RootNavigation.navigate('Login'), 700);
      })
      .catch((error) => {
        console.log('err-*', error);
        dispatch(
          Alert.alert('Segware', 'Algo deu errado, tente usar outro usuário.')
        );
      });
  };
}

export function register(values) {
  return async (dispatch) => {
    let value = {};

    if (values.username === '') {
      return Alert.alert('Dados incompletos', 'Digite seu usuário.');
    }
    if (values.password === '') {
      return dispatch(
        alert({ title: 'Dados incompletos', text: 'Digite sua senha' })
      );
    }

    values.username.trim();
    values.password.trim();

    value = {
      username: values.username,
      password: values.password,
    };

    return dispatch({
      type: types.AUTH_REGISTER,
      payload: {
        request: {
          url: '/sign-up',
          method: 'POST',
          data: value,
        },
      },
    })
      .then(async () => {
        Alert.alert(
          'Segware',
          'Cadastro feito com sucesso, o acesso já pode ser realizado.'
        );
        setTimeout(() => RootNavigation.navigate('Login'), 700);
      })
      .catch((error) => {
        console.log('err-*', error);
        dispatch(
          Alert.alert('Segware', 'Algo deu errado, tente usar outro usuário.')
        );
      });
  };
}

export function makeLogin(values) {
  return async (dispatch, getState) => {
    let value = {};
    if (values.username === '') {
      return Alert.alert('Dados incompletos', 'Digite seu usuário.');
    }
    if (values.password === '') {
      return dispatch(
        alert({ title: 'Dados incompletos', text: 'Digite sua senha' })
      );
    }

    values.username.trim();
    values.password.trim();

    value = {
      username: values.username,
      password: values.password,
    };

    return dispatch({
      type: types.AUTH_REQUEST,
      payload: {
        request: {
          url: '/sign-in',
          method: 'POST',
          data: value,
        },
      },
    })
      .then(async ({ payload }) => {
        console.log('Payload.data', payload.data);
        const token = payload.data;

        await AsyncStorage.setItem('@segware/token', token);
        RootNavigation.navigate('Feed');
      })
      .catch((error) => {
        console.log('err-*', error);
        dispatch(
          Alert.alert(
            'Segware',
            'usuário ou senha inválidos, verifique e tente novamente'
          )
        );
      });
  };
}
