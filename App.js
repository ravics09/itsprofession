import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

import GlobalNavigation from './src/navigation/globalNavigation';

const App = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#F0F8FF'}}>
       <GlobalNavigation/>
    </SafeAreaView>
  );
};

export default App;
