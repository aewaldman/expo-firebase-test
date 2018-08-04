import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';

const LoginStack = createStackNavigator({ Login: LoginScreen });
const SignupStack = createStackNavigator({ Signup: SignupScreen });
const ForgotPasswordStack = createStackNavigator({ ForgotPassword: ForgotPasswordScreen });

export default createSwitchNavigator(
  {
    Login: LoginStack,
    Signup: SignupStack,
    ForgotPassword: ForgotPasswordStack,
  },
  {
    initalRouteName: 'Login',
  }
);