import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const Accout=createSlice({
    name:'account',
    initialState:'',
    reducers:{
        setAccount:(state,actions)=>{
            return state=actions.payload
        },
        remoAccount:(state,actions)=>{
            return state='';
        }
    }
})
  const {reducer,actions}=Accout;
  export const { setAccount,remoAccount}=actions;
  export default reducer;