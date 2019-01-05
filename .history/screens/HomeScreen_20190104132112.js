import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card,Icon,Button,List, ListItem } from 'react-native-elements';

const users = [
  {
     name: 'brynn',
     avatar: ''
  },

 ];
 


class HomeScreen extends React.Component {
  render() {
    return (


      
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>This is HomeScreen</Text>

        <Card containerStyle={{padding: 0}} >
              {
                users.map((u, i) => {
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
            </Card>

        <Button
         title="Go to DetailScreen"
         onPress={() => this.props.navigation.navigate('detail')}
         />
      </View>
    );
  }
}


export default HomeScreen;