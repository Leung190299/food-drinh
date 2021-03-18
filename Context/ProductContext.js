import { render } from "react-dom";

import React from 'react';
import { Data } from "../Data/Data";

const ProductContexts=React.createContext();

export const ProductContext = ({children}) => {
    const [products,setProducts]=React.useState([]);
    React.useEffect(()=>{
        const array=[];
        Data.database().ref('leung').child('product').on('child_added',snapshot=>{
            array.push(snapshot.val());
        })
        setProducts(array);
    },)
    return (
        <ProductContexts.Provider value={{products,setProducts}}>
            {children}
        </ProductContexts.Provider>
    )
}

export default ProductContexts
