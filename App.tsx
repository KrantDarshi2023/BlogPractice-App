import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';

import Navigation from './src/Navigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Navigation />
    </GestureHandlerRootView>
  );
};

export default App;
