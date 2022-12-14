import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

const Authentication = ({navigation}) => {
  return (
    <View style={styles.btnStyle}>
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Login"></Button>
      <Button
        onPress={() => navigation.navigate('Signup')}
        title="Signup"></Button>
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  btnStyle: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    justifyContent: 'space-around',
  },
});
