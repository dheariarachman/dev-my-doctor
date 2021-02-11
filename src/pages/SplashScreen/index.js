import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MDLogo} from '../../assets';
import {MDText} from '../../components';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <MDLogo />
      <MDText style={styles.textStyle}>My Doctor</MDText>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
