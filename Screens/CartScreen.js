import React from 'react'
import { View,AsyncStorage } from 'react-native'
import ListCart from '../Components/CartComponets/ListCart'
import TotalPrice from '../Components/CartComponets/TotalPrice'
import ToolBar from '../Components/ToolBar'
import { Data } from '../Data/Data'

const CartScreen = (props) => {
    const [table,setTable]=React.useState([])
    React.useEffect(()=>{
        const array=[];
        setTimeout(async() => {
            const shop= await AsyncStorage.getItem('add');
            Data.database().ref(shop).child('table').on('child_added',snapshot=>{
                array.push(snapshot.val());
                
            })
    
            setTable(array);
        },0);
        
        
        
    },[])
    return (
        <View>
            <ToolBar {...props} name='Cart'/>
         <ListCart/>
         <TotalPrice table={table}/>
        </View>
    )
}

export default CartScreen
