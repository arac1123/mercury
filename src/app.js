import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeRoute from "../src/routes/component/home";
import DriverchooseRoute from './routes/component/driverchoose';
import { styles } from './Allstyles';
import { createStackNavigator } from '@react-navigation/stack';
import ManagerchooseRoute from './routes/component/managerchoose';
import { useState } from 'react';
import * as Crypto from 'expo-crypto';

const Stack = createStackNavigator();
export default function App() {
    return(
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeRoute} options={{headerShown:false}} />
          <Stack.Screen name="Driverchoose" component={DriverchooseRoute} options={{headerShown:false}}/>
          <Stack.Screen name="Managerchoose" component={ManagerchooseRoute} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>      
    )
    };
