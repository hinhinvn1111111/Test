import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet,FlatList,ActivityIndicator } from 'react-native';
import color from '../../utils/color';
import HeaderCT from '../../components/HeaderCT'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import {actionGetList} from '../../redux/actions/ActionGetList'
class index extends Component {
    constructor(props){
        super(props)
        this.state={
            data : [],
            loading : false
        }
    }
    componentDidMount(){
        this.props.requestGetList()
    }
    componentWillReceiveProps(nextprops){
        if(this.props.listData !== nextprops.listData){
            let data = nextprops.listData
            this.setState({data})
        }
        if(this.props.loading !== nextprops.loading){
            let loading = nextprops.loading
            this.setState({loading})
        }
    }

    _renderItem = ({ item }) => (
        <View style={styles.viewitem}>
            <Image 
                style={styles.imageItem}
                source={{uri:item.ImageURL}}
            />
            <View style={styles.viewDes}>
                <Text style={styles.textDes}>{item.Title}</Text>
                <Text style={[styles.textDes,{marginTop:7}]}>$ {item.Price}</Text>
            </View>
        </View>
    )

    render() {
        let {data=[],loading=false} = this.state
        return (
            <View style={styles.contener}>
                <HeaderCT 
                    child={<Text style={styles.lable}>Hello John</Text>}
                />
                <View style={{flex:1,paddingLeft:24}}>
                    <View style={styles.viewtitle}>
                        <Text  style={styles.texttitle}>Get your coffee fix</Text>
                    </View>
                    {loading ? <ActivityIndicator size="large" color={color.active} style={{alignSelf:'center',marginTop:40}}/> : 
                        <FlatList 
                            keyExtractor={item => item.id}
                            data={data}
                            renderItem={this._renderItem}
                        />
                    }
                </View>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return ({
      listData: state.GetList.data,
      loading : state.GetList.loading
    })
}
const mapDispatchToProps = (dispatch) => ({
    requestGetList: (callbackSuccess, callbackError) =>
        dispatch(actionGetList(callbackSuccess, callbackError))
})
export default connect(mapStateToProps, mapDispatchToProps)(index)

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
    },
    viewitem:{
        flexDirection:'row',
        marginTop:31
    },
    imageItem:{
        width:69,
        height:67,
        borderRadius:13
    },
    viewDes:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:10
    },
    textDes:{
        fontSize:16,
        color:color.black,
        fontFamily:'SFCompactDisplay-Medium'
    },
    lable:{
        fontSize:22,
        color:color.white,
        paddingHorizontal:30
    }
})