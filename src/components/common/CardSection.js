import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardSection = props => (
  <View style={styles.container}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    //flex:1,

    borderBottomWidth: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
    top: 20,
    //bottom: 100,
    backgroundColor: '#e84545',
    justifyContent: 'flex-start',
    position: 'relative',
    flexDirection: 'row',
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export {CardSection};
