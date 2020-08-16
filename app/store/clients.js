import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import * as RootNavigation from '../services/navigator';

const DEVELOP_HOST = 'https://segware-book-api.segware.io/api';
const PRODUCTION_HOST = '';
const HOMOLOG_HOST = '';

const CURRENT_HOST = DEVELOP_HOST;

const getCurrentHostName = () => {
  switch (CURRENT_HOST) {
    case DEVELOP_HOST: {
      return 'develop';
    }
    case HOMOLOG_HOST: {
      return 'homolog';
    }
    case PRODUCTION_HOST: {
      return 'production';
    }
    default: {
      return 'unknown';
    }
  }
};

export { getCurrentHostName, DEVELOP_HOST, PRODUCTION_HOST, CURRENT_HOST };

export default {
  default: {
    client: axios.create({
      baseURL: CURRENT_HOST,
      responseType: 'json',
    }),
    options: {
      returnRejectedPromiseOnError: true,
      interceptors: {
        request: [
          ({ getState }, config) => {
            const { token } = getState().auth;
            return {
              ...config,
              headers: {
                ...(config.headers || {}),
                Authorization: token ? `Bearer ${token}` : undefined,
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
              },
            };
          },
        ],
        response: [
          {
            success: (store, response) => response,
            error: async (store, error) => {
              if (error.response && error.response.status === 401) {
                await AsyncStorage.multiRemove([
                  '@copia-libri/user',
                  '@copia-libri/token',
                ]);
                RootNavigation.navigate('Login');
              }

              return Promise.reject(error);
            },
          },
        ],
      },
    },
  },
};
