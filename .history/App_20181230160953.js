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
//import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailScreen';
import Setting1Screen from './screens/Setting1Screen';
import Setting2Screen from './screens/Setting2Screen';






 class HomeScreen extends Component {
  render() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      // ↓この文消さないと`react-navigation`が上手く動かず、画面真っ白になっちゃう
      //alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }}>
      <Text>This is HomeScreen</Text>
    </View>
    );
  }
}

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
  addStack: { screen: AddStack },
  profileStack: { screen: ProfileStack }
});



const AppNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen },
  main: {screen: MainTab }
  }, {
    navigationOptions: { tabBarVisible: false }
  })
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     // ↓この文消さないと`react-navigation`が上手く動かず、画面真っ白になっちゃう
//     //alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

export default createAppContainer(AppNavigator)