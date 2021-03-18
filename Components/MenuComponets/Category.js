import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import { COLORS, SIZES } from '../../Constants'
import Icons from '../../Constants/Icons'
import { Data } from '../../Data/Data'

const Category = (props) => {
    const{select}=props;
    const [category,setCategory]= React.useState([]);
    React.useEffect(()=>{
        setTimeout(async()=>{
            const array=[];
            const shop=await AsyncStorage.getItem('add');
            Data.database().ref(shop).child('category').on('child_added',snapshot=>{
                array.push(snapshot.val());
                
            })
            setCategory(array);
        },0)
    },)
    return (
        <ScrollView horizontal={true} style={{ marginTop:10,width:SIZES.width-10,marginVertical:5}}>
            <TouchableOpacity  style={{flexDirection:'row',backgroundColor:COLORS.secondary,
                    paddingHorizontal:15, paddingVertical:8,justifyContent:'center', borderRadius:30,marginHorizontal:5}}
                    onPress={()=>select('All')}>
               <Image source={Icons.food} style={{ height:25, width:25}}/>
               <Text style={{fontSize:15, fontWeight:'bold',marginLeft:10}}>All</Text>
           </TouchableOpacity>
            {category.map((item)=>{
                return(
                    <TouchableOpacity key={item.id} style={{flexDirection:'row',backgroundColor:COLORS.secondary,
                    paddingHorizontal:15, paddingVertical:8,justifyContent:'center', borderRadius:30,marginHorizontal:5}}
                    onPress={()=>select(item.name)}>
               <Image source={Icons.food} style={{ height:25, width:25}}/>
               <Text style={{fontSize:15, fontWeight:'bold',marginLeft:10}}>{item.name}</Text>
           </TouchableOpacity>
                )
                })}
        </ScrollView>
    )
}

export default Category
