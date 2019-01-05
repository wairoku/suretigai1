import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Avatar,
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

class Setting1Screen extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    this.props.navigation.navigate("profile");
  }
  onChange() {}
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
          backgroundColor: "skyblue"
        }}
      >
        <Text>プロフィール設定</Text>
        <Avatar
          xlarge
          rounded
          source={{ uri: "" }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />

        <FormLabel>名前</FormLabel>
        <FormInput onChangeText={this.onChange} />
        <FormLabel>メールアドレス</FormLabel>
        <FormInput onChangeText={this.onChange} />
        <FormLabel>ひとこと</FormLabel>
        <FormInput onChangeText={this.onChange} />
        <FormValidationMessage>未入力</FormValidationMessage>

        <Button
          largeicon={{ color: "green", name: "envira", type: "font-awesome" }}
          title="完了"
          onPress={this.onPress}
        />
      </View>
    );
  }
}

export default Setting1Screen;
