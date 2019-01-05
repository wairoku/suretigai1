import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView,Avatar,Card, Icon, Button, List, ListItem,FlatList } from 'react-native-elements';

const list = [
  {
    name: 'わいろく',
    subtitle: 'Vice President'
  },
  {
    name: 'わいろく',
    avatar_url: '/',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'わいろく',
    avatar_url: '/',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'わいろく',
    avatar_url: '/',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'わいろく',
    avatar_url: '/',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'わいろく',
    avatar_url: '/',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'わいろく',
    avatar_url: '/',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'わいろく',
    avatar_url: '/',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'わいろく',
    avatar_url: '/',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'わいろく',
    avatar_url: '/',
    subtitle: 'Vice Chairman'
  },
  
 
]
 


class HomeScreen extends React.Component {
  renderRow ({ item }) {
    return (
      <ListItem
        roundAvatar
        title={item.name}
        subtitle={item.subtitle}
        avatar={{uri:item.avatar_url}}
      />
    )
  }

  render() {
    return (<List>
      <FlatList
        data={list}
        renderItem={this.renderRow}
        keyExtractor={item => item.name}
      />
    </List>);


  }
}


export default HomeScreen;