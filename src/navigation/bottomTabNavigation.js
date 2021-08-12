import React from 'react';
import 'react-native-gesture-handler';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const BottomTab = createBottomTabNavigator();

import HomeScreen from '../screens/homeScreen';
import NotificationScreen from '../screens/notificationScreen';
import EventsScreen from '../screens/eventScreen';
import GroupsScreen from '../screens/groupScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

const BottomTabNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarActiveTintColor:'black',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="home"
            size={23}
            color={focused ? 'black' : '#808080'}
          />
        ),
      }}
    />
    <BottomTab.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Notification',
        tabBarActiveTintColor:'black',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="notifications"
            size={23}
            color={focused ? 'black' : '#808080'}
          />
        ),
      }}
    />
    <BottomTab.Screen
      name="Events"
      component={EventsScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Events',
        tabBarActiveTintColor:'black',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="easel"
            size={23}
            color={focused ? 'black' : '#808080'}
          />
        ),
      }}
    />
    <BottomTab.Screen
      name="Groups"
      component={GroupsScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Groups',
        tabBarActiveTintColor:'black',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="people-sharp"
            size={23}
            color={focused ? 'black' : '#808080'}
          />
        ),
      }}
    />
  </BottomTab.Navigator>
);
export default BottomTabNavigator;
