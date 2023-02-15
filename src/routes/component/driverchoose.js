import React, { Component } from "react";
import { SafeAreaView, Text, TouchableOpacity, Image, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { driver } from "../../Allstyles";

// const connection =require("../sever");
export default class Driverchoose extends Component {
    // search=()=>{
    //     id=this.state.number;
    //     connection.query('SELECT * FROM users', function (error, results, fields) {
    //         if (error) throw error;
    //         console.log(results);
    //       });
    // }
    render() {
        return (

            <SafeAreaView style={driver.container}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 6, justifyContent: "center", alignItems: "center" }}>
                    <Text style={driver.txt1}>首護者</Text>
                    <Text style={driver.txt3}>Mercury</Text>
                    <Image style={{ height: 60, width: 80 }} source={require('../../image/number.png')} />
                    <Text style={driver.txt}>請輸入車牌</Text>
                    <TextInput style={driver.type}
                        placeholder="請輸入車牌"
                        autoCorrect={false}
                        autoCapitalize="characters"
                        onChangeText={(text) => { this.setState({ number: text }) }}
                    />
                    <TouchableOpacity style={driver.squ}
                        onPress={this.search}>
                        <Text style={driver.txt2}>確定</Text>
                    </TouchableOpacity>
                </View>
                <Image style={{ justifyContent: 'flex-end', height: 120, width: 450, marginTop: 130 }} source={require('../../image/homeroad.jpg')} resizeMode={"stretch"} />

            </SafeAreaView>
        );
    }
}
