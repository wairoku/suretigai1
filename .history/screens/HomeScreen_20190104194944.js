import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import {
  ScrollView,
  Avatar,
  Card,
  Icon,
  Button,
  List,
  ListItem
} from "react-native-elements";

import DetailScreen from "./DetailScreen";

const genPerson = () => ({
  name: "わいろく",
  subtitle: "Vice President",
  avatar_url: "https://picsum.photos/200?random"
});

const list = Array.from(Array(50).fill(genPerson()));

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    this.props.navigation.navigate("detail");
  }
  renderRow({ item }) {
    return (
      <ListItem
        roundAvatar
        title={item.name}
        subtitle={item.subtitle}
        avatar={{ uri: item.avatar_url }}
        onPress={this.onPress}
      />
    );
  }

  render() {
    return (
      <List>
        <FlatList
          data={list}
          renderItem={this.renderRow}
          keyExtractor={item => item.name}
        />
      </List>
    );
  }
}

export default HomeScreen;
