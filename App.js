/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Splash from './Screens/Splash';
import SearchForBest from './Screens/SearchForBest';
import OneToOne from './Screens/OneToOne'
import Examination from './Screens/Examination';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import ScreenStack from './Stack/StackScreens'
import Home from './Screens/Home';
// const Stack = createNativeStackNavigator();
const App = () => {
  return (
   
      //  <Splash/>
      // <SearchForBest/>
      // <OneToOne/>
      // <Examination/>
      // <Login/>
      // <SignUp/>
      <ScreenStack/>
      // <Home/>
      );
    };



export default App;
