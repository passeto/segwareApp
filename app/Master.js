import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import store from './store';

import AppStack from './navigation/appStack';

const Master = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <Container>
        <AppStack />
      </Container>
    </Provider>
  );
};

export default Master;
