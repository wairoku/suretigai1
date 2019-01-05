import React from 'react';
import ReactDOM from 'react-dom';
import { Icon,StyleSheet, Text, View } from 'react-native';

class DetailScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent:'center' }}>
            <Text>This is DetailScreen</Text>

            <Icon
             name ="close"
             onPress={() => this.props.navigation.navigate('home')}
             />
            </View>

        );
    }
}

export default DetailScreen;