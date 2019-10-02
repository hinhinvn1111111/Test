import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet,FlatList } from 'react-native';
import color from '../../utils/color';
import HeaderCT from '../../components/HeaderCT'
import { Actions } from 'react-native-router-flux';


export default class index extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.contener}>
                <HeaderCT title='Hello John.'/>
                <View style={{flex:1,paddingLeft:24}}>
                    <View style={styles.viewtitle}>
                        <Text onPress={()=>Actions.Cart()} style={styles.texttitle}>Get your coffee fix</Text>
                        {/* <FlatList 
                            data
                        /> */}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contener:{
        flex:1,
        backgroundColor:color.white
    },
    viewtitle:{
        marginTop:40,
        borderBottomWidth:3,
        borderColor:color.yellowDark
    },
    texttitle:{
        fontSize:18,
        color:color.black,
        paddingVertical:7,
        fontFamily:'SFCompactDisplay-Medium'
    }
})