import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Icon, Button, List, ListItem } from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: '',
    subtitle: 'Vice Chairman'
  },
 
]
 


class HomeScreen extends React.Component {
  render(item) {
    return (
    <View style={{ flex: 1, justifyContent: 'center' , justifyContent: 'space-around',}}>
        <Text>This is HomeScreen</Text>

  return (
    <ListItem
      avatar={<Avatar
                rounded
                source={item.avatar_url && {uri: item.avatar_url}}
                title={item.name[0]}
              />}
      title={item.name}
      subtitle={item.subtitle}
    />
  )
}
  return (
    <List>
      <FlatList
        data={list}
        renderItem={this.renderRow}
        keyExtractor={item => item.name}
      />
    </List>
  )
}
      
        {/*<Card containerStyle={{padding: 0}} >
              {
                list.map((u, i) => {
                  return (
                    <ListItem
                      key={i}
                      roundAvatar
                      title={u.name}
                      avatar={{uri:u.avatar}}
                    />
                  );
                })
              }
            </Card>*/}

        <Button
         title="Go to DetailScreen"
         onPress={() => this.props.navigation.navigate('detail')}
         />
      </View>
    );
  }
}


export default HomeScreen;