import React from 'react'
import { View ,AsyncStorage, Text, TouchableOpacity, Image} from 'react-native'
import Category from '../Components/MenuComponets/Category'
import MenuProduct from '../Components/MenuComponets/MenuProduct'
import ToolBar from '../Components/ToolBar'
import { COLORS, SIZES } from '../Constants'
import Icons from '../Constants/Icons'
import { Data } from '../Data/Data'

const MenuScreen = (props) => {
    const [products,setProducts]=React.useState([]);
    React.useEffect(()=>{
       
        const array=[];
        setTimeout(async() => {
            const shop=await AsyncStorage.getItem('add');
            Data.database().ref(shop).child('product').on('child_added',snapshot=>{
                array.push(snapshot.val());
                
            })
    
            setProducts(array);
        },0);
        
        
    },[])
    function selectCategry(name) {
       
        if(name==='All'){
        setTimeout(async() => {
            const array=[]
            const shop=await AsyncStorage.getItem('add');
            Data.database().ref(shop).child('product').on('child_added',snapshot=>{
                array.push(snapshot.val());
                
            })
    
            setProducts(array);
        },0);
        }else{
            setTimeout(async() => {
                const array=[]
                const shop=await AsyncStorage.getItem('add');
                Data.database().ref(shop).child('product').on('child_added',snapshot=>{
                    if(snapshot.val().categori===name){
                        array.push(snapshot.val());
                    }
                    
                })
        
                setProducts(array);
            },0);
        }

    }
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
        <View>
           <ToolBar {...props} name='Menu'/>
           <Category select={selectCategry} />
           <MenuProduct Data={products}/>
        </View>
    )
}

export default MenuScreen
