import React from 'react'
import {createSlice} from '@reduxjs/toolkit';
const Product=createSlice({
    name:'Product',
    initialState:[],
    reducers:{
        addProduct:(state,actions)=>{
            const newproduct=actions.payload;
            const product=state.findIndex(item=>item.id===newproduct.id)
            if(product<0){
                state.push(newproduct);
             
            }else{
                state[product].count=state[product].count+1;
                state[product].price=Number(state[product].price)*state[product].count;
                return state;
            }
            
        },
        addCount: (state, actions) => {
            state[actions.payload].count=state[actions.payload].count+1
      
            return state;
          },
        remoCount:(state, actions) => {
            state[actions.payload].count=state[actions.payload].count-1
            
      
            return state;
          },
        remoProduct:(state,actions)=>{
            const productId=actions.payload;
            return state.filter(item=>item.id!==productId);
        },
        resetProduct:(state,actions)=>{
           return state=[];
        }
    }
})
const {reducer,actions}=Product;
export const{addCount,addProduct,remoCount,remoProduct,resetProduct}=actions;
export default reducer;
