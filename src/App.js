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
      apiKey:apiKey ,
      authDomain: authDomain,
      databaseURL: databaseURL,
      projectId: projectId,
      storageBucket: storageBucket,
      messagingSenderId: messagingSenderId,
      appId: appId,
      measurementId: measurementId,
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
