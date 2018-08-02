import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import LoginScreen from './../screens/auth/LoginScreen';
import SignupScreen from './../screens/auth/SignupScreen';
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen';

const LoginStack = createStackNavigator({ Login: LoginScreen });
const SignupStack = createStackNavigator({ Signup: SignupScreen });
const ForgotPasswordStack = createStackNavigator({ ForgotPassword: ForgotPasswordScreen });
const AppStack = createStackNavigator({ Main: MainTabNavigator });

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  
    Login: LoginStack,
    Signup: SignupStack,
    ForgotPassword: ForgotPasswordStack,
    Main: AppStack,

});