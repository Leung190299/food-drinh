import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import { View, Text, Image, AsyncStorage } from 'react-native'


import { COLORS } from '../Constants'

import Icons from '../Constants/Icons'
import { Data } from '../Data/Data';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { useSelector } from 'react-redux'


const Drawmenu = (props) => {
  var account={
    name:'',
    phone:'',
    address:''
  }
  const shop=useSelector(state=>state.account);
  const [acc, setAcc]=React.useState(account);
  useEffect(()=>{
    const getdata=async()=>{
        setShop(await AsyncStorage.getItem('add'));
        Data.database().ref(shop).on('value',snapshot=>{
          setAcc({
            ...acc,
            name:snapshot.val().name,
            phone:snapshot.val().phone,
            address:snapshot.val().address
          })
        })
    }
    getdata();
  },[])
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{alignItems:'center',backgroundColor:COLORS.secondary}}>
            <QRCode content={shop} />
            <Text>Mã QR code</Text>
            </View>
           
           <DrawerContentScrollView {...props} >
           <Text style={{backgroundColor:COLORS.secondary,height:40,fontSize:20,paddingLeft:20,paddingTop:5,borderBottomColor:COLORS.black,borderBottomWidth:1}}>Menu</Text>
               <DrawerItem
              icon={()=>(
                  <Image source={Icons.home} style={{tintColor:COLORS.primary,width:30,height:30}} />
              )}
               label='Trang Chủ'
              
               onPress={()=>props.navigation.navigate('Home')}/>
                <DrawerItem
              
              label='Menu'
              icon={()=>(
                <Image source={Icons.menu} style={{tintColor:COLORS.primary,width:30,height:30}} />
            )}
            onPress={()=>props.navigation.navigate('Menu')}
              />
              <Text style={{backgroundColor:COLORS.secondary,height:40,fontSize:20,paddingLeft:20,paddingTop:5,borderBottomColor:COLORS.black,borderBottomWidth:1}}>Mua Hàng</Text>
                <DrawerItem
              
              label='Giỏ Hàng'
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
                <Text>{acc.name}</Text>
                <Text>{acc.phone}</Text>
        </View>
    )
}

export default Drawmenu
