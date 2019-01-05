import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Avatar } from "react-native-elements";

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginBottom: 10 }}>
          ここに"名前"と"ひとこと"が入ります。
        </Text>

        <Avatar
          xlarge
          rounded
          source={{ uri: "https://picsum.photos/200?random" }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text>名前</Text>
        <Text>メールアドレス</Text>
        <Text>ひとこと</Text>

        <Button
          icon={{ name: "code" }}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="VIEW NOW"
        />
      </View>
    );
  }
}

export default DetailScreen;
