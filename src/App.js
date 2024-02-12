import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNav from './navigation/TabNav';
import {Provider} from 'react-redux';
import {store} from './store';
import * as Sentry from '@sentry/react-native';
import ErrorBoundary from './components/ErrorBoundary';

Sentry.init({
  dsn: 'https://9cafbece320d5c976afa867c1f9d4276@o4506732084199424.ingest.sentry.io/4506732085444608',
});

const App = () => {
  return (
    // <Sentry.ErrorBoundary>
    <ErrorBoundary>
      <Provider store={store}>
        <NavigationContainer>
          <TabNav />
        </NavigationContainer>
      </Provider>
    </ErrorBoundary>
    //</Sentry.ErrorBoundary>
  );
};

export default App;
