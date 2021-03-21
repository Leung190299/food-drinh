import React from 'react'
import { View, Text,ScrollView,StyleSheet,TouchableOpacity ,Image} from 'react-native'
import { COLORS, SIZES } from '../../Constants'
import Icons from '../../Constants/Icons'
import ProductDialog from '../Dialog/ProductDialog'

const MenuLike = ({Data}) => {
    const [data,setData]=React.useState([]);
    React.useEffect(()=>{
        const array=[]
        for (let index = 0; index <3; index++) {
            array.push(Data[index]);
            
        }
        setData(array);
    },[])
    return (
        <View>
        
        <View style={{borderBottomColor:'#333',borderBottomWidth:2,width:'100%',height:45,alignSelf:"center",flexDirection:'row', marginTop:10,backgroundColor:COLORS.secondary}}>
        <Image source={Icons.heart1} style={{height:20,width:20,tintColor:COLORS.primary,marginTop:15,marginLeft:15}}/>
        <Text style={{alignSelf:"baseline",fontSize:15,color:COLORS.primary,lineHeight:45,fontWeight:'bold',
     shadowColor:COLORS.black,
     shadowOffset:{width:0.5,height:0.5},
     shadowOpacity:1,
     shadowRadius:3,
     }}>Sản Phẩm Yêu Thích</Text>
        
        </View>
       <ScrollView horizontal={true} >
           <View style={{flexDirection:'row-reverse',}}>
           {data.map((item,index)=>{
               return(
               <ProductDialog item={item} key={index}/>
               )
           })}
           </View>
       </ScrollView>
    </View>
    )
}

export default MenuLike
