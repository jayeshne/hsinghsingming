import React from 'React';
import Splash from './Splash';
import Homepage from './Homepage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';
import Verse from './Verse';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
        <Stack.Screen options={{headerLeft:null,title:'Guide to Enlightenment',headerTintColor:'white',headerTitleStyle:{color:'white'},headerStyle:{backgroundColor:'black'}}} name="Homepage" component={Homepage} />
        <Stack.Screen  name="Splash1" component={Splash} />
        <Stack.Screen options={{title:'Guide to Enlightenment',headerTintColor:'white',headerTitleStyle:{color:'white'},headerStyle:{backgroundColor:'black'}}} name="Verse" component={Verse} />
        </Stack.Navigator>
        
    </NavigationContainer>
  );
}



export default App;