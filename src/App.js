import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet,StatusBar} from 'react-native';
import Login from './screen/Login'
import App from './routes'
import { Provider } from 'react-redux'
import store from './redux/store/index'
export default class index extends Component {
    state = {  }
    render() {
        return (
            <Provider store={store}>
                <View style={styles.contener}>
                    <StatusBar hidden={true} />
                    <App />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    contener:{
        flex:1
    }
})