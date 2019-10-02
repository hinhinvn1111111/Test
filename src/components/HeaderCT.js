import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import color from '../utils/color';

export default class index extends PureComponent {
    render() {
        return (
            <View style={styles.contener}>
                <Text style={styles.lable}>{this.props.title || ''}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contener:{
        height:60,
        backgroundColor:color.brlogin,
        justifyContent:'center',
        paddingHorizontal:30
    },
    lable:{
        fontSize:22,
        color:color.white
    }
})