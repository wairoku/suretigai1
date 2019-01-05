import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

class Setting1Screen extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems:'center',
                }}>
            <Text> This is Setting1Screen,プロフィール編集</Text>
            
            
            <Button
             title="Go to Setting2Screen"
             onPress={() => this.props.nabigation.navigate('setting2')}
             />
             </View>
        );
    }
}

export default Setting1Screen;