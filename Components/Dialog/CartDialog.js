import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View ,Text, Picker, AsyncStorage} from "react-native";
import Dialog from "react-native-dialog";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, SIZES } from "../../Constants";
import { Data } from "../../Data/Data";
import { resetProduct } from "../../Reducer/ProductSlice";

const CartDialog=(props) =>{
    const {table}= props;
  const [visible, setVisible] = useState(false);
const [select,setSelect]=useState('');
const Product=useSelector(state=>state.product)
const  dispatch = useDispatch();
  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete =async () => {
    
    try {
     
      const shop= await AsyncStorage.getItem('add');
     
        Data.database().ref(shop).child('table').child(select).update({status:true})
        Product.forEach(element => {
         Data.database().ref(shop).child('table').child(select).child('oder').child(element.id).set(element)
        
        });
       const action= resetProduct();
       dispatch(action);
       alert('ok');
         setVisible(false);
         
    } catch (error) {
        alert(error)
    }
   

  }

 
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDialog} style={{backgroundColor:COLORS.primary,height:40,width:SIZES.width-40,marginHorizontal:20,alignItems:'center',marginTop:5, borderRadius:10}} >
           <Text style={{fontSize:20,fontWeight:'bold',color:'#fff',lineHeight:40}}>ODER</Text>
           </TouchableOpacity>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Chọn bàn</Dialog.Title>
        <Dialog.Description>
         
      <Picker
        selectedValue={select}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setSelect(itemValue)}
      >
          {table.map((item)=>{
              return<Picker.Item key={item.id} label={item.name} value={item.id} />
          })}
        
        
      </Picker>
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Đặt món" onPress={handleDelete} />
      </Dialog.Container>
    </View>
  );
}
export default CartDialog;
const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});