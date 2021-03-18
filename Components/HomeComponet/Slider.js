import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity ,Image} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist'
import { COLORS, SIZES } from '../../Constants';



const Slider = ({list}) => {
    const [data,setData]=React.useState([]);
    React.useEffect(()=>{
        const array=[]
        for (let index = 0; index <2; index++) {
            array.push(list[index]);
            
        }
        setData(array);
    },[])
    return (
        <View>
        <SwiperFlatList autoplay data={data}
         autoplayDelay={5}
          autoplayLoop  
          showPagination
          renderItem={({item})=>{
              return RenderSliderItem(item);
              
          }}
        
        />

    </View>
    )
}
function   RenderSliderItem(item){
    return (
        <TouchableOpacity >
        <View style={style.CarView}>
            <Image style={style.image} source={{uri:item.imageURL}}/>
            <View style={style.TextView}>
                <Text style={style.itemTitle}>{item.name}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}
export default Slider;
const style=StyleSheet.create({
    
    CarView:{
        
        width:SIZES.width-20,
        height:SIZES.height/3,
        backgroundColor:COLORS.white,
       marginHorizontal:10,
        marginTop:5,
        
        shadowColor:COLORS.secondary,
        shadowOffset:{width:0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:5,

    },
    TextView:{
        position:"absolute",
        bottom:10,
        margin:10,
        left:5,

    },
    itemTitle:{
        color:COLORS.white,
        fontSize:20,
        shadowColor:COLORS.secondary,
        shadowRadius:3,
        shadowOpacity:1,
        shadowOffset:{width:0.8,height:0.9},
        marginBottom:5,
        fontWeight:"bold",
        elevation:5
    },
 
    image:{
        width:SIZES.width-20,
        height:SIZES.height/3,
    },
    
 
   
      
    
})

