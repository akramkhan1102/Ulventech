/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Profiler } from 'react';
import { Text, View } from 'react-native';
import Root from './src';
import { configure } from './src/store';

const { persistor, store } = configure()
const App = () => {
  return (
      <Root persistor={persistor} store={store}/>
  );
};

export default App;
