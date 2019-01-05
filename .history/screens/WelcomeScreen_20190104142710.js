import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Alert, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDE_DATA = [
  { title: 'Step: 1', text: 'プロフィールを登録', uri: require('../assets/welcome_screen1.jpg') },
  { title: 'Step: 2', text: 'アプリをオンにして、すれ違った人とメッセージを交換', uri: require('../assets/welcome_screen2.jpg'),justifyContent:'center'},
  { title: 'Step: 3', text: '気軽に会社の人と話そう！', uri: require('../assets/welcome_screen3.jpg') },
];

class WelcomeScreen extends React.Component {
  onStartButtonPress = () => {
    this.props.navigation.navigate('main')
  }

  renderLastButton(index) {
    if (index === SLIDE_DATA.length - 1) {
      return (
        <Button
          style={{ padding: 10 }}
          buttonStyle={{ backgroundColor: 'deepskyblue' }}
          title="さあ、はじめましょう！"
          onPress={this.onStartButtonPress}
        />
      );
    }
  }

  renderSlides() {
    return SLIDE_DATA.map((slide, index) => {
      return (
        <View
          key={index}
          style={styles.slideStyle}
        >
          <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>{slide.title}</Text>
            <Text style={styles.textStyle}>{slide.text}</Text>
          </View>

          <Image
            style={{ flex: 2 }}
            resizeMode="contain"
            source={slide.uri}
          />

          <View style={styles.containerStyle}>
            {this.renderLastButton(index)}
            <Text style={styles.textStyle}>{index + 1} / 3</Text>
          </View>
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slideStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    width: SCREEN_WIDTH
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    padding: 5
  }
});

export default WelcomeScreen;