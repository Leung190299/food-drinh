import React from 'react'
import { View, Text,ScrollView,StyleSheet,TouchableOpacity ,Image} from 'react-native'
import { COLORS, SIZES } from '../../Constants'
import ProductDialog from '../Dialog/ProductDialog';

const MenuNew = ({Data}) => {
    const [data,setData]=React.useState([]);
    React.useEffect(()=>{
        const array=[]
        for (let index = 0; index <=2; index++) {
            array.push(Data[index]);
            
        }
        setData(array);
    },[])
    return (
        <View>
        
        <View style={{borderBottomColor:'#333',borderBottomWidth:2,width:'100%',height:45,alignSelf:"center", marginTop:10,backgroundColor:COLORS.secondary}}>
        <Text style={{alignSelf:"baseline",fontSize:15,color:COLORS.primary,lineHeight:45,marginLeft:15,fontWeight:'bold',}}>Sản Phẩm Mới</Text>
        </View>
       <ScrollView horizontal={true}  >
           <View style={{flexDirection:"row",}}>
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

export default MenuNew;
