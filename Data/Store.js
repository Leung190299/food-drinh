import {configureStore} from '@reduxjs/toolkit';
import productReducer from '../Reducer/ProductSlice';
import accountReducer from '../Reducer/AccoutSlice';
const store=configureStore({
    reducer:{
        product:productReducer,
        account:accountReducer
    }
})
export default store;