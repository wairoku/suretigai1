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
    // <View style={{ flex: 1, justifyContent: 'center' , justifyContent: 'space-around', }}>
        {/* <Text>This is HomeScreen</Text> */}
      

      {/*return (
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
    }*/}
    
      
        {/* <Card containerStyle={{padding: 0}} >
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
            </Card> */}

        {/*<Button
         title="Go to DetailScreen"
         onPress={() => this.props.navigation.navigate('detail')}
        />*/}
      // </View>

  }
}


export default HomeScreen;