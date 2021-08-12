import React from 'react';
import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

import {AuthStack} from './stackNavigation';
import SideDrawer from './sideDrawerNavigation';

const Stack = createStackNavigator();

const GlobalNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SideDrawer"
        component={SideDrawer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default GlobalNavigation;
