import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import Home from '../Home'
import Cart from '../Cart'
import NoScreen from '../NoScreen'
import color from '../../utils/color';
import { Icon } from 'react-native-eva-icons';
import { connect } from 'react-redux'
class index extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            // selectedTab:'Home'
            selected : true,
            count : 0,
            data : [],
            checklogin : null,
            count : 0
        }
        this._UpdateCount = this._UpdateCount.bind(this)
    }

    _UpdateCount(dataOrigin){
        let data = dataOrigin || []
        let count = 0
        for(let i of data){
            count += i.count
        }
        this.setState({count},()=>this.forceUpdate())
    }

    componentDidMount(){
        this._UpdateCount(this.props.listData)
    }

    componentWillReceiveProps(nextprops){
        this._UpdateCount(nextprops.listData)
    }


    render() {
        let {count} = this.state || 0
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
                        badgeText={count===0 ? '' : count}
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

const mapStateToProps = (state) => {
    return ({
        listData: state.CartReducer.data || [],
        loading : state.CartReducer.loading || false
    })
}
const mapDispatchToProps = (dispatch) => ({
    // requestGetList: (callbackSuccess, callbackError) =>
    //     dispatch(actionGetList(callbackSuccess, callbackError))
})
export default connect(mapStateToProps, mapDispatchToProps)(index)

const styles = StyleSheet.create({
    contener:{
        flex:1,
        backgroundColor:color.brlogin
    }
})