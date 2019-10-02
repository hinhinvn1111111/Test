import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, StyleSheet,TextInput,Dimensions,ActivityIndicator} from 'react-native';
import color from '../../utils/color';
import {Icon} from 'react-native-eva-icons'
import api from '../../api'
import {Actions} from 'react-native-router-flux'

console.disableYellowBox = true;

const Lable = props => {
    return(
        <View style={styles.lable}>
            <Icon name={props.icon} width={30} height={30} fill={color.white}/>
            <TextInput 
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={(vl)=>props.onChangeText(vl)}
                style={styles.textinput}
                placeholderTextColor={color.white}
            />
        </View>
    )
}


export default class index extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            pwd : '',
            isLoading : false
        }
        this._handleLogin = this._handleLogin.bind(this)
    }

    onChangeText=(name,vl)=>{
        this.setState({['name']:vl})
    }

    _handleLogin(){
        let {email,pwd} = this.state
        this.setState({isLoading:true})
        try {
            api.getToken({username:email,password:pwd})
            .then(res=>{
                if(res.status===200){
                    this.setState({isLoading:false})
                    Actions.Template()
                }else{
                    alert(res.problem)
                    this.setState({isLoading:false})
                }
            })
        } catch (error) {
            alert(error)
            this.setState({isLoading:false})
        }
    }

    render() {
        return (
            <View style={styles.contener}>
                <View style={styles.viewlogo}>
                    <Text style={styles.logo}>logo</Text>
                </View>
                <View style={styles.viewcontent}>
                    <Lable 
                        icon='email-outline'
                        placeholder='Email'
                        value={this.state.email}
                        onChangeText={(vl)=>this.setState({email:vl})}
                    />
                    <Lable 
                        icon='lock-outline'
                        placeholder='Password'
                        value={this.state.pwd}
                        onChangeText={(vl)=>this.setState({pwd:vl})}
                    />
                    <TouchableOpacity onPress={this._handleLogin} style={styles.btn}>
                        {this.state.isLoading ? <ActivityIndicator size="small" color={color.active} /> : <Text style={styles.textbtn}>Login</Text>}  
                    </TouchableOpacity>
                    <Text style={styles.textbottom}>No Account? SIGN UP</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contener:{
        flex:1,
        paddingHorizontal:24,
        backgroundColor:color.brlogin
    },
    viewlogo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },  
    logo:{
        color : color.yellowDark,
        fontSize:20,
        fontFamily:'SFCompactDisplay-Bold',
        marginTop:50
    },
    viewcontent:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center'
    },
    lable:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth: 1,
        borderColor:color.white,
        width:Dimensions.get('window').width-48,
        marginTop:7
    },
    btn:{
        width:Dimensions.get('window').width/2,
        borderRadius:30,
        backgroundColor:color.yellowDark,
        justifyContent:"center",
        alignItems:'center',
        marginTop:36,
        height:40
    },
    textbtn:{
        // paddingVertical:10,
        color:color.white,
        fontFamily:'SFCompactDisplay-Bold'
    },
    textbottom:{
        color:color.white,
        marginVertical:12,
        fontSize:13
    },
    textinput:{
        color:color.white,
        flex:1
    }
})