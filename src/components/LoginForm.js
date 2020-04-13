/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
// import {View} from 'react-native';
import {Input, Text, Image} from 'react-native-elements';
import {Card, CardSection, Button, Spacer} from './common';
import {connect} from 'react-redux';
import {emailChange, passwordChange} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChange(text);
  }

  onPasswordChange(text) {
    this.props.passwordChange(text);
  }

  render() {
    return (
      <Card>
        <Image
          style={{
            flex: 1,
            marginBottom: 50,
            width: 483,
            height: 670,
            opacity: 0.1,
            borderRadius: 10,
          }}
          source={require('/home/tank/my-react-projects/EmpmanaG/assets/images/image1.jpg')}
        />
        <CardSection>
          <Text
            style={{
              left: 110,
              alignSelf: 'flex-start',
              top: 25,
              fontSize: 70,
              color: '#fff',
              fontFamily: 'Caveat-Bold',
            }}>
            Employee
          </Text>
        </CardSection>

        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        {/* username */}
        <Input
          fontFamily="SF-Pro-Display-Medium"
          placeholderTextColor="#e84545"
          labelStyle={{fontFamily: 'SF-Pro-Display-Medium', color: '#e84545'}}
          label="Email"
          placeholder="you@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <Spacer />
        {/* password */}
        <Input
          fontFamily="SF-Pro-Display-Medium"
          placeholderTextColor="#536FD5"
          labelStyle={{fontFamily: 'SF-Pro-Display-Medium', color: '#536FD5'}}
          label="Password"
          placeholder="*********"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <Spacer />

        <Button text="Sign-In" />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

export default connect(
  mapStateToProps,
  {emailChange, passwordChange},
)(LoginForm);
