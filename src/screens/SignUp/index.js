import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>SignUp</Text>
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

export default SignUp;
