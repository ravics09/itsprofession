import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

import GlobalNavigation from './src/navigation/globalNavigation';

const App = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#3A7BD5'}}>
       <GlobalNavigation/>
    </SafeAreaView>
  );
};

export default App;
