import React from 'react';
import 'react-native-gesture-handler';

import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import {ProfileStack, NetworkStack, SettingStack, AboutUsStack} from './stackNavigation';
import BottomTab from './bottomTabNavigation';

const SideDrawerNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home Screen" component={BottomTab} options={{drawerLabel: 'Home'}}/>
    <Drawer.Screen
      name="Profile"
      component={ProfileStack}
      options={{headerShown: false}}
    />
    <Drawer.Screen
      name="Network"
      component={NetworkStack}
      options={{headerShown: false}}
    />
    <Drawer.Screen
      name="AboutUs"
      component={AboutUsStack}
      options={{headerShown: false}}
    />
    <Drawer.Screen
      name="Setting"
      component={SettingStack}
      options={{headerShown: false}}
    />
  </Drawer.Navigator>
);

export default SideDrawerNavigation;
