import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Button,
  Avatar,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "../node_modules/react-native-elements";

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    this.props.navigation.navigate("setting1");
  }
  onChange() {}
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "skyblue"
        }}
      >
        <Text>あなたのプロフィール</Text>
        <Avatar
          xlarge
          rounded
          source={{ uri: "" }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text>名前</Text>
        <Text>メールアドレス</Text>
        <Text>ひとこと</Text>

        <Button title="プロフィールを設定する" onPress={this.onPress} />
      </View>
    );
  }
}

export default ProfileScreen;
