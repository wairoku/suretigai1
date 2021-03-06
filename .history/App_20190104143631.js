/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer ,createStackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailScreen';
import Setting1Screen from './screens/Setting1Screen';
import Setting2Screen from './screens/Setting2Screen';

const HomeStack = createStackNavigator({ 
  home: { screen: HomeScreen },
  detail: { screen: DetailScreen }
});

//追加
HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: (navigation.state.index === 0)
  };
};


const AddStack = createStackNavigator({ 
  add: { screen: AddScreen }
});

//追加
AddStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: (navigation.state.index === -1 )
  };
};

const ProfileStack = createStackNavigator({ 
  profile: { screen: ProfileScreen },
  setting1: { screen: Setting1Screen },
  setting2: { screen: Setting2Screen }
});

//追加
ProfileStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: (navigation.state.index === 0)
  };
};



const MainTab = createBottomTabNavigator({
  homeStack: { screen: HomeStack },
  
  profileStack: { screen: ProfileStack }
}, {
  navigationOptions: { tabBarVisible: false } // ←追記部分
});



const AppNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen },
  main: { screen: MainTab }
  });

export default createAppContainer(AppNavigator)