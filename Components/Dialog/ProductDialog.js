import React from 'react'
import { View, Text ,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { useDispatch } from 'react-redux';
import { COLORS, icon, SIZES } from '../../Constants';
import Dialog from "react-native-dialog";
import { addProduct } from '../../Reducer/ProductSlice';

const ProductDialog = (props) => {
    const {item}= props;
    const [visible, setVisible] =React.useState(false);
    const [count,setCount]=React.useState(1);
  const  dispatch = useDispatch();
    const showDialog = () => {
      setVisible(true);
    };
  const addCount=()=>{
    if(count>=10){
        setCount(10);
    }else{
        setCount(count+1);
    }
   
  }
  const remoCount=()=>{
    if(count<=1){
        setCount(1);
    }else{
        setCount(count-1);
    }
    
  }
    const handleCancel = () => {
      setVisible(false);
    };
  
    const handleDelete = () => {
      
      try {
       
        const sp={
            id:item.id,
            name:item.name,
            count:count,
            price:item.price,
            image:item.imageURL,

        }
        const action=addProduct(sp);
        
        dispatch(action);
        setVisible(false);
           
      } catch (error) {
          alert(error)
      }
     
  
    }
    return (
        <View style={styles.container}>
       <TouchableOpacity key={item.id} onPress={showDialog}>
                <View style={styles.CarViewItem}>
                <Image style={styles.image2} source={{uri:item.imageURL}}/>
                <View style={styles.TextView2}>
                    <Text style={styles.itemTitle2}>{item.name}</Text>
                </View>
            </View>
            </TouchableOpacity>
      <Dialog.Container visible={visible} >
       <View style={{flexDirection:'row', marginBottom:20}} >
       <Image style={styles.image2} source={{uri:item.imageURL}}/>
       <View>
       <Text style={styles.name}>{item.name}</Text>
     
       <Text style={styles.name}> <Image source={icon.coin} style={{height:20,width:20}}/>:{item.price*count}.đ</Text>
       <View style={{flexDirection:'row',marginHorizontal:20}}>
           <Text>Số lượng:</Text>
                            <TouchableOpacity style={{width:25,height:25,backgroundColor:COLORS.secondary,alignItems:'center', borderRadius:5}}
                            onPress={()=>remoCount()}>
                                <Text  style={{fontSize:25,fontWeight:'bold',lineHeight:26}}>-</Text>
                            </TouchableOpacity>
                            <Text style={{marginHorizontal:10,marginVertical:3}}>{count}</Text>
                            <TouchableOpacity style={{width:25,height:25,backgroundColor:COLORS.secondary,alignItems:'center',borderRadius:5}}
                            onPress={()=>addCount()}
                            >
                                <Text  style={{fontSize:25,fontWeight:'bold',lineHeight:26}}>+</Text>
                            </TouchableOpacity>
                            
        </View>
        </View>
       </View>
      
        <Dialog.Button label="Hủy BỎ" onPress={handleCancel} />
        <Dialog.Button label="Đặt món" onPress={handleDelete} />
      </Dialog.Container>
    </View>
    )
}

export default ProductDialog;
const styles = StyleSheet.create({
    container: {
      
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
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

    name:{
        fontSize:22,
        
        fontWeight:'bold',
        color:'#333',
        flex:1, 
        marginHorizontal:10,
        color:COLORS.primary
        
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
      
   
  });
