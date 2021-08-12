import React from 'react';
import 'react-native-gesture-handler';

import {TouchableOpacity} from 'react-native'
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import NetworkScreen from '../screens/networkScreen';
import ProfileScreen from '../screens/profileScreen';
import SettingScreen from '../screens/settingScreen';

const Stack = createStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="LoginScreen"
    screenOptions={{
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitleVisible: false,
    }}>
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{title: 'Login Screen'}}
    />
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{title: 'Register Screen'}}
    />
  </Stack.Navigator>
);

export const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: 'black',
        headerTitleStyle: {fontWeight: 'bold'},
        headerBackTitle: 'back',
      }}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={() => ({
            title: 'Profile Screen',
            headerLeft: () => (
              <TouchableOpacity style={{ paddingLeft: 20 }}>
                <Ionicons
                  name='arrow-back'
                  size={25}
                  style={[{ color: 'black' }]}
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                />
              </TouchableOpacity>
            ),
          })}
      />
    </Stack.Navigator>
  );
};

export const NetworkStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="NetworkScreen"
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: 'black',
        headerTitleStyle: {fontWeight: 'bold'},
        headerBackTitle: 'back',
      }}>
      <Stack.Screen
        name="NetworkScreen"
        component={NetworkScreen}
        options={() => ({
            title: 'Network Screen',
            headerLeft: () => (
              <TouchableOpacity style={{ paddingLeft: 20 }}>
                <Ionicons
                  name='arrow-back'
                  size={25}
                  style={[{ color: 'black' }]}
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                />
              </TouchableOpacity>
            ),
          })}
      />
    </Stack.Navigator>
  );
};

export const SettingStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: 'black',
        headerTitleStyle: {fontWeight: 'bold'},
        headerBackTitle: 'back',
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={() => ({
            title: 'Setting Screen',
            headerLeft: () => (
              <TouchableOpacity style={{ paddingLeft: 20 }}>
                <Ionicons
                  name='arrow-back'
                  size={25}
                  style={[{ color: 'black' }]}
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                />
              </TouchableOpacity>
            ),
          })}
      />
    </Stack.Navigator>
  );
};
