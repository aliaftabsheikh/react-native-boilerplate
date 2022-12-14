import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Authentication from '../screens/Authentication';

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar />
      <Stack.Navigator
        initialRouteName={'Authentication'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
