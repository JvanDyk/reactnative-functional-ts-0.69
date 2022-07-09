// React
import React from 'react';

// Router
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Utility
import {navigationRef} from './RootNavigation';

// Components
import Main from '../components/layout/main/Main';

// Pages
import Welcome from '../pages/welcome/Welcome';
import { StyleSheet } from 'react-native';

const Routes: React.FC = (): JSX.Element => {
  // Navigator
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        initialRouteName={'welcome'}
        screenOptions={{
          headerShown: false
        }}
      >
        {/*WELCOME*/}
        <Screen
          name={'welcome'}
          children={() => (
            <Main>
              <Welcome/>
            </Main>
          )}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
