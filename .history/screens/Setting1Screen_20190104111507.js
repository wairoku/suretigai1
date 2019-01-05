import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

class Setting1Screen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1}}>
            <Text> This is Setting1Screen</Text>
            
            <FormLabel>名前</FormLabel>
            <FormLabel>メールアドレス</FormLabel>
            <FormLabel>メッセージ</FormLabel>
            <FormValidationMessage></FormValidationMessage>
            
            <Button
             //title="Go to Setting2Screen"
             //onPress={() => this.props.nabigation.navigate('setting2')}
             />
             </View>
        );
    }
}

export default Setting1Screen;