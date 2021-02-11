import React from 'react';
import {StyleSheet, Text} from 'react-native';

const MDText = ({children, style}) => {
  return <Text style={[styles.textSetting, style]}>{children}</Text>;
};

export default MDText;

const styles = StyleSheet.create({
  textSetting: {
    fontFamily: 'Raleway-Regular',
  },
});
