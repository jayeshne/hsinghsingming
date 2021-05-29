import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Splash from './Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text, ImageBackground } from 'react-native';

var bg=require('./universe.jpg');
var img=require('./yinyang.jpg');

export default function Verse({route,navigation}) {

  const { itemId, otherParam } = route.params;
  const { texts, otherParams } = route.params;

  const onShare = () =>{
    alert("called");
  }

  return (
    <ImageBackground source={bg} style={{height:'100%',width:'100%'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'white',alignItems: 'center', justifyContent: 'center',width:'85%'}}> {JSON.stringify(texts)}</Text>
      </View>
    </ImageBackground>
  );
}

