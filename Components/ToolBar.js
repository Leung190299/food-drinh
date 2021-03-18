import React from 'react'
import { View,StatusBar,TouchableOpacity,Text, Button, Image } from 'react-native'
import { COLORS } from '../Constants'
import Icons from '../Constants/Icons'

const ToolBar = (props) => {
    return (
        <View >
             <StatusBar />
             <View style={{height:50,backgroundColor:COLORS.primary,flexDirection:'row',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                <TouchableOpacity  style={{marginLeft:15,flex:1,marginTop:13}} onPress={()=>props.navigation.openDrawer()} >
                <Image source={Icons.menu} style={{height:25,width:25,alignSelf:'center'}}/> 
                </TouchableOpacity>
                <View style={{flex:11,justifyContent:'center'}}>
                <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold'}}>{props.name}</Text>
                </View>
            </View>
        </View>
    )
}

export default ToolBar
