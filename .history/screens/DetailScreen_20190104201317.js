import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Card } from "react-native-elements";

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Card title="HELLO WORLD" image={require("../img/cardimage.png")}>
          <Text style={{ marginBottom: 10 }}>
            ここに"名前"と"ひとこと"が入ります。
          </Text>
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
        </Card>
      </View>
    );
  }
}

export default DetailScreen;
