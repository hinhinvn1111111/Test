import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet,StatusBar} from 'react-native';
import Login from './screen/Login'
import App from './routes'
export default class index extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.contener}>
                <StatusBar hidden={true} />
                <App />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contener:{
        flex:1
    }
})