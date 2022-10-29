import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Examination from '../Screens/Examination';
import Login from '../Screens/Login';
import OneToOne from '../Screens/OneToOne';
import SearchForBest from '../Screens/SearchForBest';
import SignUp from '../Screens/SignUp';
import Splash from '../Screens/Splash';
import Home from '../Screens/Home'
const Stack = createStackNavigator();

const ScreenStack = () => {
  return (
    <NavigationContainer>
         <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
         <Stack.Screen name="Splash" component={Splash} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="OneToOne" component={OneToOne} />
         <Stack.Screen name="SearchForBest" component={SearchForBest} />
         <Stack.Screen name="SignUp" component={SignUp} />
         <Stack.Screen name="Examination" component={Examination} />
         <Stack.Screen name="Home" component={Home} />
         </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreenStack