import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
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

export default Login;
