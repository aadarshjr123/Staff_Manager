/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import createDataReducers from './reducers/createDataReducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  async componentDidMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyAswSbxZgaIOYrMWK0w7XJwq2jei8NGPEo',
      authDomain: 'employeesdetailsapp.firebaseapp.com',
      databaseURL: 'https://employeesdetailsapp.firebaseio.com',
      projectId: 'employeesdetailsapp',
      storageBucket: 'employeesdetailsapp.appspot.com',
      messagingSenderId: '827708131336',
      appId: '1:827708131336:web:2d5eb5537a389d39baa9bd',
      measurementId: 'G-5DPVHLGG2J',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(createDataReducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
