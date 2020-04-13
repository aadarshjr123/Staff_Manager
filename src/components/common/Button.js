import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, text}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'SF-Pro-Display-Medium',
  },
  button: {
    //flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#536FD5',
    borderWidth: 2,
    borderColor: '#292929',
    
    marginRight: 95,
    marginLeft: 95,
    borderRadius: 20,
  },
});

export {Button};
