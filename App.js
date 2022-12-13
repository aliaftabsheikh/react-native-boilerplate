/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';

const App = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>React Native Boilerplate</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 28,
    fontWeight: '900',
  },
});

export default App;
