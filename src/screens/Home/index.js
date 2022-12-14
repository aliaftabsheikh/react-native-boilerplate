import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
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

export default Home;
