import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import 'react-native-gesture-handler';
import HomeStack from './HomeStack';

const MainNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
