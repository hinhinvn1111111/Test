// import React from 'react';
// import { StyleSheet,View,Text,Image } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';

// const slides = [
//   {
//     key: 'somethun',
//     title: 'Title 1',
//     text: 'Description.\nSay something cool',
//     image: require('./assets/a1.jpg'),
//     backgroundColor: '#59b2ab',
//   },
//   {
//     key: 'somethun-dos',
//     title: 'Title 2',
//     text: 'Other cool stuff',
//     image: require('./assets/a1.jpg'),
//     backgroundColor: '#febe29',
//   },
//   {
//     key: 'somethun1',
//     title: 'Rocket guy',
//     text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
//     image: require('./assets/a1.jpg'),
//     backgroundColor: '#22bcb5',
//   }
// ];

// export default class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       showRealApp: false
//     }
//   }
  
//   _renderItem = ({ item }) => {
//     return (
//       <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'lightblue',}}>
//         <Text style={{color:'black'}}>{item.title}</Text>
//           <Image style={{width:100,height:100}} source={{uri:'data:image/jpeg;base64,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'}} />
//         <Text style={{color:'black'}}>{item.text}</Text>
//       </View>
//     );
//   }
//   _onDone = () => {
//     // User finished the introduction. Show real app through
//     // navigation or simply by controlling state
//     this.setState({ showRealApp: true });
//   }
//   render() {
//     if (this.state.showRealApp) {
//       return <View style={{flex:1,backgroundColor:'red'}}/>;
//     } else {
//       return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
//     }
//   }
// }

import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class index extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.contener}>
                <Text style={{
                    fontFamily: "SFCompactDisplay-Bold",
                    fontSize: 18,
                    // fontWeight: "bold",
                    // fontStyle: "normal",
            }}>Không khí xung quanh</Text>
            <Text
                style={{
                    fontSize: 18,
                }}
            >Không khí xung quanh</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contener:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        // backgroundColor:'lightblue'
    }
})