import React, { useState, useEffect } from 'react';
import { StatusBar, YellowBox, Platform } from 'react-native';
import '~/config/ReactotronConfig';
import { Provider } from 'react-redux';
import createNavigator from '~/routes';
import store from './store';

YellowBox.ignoreWarnings([""]);

export default function App() {
  useEffect(() => { }, []);

  const Routes = createNavigator();

  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="#8b0000"
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'light-content'}
      />
      <Routes />
    </Provider>
  );
}
