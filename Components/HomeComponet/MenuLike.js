import React from 'react'
import { View, Text,ScrollView,StyleSheet,TouchableOpacity ,Image} from 'react-native'
import { COLORS, SIZES } from '../../Constants'
import Icons from '../../Constants/Icons'

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
        <Image source={Icons.heart1} style={{height:20,width:20,tintColor:'#ebff52',marginTop:15,marginLeft:15}}/>
        <Text style={{alignSelf:"baseline",fontSize:15,color:'#ebff52',lineHeight:45,fontWeight:'bold',
     shadowColor:COLORS.black,
     shadowOffset:{width:0.5,height:0.5},
     shadowOpacity:1,
     shadowRadius:3,
     }}>FOOD LIKE</Text>
        
        </View>
       <ScrollView horizontal={true} >
           <View style={{flexDirection:'row-reverse',}}>
           {data.map((item,index)=>{
               return(
                <TouchableOpacity key={index}>
                <View style={style.CarViewItem}>
                <Image style={style.image2} source={{uri:item.imageURL}}/>
                <View style={style.TextView2}>
                    <Text style={style.itemTitle2}>{item.name}</Text>
                </View>
            </View>
            </TouchableOpacity>
               )
           })}
           </View>
       </ScrollView>
    </View>
    )
}

export default MenuLike
const style=StyleSheet.create({
    CarViewItem:{
        width:SIZES.width/3,
        height:SIZES.height/4,
        backgroundColor:COLORS.white,
       margin:5,
        borderRadius:5,
        shadowColor:COLORS.secondary,
        shadowOffset:{width:0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:5,
       
    },


    image2:{
        width:SIZES.width/3,
        height:SIZES.height/4,
        borderRadius:5,
        
    },
 
 
    TextView2:{
        position:"absolute",
        bottom:5,
        margin:5,
        left:5,

    },
  
    itemTitle2:{
        color:COLORS.white,
        fontSize:15,
        shadowColor:COLORS.secondary,
        shadowRadius:3,
        shadowOpacity:1,
        shadowOffset:{width:0.8,height:0.9},
        marginBottom:5,
        fontWeight:"bold",
        elevation:5},
      
   
    
    
})