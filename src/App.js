import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MDLogo} from './assets';

const App = () => {
  return (
    <View style={styles.container}>
      <MDLogo />
      <Text style={styles.textStyle}>Hello, Amigos</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});
