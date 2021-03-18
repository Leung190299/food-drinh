import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { COLORS, SIZES } from '../../Constants'
import CartDialog from '../Dialog/CartDialog'

const TotalPrice = (props) => {
    const{table}=props
    const product=useSelector(state=>state.product);
    const [totall,setTotall]=React.useState(0);
    React.useEffect(()=>{
        
            let s = 0;
            for (let index = 0; index < product.length; index++) {
                
                s=s+ Number(product[index].price*product[index].count);
                
            }
            setTotall(s);
        
        
    },)
    return (
        <View>
            <View style={{flexDirection:'row'}}> 
            <Text style={{fontSize:20,fontWeight:'bold',color:'#333'}}>Tổng tiền:</Text>
            <Text style={{fontSize:20,fontWeight:'bold',color:COLORS.primary,marginLeft:120}}>{totall}.vnd</Text>
            </View>
           <CartDialog table={table}/>
        </View>
    )
}

export default TotalPrice
