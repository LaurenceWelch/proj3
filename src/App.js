import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNav from './navigation/TabNav';
import {Provider} from 'react-redux';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
