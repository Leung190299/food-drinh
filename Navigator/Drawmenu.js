import { DrawerContentScrollView, DrawerItem,DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { color } from 'react-native-reanimated'
import { COLORS } from '../Constants'

import Icons from '../Constants/Icons'

const Drawmenu = (props) => {
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{alignItems:'center',backgroundColor:COLORS.secondary}}>
                <Image source={Icons.logo} />
            </View>
           
           <DrawerContentScrollView {...props} >
           <Text style={{backgroundColor:COLORS.secondary,height:40,fontSize:20,paddingLeft:20,paddingTop:5,borderBottomColor:COLORS.black,borderBottomWidth:1}}>Menu</Text>
               <DrawerItem
              icon={()=>(
                  <Image source={Icons.home} style={{tintColor:COLORS.primary,width:30,height:30}} />
              )}
               label='Home'
              
               onPress={()=>props.navigation.navigate('Homes')}/>
                <DrawerItem
              
              label='Menu'
              icon={()=>(
                <Image source={Icons.menu} style={{tintColor:COLORS.primary,width:30,height:30}} />
            )}
            onPress={()=>props.navigation.navigate('Menu')}
              />
              <Text style={{backgroundColor:COLORS.secondary,height:40,fontSize:20,paddingLeft:20,paddingTop:5,borderBottomColor:COLORS.black,borderBottomWidth:1}}>Buy</Text>
                <DrawerItem
              
              label='Cart'
              icon={()=>(
                <Image source={Icons.cart} style={{tintColor:COLORS.primary,width:30,height:30}} />
            )}
              onPress={()=>props.navigation.navigate('Cart')}/>

            <DrawerItem
              
              label='Quét mã'
              icon={()=>(
                <Image source={Icons.qrcode} style={{tintColor:COLORS.primary,width:30,height:30}} />
            )}
              onPress={()=>props.navigation.navigate('Scanner')}/>
           </DrawerContentScrollView>
        </View>
    )
}

export default Drawmenu
