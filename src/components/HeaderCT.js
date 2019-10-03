import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import color from '../utils/color';

export default class index extends PureComponent {
    render() {
        let {child} = this.props
        return (
            <View style={styles.contener}>
                {child}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contener:{
        height:Dimensions.get('window').height/10,
        backgroundColor:color.brlogin,
        justifyContent:'center',
        // paddingHorizontal:30
    }
})