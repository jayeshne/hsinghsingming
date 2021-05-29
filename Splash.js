import React,{Component} from 'react';
import {View,ImageBackground,Image,StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import { Button, Text } from 'react-native';
import Homepage from './Homepage';

var bg=require('./universe.jpg');
var img=require('./yinyang.jpg');

const height=Dimensions.get("window").height;

export default class Splash extends Component
{

    constructor(props)
    {
        super(props);
        setTimeout(()=>{
            this.props.navigation.push('Homepage');
        },3000);
    }

    render()
    {
      return(
      <ImageBackground source={bg} style={{height:'100%',width:'100%',flex:1,alignItems:'center',justifyContent:'center'}}>
        <View style={this.styles.container}>  
          <Image source={img} style={{height:height*0.16,width:height*0.16,borderRadius:height*0.08,overflow:'hidden'}}></Image>
          <br></br>
          <Text style={{color:'gray',fontSize:'20px',justifyContent:'center'}}><b> Hsing Hsing Ming</b> </Text>
          <br></br>
        </View>
      </ImageBackground>
      );
    }

     styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        innerText: {
          color: 'white',
          fontSize:15,
          fontFamily:'Cochin'
        }
      });
}
