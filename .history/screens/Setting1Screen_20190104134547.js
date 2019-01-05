import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

class Setting1Screen extends React.Component {
    render() {
        return (
            <View style={{ 
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems:'center',
                }}>
                <Text>プロフィール設定</Text>
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
                     <FormValidationMessage>未入力</FormValidationMessage>
            
            
              <Button
              large
              icon={{name: 'squirrel', type: 'octicon'}}
             title=" 完了　"
             onPress={() => this.props.nabigation.navigate('setting2')}
              />
             </View>
        );
    }
}

export default Setting1Screen;