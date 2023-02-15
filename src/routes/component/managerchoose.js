import React, { Component } from "react";
import { SafeAreaView, Text,View,Image,TextInput,TouchableOpacity } from "react-native";
import { logger } from "../../Allstyles";

export default class Managerchoose extends Component {
    state={
        number:"",
        password:"",
    }
    render() {
        return (
            <SafeAreaView style={logger.container}>
            <View style={{flex:1}}></View>
            <View style={{flex:6,justifyContent:"center",alignItems:"center"}}>
            <Text style={logger.txt1}>首護者</Text>
            <Text style={logger.txt3}>Mercury</Text>
            <Text style={logger.txt}>請輸入帳號</Text>
            
            <TextInput style={logger.type} 
            placeholder="請輸入帳號"
            autoCorrect={false}                                                                                  
            onChangeText={(text)=>{this.setState({member:text})}}
            />
            <Text style={logger.txt}>請輸入密碼</Text>
            <TextInput style={logger.type} 
            placeholder="請輸入密碼"
            secureTextEntry={true}  
            onChangeText={(text)=>{this.setState({password:text})}}
            />
            <TouchableOpacity style={logger.squ}
            onPress={()=>console.log(this.state.member,this.state.password)}>
                <Text style={logger.txt2}>確定</Text>
            </TouchableOpacity>
         </View>
         <Image style={{justifyContent:'flex-end',height:120,width:450,marginTop:130}} source={require('../../image/homeroad.jpg')} resizeMode={"stretch"}/>

         </SafeAreaView>
        );
    }
}