import React, { Component } from "react";
import { SafeAreaView, View,Text, Alert, Button, TouchableOpacity, Image, BackHandler, Animated } from "react-native";
import { homestyle } from "../../Allstyles";
import exitapp from "react-native-exit-app";

export default class Home extends Component {
    

    render(){
        return(
            
                <SafeAreaView style={homestyle.container}>
                    <View style={homestyle.fle2}>
                    <Text style={homestyle.txt}>  首護者</Text>
                    <Text style={homestyle.txt}>Mercury</Text>
                    </View>
                    <View style={homestyle.fle}>
                        <TouchableOpacity style={homestyle.cir}
                        onPress={()=>{this.props.navigation.navigate('Driverchoose', { title: 'React' })}}>
                            <Text style={homestyle.txt2}>駕駛者</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={homestyle.cir}
                        onPress={()=>{this.props.navigation.navigate('Managerchoose', { title: 'React' })}}>
                            <Text style={homestyle.txt2}>主管</Text>
                        </TouchableOpacity>
                    </View>
                    <Image style={{justifyContent:'flex-end',height:120,width:450}} source={require('../../image/homeroad.jpg')} resizeMode={"stretch"}/>
                      
                </SafeAreaView>
    
        )

    }
    
}