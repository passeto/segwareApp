import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FeedContainer from '../feed/containers/FeedContainer';
import { navigationRef } from '../services/navigator';
import ForgotPasswordContainer from '../login/containers/ForgotPasswordContainer';
import RegisterContainer from '../login/containers/RegisterContainer';
import LoginContainer from '../login/containers/LoginContainer';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer
      ref={navigationRef}
      onNavigationStateChange={(prevState, currentState) => {
        const currentScreen = Navigator.getRouteNameFromState(currentState);
        const prevScreen = Navigator.getRouteNameFromState(prevState);
        if (prevScreen !== currentScreen) {
          console.log(
            `[NAVIGATOR] navigated from ${prevScreen} to ${currentScreen}.`
          );
        }
      }}
    >
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={LoginContainer} />
        <Screen name="Register" component={RegisterContainer} />
        <Screen name="ForgotPassword" component={ForgotPasswordContainer} />
        <Screen name="Feed" component={FeedContainer} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
