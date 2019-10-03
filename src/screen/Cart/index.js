import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet,FlatList,Dimensions } from 'react-native';
import color from '../../utils/color';
import HeaderCT from '../../components/HeaderCT'
import { connect } from 'react-redux'
import { Icon } from 'react-native-eva-icons';
import {ActionsPlus,ActionsReduce,ActionsRemove} from '../../redux/actions/ActionCart'
import AppConfig from '../../AppConfig'
class index extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            data : [],
            loading : false,
            total:0,
            Qty : 0
        }
        this._handleClick = this._handleClick.bind(this)
        this._handleUpdate = this._handleUpdate.bind(this)
    }

    _handleUpdate(arrOrigin){
        let data = arrOrigin || []
        let total = 0
        let Qty = 0
        for(let i of data){
            total += i.Price * i.count
            Qty += i.count
        }
        // this.setState({total})
        this.setState({data,total,Qty},()=>this.forceUpdate())
    }

    componentDidMount(){
        this._handleUpdate(this.props.listData)
    }

    _handleClick(position,type){
        switch (type) {
            case AppConfig.PLUS:
                this.props.requestPlus(position,()=>{})
                return 
            case AppConfig.REDUCE:
                this.props.requestReduce(position,()=>{})
                return 
            case AppConfig.REMOVE:
                this.props.requestRemove(position,()=>{})
            default:
                break;
        }
    }

    _renderItem = ({ item,index }) => (
        <View style={styles.viewitem}>
            <Image 
                style={styles.imageItem}
                source={{uri:item.ImageURL}}
            />
            <View style={{flex:4,paddingHorizontal:7,justifyContent:'space-between'}}>
                <Text numberOfLines={1} style={styles.titleItem}>{item.Title}</Text>
                <View style={{flex:1}}>
                    <Text numberOfLines={1} style={styles.textDesItem}>Iced, 50% Sugar, Single Shot.</Text>
                </View>
                <View style={{flexDirection:'row',flex:1,alignItems:'flex-end'}}>
                    <TouchableOpacity onPress={()=>this._handleClick(index,AppConfig.REDUCE)} style={{width:20,height:20,borderRadius:10,backgroundColor:color.black,justifyContent:'center',alignItems:'center'}}>
                        <Icon name='minus' width={16} height={16} fill={color.white}/>
                    </TouchableOpacity>
                    <View style={{marginHorizontal:12}}><Text style={{color:color.black,fontSize:16}}>{item.count}</Text></View>
                    <TouchableOpacity onPress={()=>{
                        if(item.count < item.MaxOrder){
                            this._handleClick(index,AppConfig.PLUS)
                        }else{
                            alert('MaxOrder is ' + item.MaxOrder)
                        }
                    }} style={{width:20,height:20,borderRadius:10,backgroundColor:color.black,justifyContent:'center',alignItems:'center'}}>
                        <Icon name='plus' width={16} height={16} fill={color.white}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1,alignItems:'flex-end',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>this._handleClick(index,AppConfig.REMOVE)}>
                    <Icon name='close-square' width={24} height={24}/>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius:10,borderColor:color.borderLight,borderWidth:1}}>
                    <Text style={{paddingHorizontal:10}}>edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    componentWillReceiveProps(nextprops){
        let data = nextprops.listData
        this._handleUpdate(data)
    }

    render() {
        let {data=[],total=0,Qty=0} = this.state 
        return (
            <View style={styles.contener}>
                <HeaderCT 
                    child={
                        <View style={styles.viewtitle}>
                            <Text  style={styles.texttitle}>My Cart</Text>
                        </View>
                    }
                />
                <View style={[styles.contener,{backgroundColor:color.white,padding:12}]}>
                    <View style={styles.viewTop}>
                        <View style={styles.viewContentTop}>
                            <Text style={styles.textContentTop}>Qty : {Qty} Cups</Text>
                        </View>
                        <View style={styles.viewContentTop}>
                            <Text style={styles.textContentTop}>Total: ${total}</Text>
                        </View>
                    </View>
                    <FlatList 
                        keyExtractor={item => item.id}
                        data={data}
                        renderItem={this._renderItem}
                        extraData={this.state}
                    />
                </View>
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
    requestPlus: (position,callbackSuccess) =>
        dispatch(ActionsPlus(position,callbackSuccess)),
    requestReduce: (position,callbackSuccess) =>
        dispatch(ActionsReduce(position,callbackSuccess)),
    requestRemove: (position,callbackSuccess) =>
        dispatch(ActionsRemove(position,callbackSuccess))
})
export default connect(mapStateToProps, mapDispatchToProps)(index)

const styles = StyleSheet.create({
    contener:{
        flex:1
    },
    viewtitle:{
        marginLeft:30,
        borderBottomWidth:3,
        borderColor:color.yellowDark
    },
    texttitle:{
        fontSize:20,
        color:color.white,
        paddingVertical:7,
        fontFamily:'SFCompactDisplay-Medium'
    },
    viewTop:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10
    },
    viewContentTop:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    textContentTop:{
        fontSize:18,
        color:color.black,
        fontFamily:'SFCompactDisplay-Medium'
    },
    viewitem:{
        flexDirection:'row',
        padding:10,
        width:Dimensions.get('window').width-45,
        height:100,
        backgroundColor:color.white,
        margin:10,
        justifyContent:'space-between',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    imageItem:{
        width:50,
        height:50,
        resizeMode:'cover',
        borderRadius:13
    },
    titleItem:{
        fontSize:16,
        color:color.black,
        fontFamily:'SFCompactDisplay-Medium'
    },
    textDesItem:{
        fontSize:12,
        color:color.grey,
        fontFamily:'SFCompactDisplay-Semibold'
    }
})