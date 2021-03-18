import React from 'react'
import { View, Text, ScrollView, Image, Button, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector, } from 'react-redux'
import { COLORS, SIZES } from '../../Constants'
import { addCount, remoCount, remoProduct } from '../../Reducer/ProductSlice'

const ListCart = () => {
    const Data=useSelector(state=>state.product);
     const dispatch = useDispatch();
    function themCout(index) {
        const action=addCount(index);
        dispatch(action);
    }
    function reCout(index) {
        const action=remoCount(index);
        dispatch(action);
    }
    function reProduct(id) {
        const action=remoProduct(id);
        dispatch(action);
    }
    if(Data.length<=0){
        return(
            <View  style={{height:SIZES.height-150,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:COLORS.primary}}>Bạn chưa gọi món!</Text>
            </View>
        )
    }
    return (
        <ScrollView style={{height:SIZES.height-150}} >
            <View>
           {Data.map((item,index)=>{
               return(
                   <View key={item.id} style={{flexDirection:'row',width:SIZES.width-4,margin:5,}} >
                    <Image source={{uri:item.image}} style={{height:120,width:90,borderRadius:5}}/>
                    <View style={{margin:10}}>
                        
                        <Text style={{fontSize:17,fontWeight:'bold',flex:1}}>{item.name}</Text>
                        <Text  style={{fontSize:15,fontWeight:'bold',color:COLORS.primary,marginTop:30}}>{item.price}.đ</Text>
                        <View style={{flexDirection:'row',flex:1,marginTop:10}}>
                            
                            <View style={{flexDirection:'row',marginLeft:100}}>
                            <TouchableOpacity style={{width:25,height:25,backgroundColor:COLORS.secondary,alignItems:'center', borderRadius:5}}
                            onPress={()=>reCout(index)}>
                                <Text  style={{fontSize:25,fontWeight:'bold',lineHeight:26}}>-</Text>
                            </TouchableOpacity>
                            <Text style={{marginHorizontal:10,marginVertical:3}}>{item.count}</Text>
                            <TouchableOpacity style={{width:25,height:25,backgroundColor:COLORS.secondary,alignItems:'center',borderRadius:5}}
                            onPress={()=>themCout(index)}
                            >
                                <Text  style={{fontSize:25,fontWeight:'bold',lineHeight:26}}>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:25,height:25,backgroundColor:'#df3030',alignItems:'center', marginHorizontal:15,borderRadius:5}}
                            >
                                <Text  style={{fontSize:25,fontWeight:'bold',lineHeight:25}}
                                 onPress={()=>reProduct(item.id)}>x</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                   </View>
               )
           })}
           </View>
        </ScrollView>
    )
}

export default ListCart
