import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {MDText} from '..';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer(type)} onPress={onPress}>
      <MDText align="center" type={type} style={styles.textCenter(type)}>
        {title}
      </MDText>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: (type) => ({
    backgroundColor: type === 'primary' ? '#0bcad4' : 'white',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 8,
  }),
  textCenter: (type) => ({
    textAlign: 'center',
    fontWeight: '500',
    color: type === 'primary' ? 'white' : 'black',
  }),
});
