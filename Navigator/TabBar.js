import React from 'react'
import { View, Text, Image } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen';
import CartScreen from '../Screens/CartScreen';
import { COLORS } from '../Constants';
import Icons from '../Constants/Icons';
import MenuScreen from '../Screens/MenuScreen';
import { useSelector } from 'react-redux';
const bottom=createBottomTabNavigator();
const TabBar = () => {
    const count=useSelector(state=>state.product);
    return (
        
       <bottom.Navigator
       tabBarOptions={{
           style:{
               backgroundColor:COLORS.primary,
           },
           activeTintColor:COLORS.white,
             inactiveTintColor:COLORS.primary
       }}
       initialRouteName='Homes'
       >
           <bottom.Screen name='Homes'
           
            options={{
                tabBarIcon:()=>(
                    <Image source={Icons.home} resizeMode='contain' style={{width:25,
                        height:25,
                        tintColor:COLORS.white}}/>
                )
            }} component={HomeScreen}/>
             <bottom.Screen name='Menu'
            options={{
                tabBarIcon:()=>(
                    <Image source={Icons.menu} resizeMode='contain' style={{width:25,
                        height:25,
                        tintColor:COLORS.white}}/>
                )
            }} component={MenuScreen}/>
           <bottom.Screen name='Cart'
           
           options={{
            tabBarIcon:()=>(
                <View style={{width:30,
                    height:30,
                    }} >
                        
                <Image source={Icons.cart} resizeMode='contain' style={{width:25,
                    height:25,
                    tintColor:COLORS.white,marginLeft:6}}/>
                    <View style={{position:'absolute',top:0,backgroundColor:'#ff6464',height:15,width:15,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                            <Text
                            style={{fontWeight:'bold', color:'#fff'}}>{count.length}</Text>
                        </View>

                </View>
            )
        }}component={CartScreen}/>
       </bottom.Navigator>
    )
}

export default TabBar
