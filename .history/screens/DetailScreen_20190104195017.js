import React from "react";
import { Card, Button, Icon, StyleSheet, Text, View } from "react-native";

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>This is DetailScreen</Text>

        {/* <Card
          title="HELLO WORLD"
          image={require("../img/スクリーンショット 2018-11-22 20.20.51.png")}
        >
          <Text style={{ marginBottom: 10 }}>
            ここにその人のひとことが入ります。
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

        <Icon
          name="close"
          onPress={() => this.props.navigation.navigate("home")}
        /> */}
      </View>
    );
  }
}

export default DetailScreen;
