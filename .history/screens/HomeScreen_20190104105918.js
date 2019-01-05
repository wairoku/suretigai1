import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button,List, ListItem } from 'react-native-elements';



class HomeScreen extends React.Component {
  render() {
    return (


      
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>This is HomeScreen</Text>

        <Button
         title="Go to DetailScreen"
         onPress={() => this.props.navigation.navigate('detail')}
         />
      </View>
    );
  }
}

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  ... // more items
]

<List containerStyle={{marginBottom: 20}}>
  {
    list.map((l) => (
      <ListItem
        roundAvatar
        avatar={{uri:l.avatar_url}}
        key={l.name}
        title={l.name}
      />
    ))
  }
</List>

export default HomeScreen;