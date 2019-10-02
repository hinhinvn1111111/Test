import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import Home from '../Home'
import Cart from '../Cart'
import NoScreen from '../NoScreen'
import color from '../../utils/color';
import { Icon } from 'react-native-eva-icons';

export default class index extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            // selectedTab:'Home'
            selected : true,
            count : 0,
            data : [],
            checklogin : null
        }
    }
    render() {
        return (
            <View style={styles.contener}>
                <TabNavigator  tabBarStyle={{backgroundColor:color.brlogin}}>
                    <TabNavigator.Item 
                        title="faq"
                        selected={this.state.selectedTab === 'faq'}                       
                        renderIcon={() => <Icon name='question-mark-circle-outline' width={24} height={24} fill={color.white}/>}
                        renderSelectedIcon={() => <Icon name='question-mark-circle' width={24} height={24} fill={color.yellowDark}/>}
                        onPress={() => this.setState({ selectedTab: 'faq',selected:false })}>
                        {<NoScreen />}
                    </TabNavigator.Item>
                    <TabNavigator.Item 
                        title="orders"
                        selected={this.state.selectedTab === 'orders'}                       
                        renderIcon={() => <Icon name='file-text-outline' width={24} height={24} fill={color.white}/>}
                        renderSelectedIcon={() => <Icon name='file-text' width={24} height={24} fill={color.yellowDark}/>}
                        onPress={() => this.setState({ selectedTab: 'orders',selected:false })}>
                        {<NoScreen />}
                    </TabNavigator.Item>
                    <TabNavigator.Item 
                        title="home"
                        selected={this.state.selectedTab === 'home'}                       
                        renderIcon={() => <Icon name='home-outline' width={24} height={24} fill={color.white}/>}
                        selected={this.state.selected}
                        renderSelectedIcon={() => <Icon name='home' width={24} height={24} fill={color.yellowDark}/>}
                        onPress={() => this.setState({ selectedTab: 'home',selected:true })}>
                        {<Home />}
                    </TabNavigator.Item>
                    <TabNavigator.Item 
                        title="cart"
                        selected={this.state.selectedTab === 'cart'}                       
                        renderIcon={() => <Icon name='shopping-cart-outline' width={24} height={24} fill={color.white}/>}
                        renderSelectedIcon={() => <Icon name='shopping-cart' width={24} height={24} fill={color.yellowDark}/>}
                        onPress={() => this.setState({ selectedTab: 'cart',selected:false })}
                        badgeText='3'
                        >
                        {<Cart />}
                    </TabNavigator.Item>
                    <TabNavigator.Item 
                        title="account"
                        selected={this.state.selectedTab === 'account'}                       
                        renderIcon={() => <Icon name='person-outline' width={24} height={24} fill={color.white}/>}
                        renderSelectedIcon={() => <Icon name='person' width={24} height={24} fill={color.yellowDark}/>}
                        onPress={() => this.setState({ selectedTab: 'account',selected:false })}>
                        {<NoScreen />}
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contener:{
        flex:1,
        backgroundColor:color.brlogin
    }
})