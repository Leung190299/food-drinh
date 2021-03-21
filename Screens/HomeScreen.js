import React from 'react'
import { View ,ScrollView,AsyncStorage, Text, TouchableOpacity, Image} from 'react-native'
import MenuLike from '../Components/HomeComponet/MenuLike'
import MenuNew from '../Components/HomeComponet/MenuNew'
import Slider from '../Components//HomeComponet/Slider'

import ToolBar from '../Components/ToolBar'
import { Data } from '../Data/Data'
import { COLORS, SIZES } from '../Constants'
import Icons from '../Constants/Icons'
import { useSelector } from 'react-redux'

export default function HomeScreen(props) {
    const [products,setProducts]=React.useState([]);
    const shop=useSelector(state=>state.account);
    React.useEffect(()=>{
        const array=[];
        const getproduct= () => {            
            Data.database().ref(shop).child('product').on('child_added',snapshot=>{
                array.push(snapshot.val());               
            })
 
            setProducts(array);
        };
        return(
            getproduct ()
        )        
        
    },[])
    if(products.length<=0){
        return(
            
                 <View  style={{height:SIZES.height-150,alignItems:'center',justifyContent:'center'}}>
                    <Image source={Icons.notfound} style={{height:50,width:50}}/>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Scanner')} style={{backgroundColor:COLORS.primary,height:40,width:SIZES.width-40,marginHorizontal:20,alignItems:'center',marginTop:5, borderRadius:10}} >
           <Text style={{fontSize:20,fontWeight:'bold',color:'#fff',lineHeight:40}}>ScanQR</Text>
           </TouchableOpacity>
            </View>
            
        )
    }
    return (
       
        <View style={{flex:1,}}>
        <ToolBar {...props} name={shop} />
        <ScrollView >
        <Slider list={products}/>
        <MenuNew Data={products} />
        <MenuLike Data={products}/>
        </ScrollView>
        </View>
       
    )
}
