import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../node_modules/react-native-elements';


class ProfileScreen extends React.Component {
    constructor(props) {
    super(props)
        this.onPress = this.onPress.bind(this)
    }
    onPress() {
        this.props.navigation.navigate('setting1')
    }
 render() {
   return (
     <View style={{ flex: 1, justifyContent: 'center' }}>
       <Text>This is ProfileScreen</Text>

       <Button
       title= "Go to Setting1Screen"
       onPress={this.onPress}
       />
     </View>
   );
 }
}


export default ProfileScreen;