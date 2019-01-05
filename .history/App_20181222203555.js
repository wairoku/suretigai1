/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import ProfileScreen from './screens/ProfileScreen';


export default class App extends Component {
  render() {
        const NavigatorTab = createBottomTabNavigator({
        welcome: { screen: WelcomeScreen },
        main: createBottomTabNavigator({
        homeStack: { screen: HomeScreen },
        addStack: { screen: AddScreen },
        profileStack: { screen: ProfileScreen } 
      })
});
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      <NavigatorTab />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // ↓この文消さないと`react-navigation`が上手く動かず、画面真っ白になっちゃう
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
