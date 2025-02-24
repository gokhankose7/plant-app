import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
