import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TakeVideoScreen from '../screens/TakeVideoScreen';
import ShowObjectScreen from '../screens/ShowObjectScreen';

const MainStack = createStackNavigator(
  { 
    Home: HomeScreen, 
    TakeVideo: TakeVideoScreen,
    ShowObject: ShowObjectScreen, 
  },
  {
    initialRouteName: 'Home',
  }
);

MainStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createBottomTabNavigator({
  MainStack,
});
