import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar, FormLabel, FormInput, FormValidationMessage} from '../node_modules/react-native-elements';



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
     <View style={{ 
       flex: 1,
       flexDirection: 'column',
       justifyContent: 'space-around',
       alignItems:'center',
       }}>
       <Text>This is ProfileScreen,</Text>
          <Avatar
                xlarge
                rounded
                source={{uri: ""}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                />
            <FormLabel>名前</FormLabel>
            <FormLabel>メールアドレス</FormLabel>
            <FormLabel>ひとこと</FormLabel>
            {/* <FormInput onChangeText={someFunction}/> */}
            <FormValidationMessage></FormValidationMessage>

       <Button
       title= "Go to Setting1Screen"
       onPress={this.onPress}
       />
     </View>
   );
 }
}


export default ProfileScreen;