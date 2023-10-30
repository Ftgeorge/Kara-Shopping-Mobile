/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Splashscreen from './src/screens/Splashscreen';
import WelcomeScreen from './src/screens/WelcomScreen';

function App(): JSX.Element {
  return (
    <WelcomeScreen/>
  );
}


export default App;
