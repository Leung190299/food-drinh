
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator}from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native';
import TabBar from './Navigator/TabBar';
import Drawmenu from './Navigator/Drawmenu';

import { Provider } from 'react-redux';
import store from './Data/Store';
import ScannerScreen from './Screens/ScannerScreen';



const drawer=createDrawerNavigator ();
const stack=createStackNavigator();
const drawNavi=()=>{
  return(
  <drawer.Navigator 
      
     drawerContent={props=><Drawmenu {...props} />}
     initialRouteName='Home'
      > 
        <drawer.Screen name='Homes' component={TabBar}/>    
      </drawer.Navigator>
  )
}
export default function App() {
  return (
    
    <Provider store={store}>
    <NavigationContainer>

      <stack.Navigator screenOptions={
        {
          headerShown:false
        }
      
      } initialRouteName='Scanner'>
        <stack.Screen name='Scanner' component={ScannerScreen}/>
        <stack.Screen name='Homes' component={drawNavi}/>
       
      </stack.Navigator>
     
    </NavigationContainer>
    </Provider>
  );
}


