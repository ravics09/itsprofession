// import React, {useState, useEffect, useContext} from 'react';
// import 'react-native-gesture-handler';

// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

// import {AuthStack} from './stackNavigation';
// import SideDrawer from './sideDrawerNavigation';
// import AuthContext from './authProvider';

// const Stack = createStackNavigator();

// const GlobalNavigation = () => {
//   const [user, setUser] = useContext(AuthContext);
//   const [initializing, setInitializing] = useState(true);

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Auth">
//         {user ? (
//           <Stack.Screen
//             name="SideDrawer"
//             component={SideDrawer}
//             options={{headerShown: false}}
//           />
//         ) : (
//           <Stack.Screen
//             name="Auth"
//             component={AuthStack}
//             options={{headerShown: false}}
//           />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default GlobalNavigation;

import React, {useState, useEffect, useContext} from 'react';
import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

import {AuthStack, OnboardingStack} from './stackNavigation';
import SideDrawer from './sideDrawerNavigation';
import AuthContext from './authProvider';

const Stack = createStackNavigator();

const GlobalNavigation = () => {
  const [isFirstTimeLaunch, setIsFirstTimeLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstTimeLaunch(true);
      } else {
        setIsFirstTimeLaunch(false);
      }
    });
  }, []);

  if (isFirstTimeLaunch === null) {
    return null;
  } else if (isFirstTimeLaunch === true) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            name="Onboarding"
            component={OnboardingStack}
            options={{headerShown: false}}
          />
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
  } else {
    return (
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
  }
};
export default GlobalNavigation;
