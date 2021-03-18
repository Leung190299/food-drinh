import React from 'react'
import { View, Text, ScrollView ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import { COLORS, SIZES } from '../../Constants'
import Icons from '../../Constants/Icons'
import { useDispatch } from "react-redux";
import { addProduct } from '../../Reducer/ProductSlice';

const MenuProduct = ({Data}) => {
    const dispatch = useDispatch()
    function them(item){
        const sp={
            id:item.id,
            name:item.name,
            count:1,
            price:item.price,
            image:item.imageURL,

        }
        const action=addProduct(sp);
        
        dispatch(action);
       
    }
    return (
        <View>
        <ScrollView style={{width:SIZES.width}}>
            {Data.map(item=>{
                return(
                  
                    <View key={item.id}  style={styles.containerItem}>
                        <Image source={{uri:item.imageURL}} style={{width:100,height:100,marginRight:20,borderRadius:10}} />
                        <View>
                            <Text style={styles.name}>{item.name}</Text>
                            <View style={{flexDirection:'row',flex:1}}>
                           
                            <Text style={styles.address}>{item.price}.đ</Text>
                            </View>
                            <View style={{flexDirection:'row',marginTop:15,alignSelf:'center',alignItems:'center',alignContent:'center'}}>
                                <Image source={Icons.heart1} style={{width:20,height:20,tintColor:COLORS.primary,marginRight:5}}/>
                            <Text>{item.like}</Text>
                            <TouchableOpacity onPress={()=>them(item)} style={{width:25,height:25,backgroundColor:'#27fc37',alignItems:'center', marginHorizontal:15,borderRadius:5,marginLeft:100}}>
                                <Image source={Icons.cart} style={{height:25,width:25,tintColor:'#ff9'}}/>
                            </TouchableOpacity>
                            </View>
                        </View>
                        
                    </View>
                    
                )
            })}
       
        </ScrollView>
        </View>
    )
}

export default MenuProduct
const styles=StyleSheet.create({
    container:{
    flex:1, 

   },
   name:{
       fontSize:20,
       fontStyle:'italic',
       fontWeight:'bold',
       color:'#333',
       flex:1
       
   },
   address:{
       marginVertical:5,
    color:'#fc3838',
    fontSize:20
   },

   containerItem:{
       flexDirection:'row',
       paddingVertical:6,
       borderBottomWidth:1,
       borderBottomColor:COLORS.secondary,
   },

   scrollview:{
       marginVertical:5,
       marginHorizontal:10,
   },
   title:{
    fontSize:20,
    alignSelf:'center',
    alignContent:'center',
    marginTop:25,
    color:COLORS.white
   },
   hender:{
       width:SIZES.width,
       height:60,
       backgroundColor:COLORS.primary,
       alignSelf:'auto',
       alignItems:'center',
       alignContent:'center'
       

   }
})