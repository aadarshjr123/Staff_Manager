import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => <View style={styles.container}>{props.children}</View>;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    //borderBottomWidth: 0,
    //shadowColor: '#000',
    //shadowOffset: {width: 0, height: 2},
    //shadowOpacity: 0.2,
    elevation: 1,
    marginLeft: 15,
    marginRight: 14,
    marginTop: 70,
    backgroundColor: '#FFFFFF',
    paddingBottom:45,
  },
});

export {Card};
