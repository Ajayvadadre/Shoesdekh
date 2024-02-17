import React, { createContext, useState } from 'react';
import all_product from '../Components/Data/AllProducts';

const cartValue= ()=>{

    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index]=0
    }
    return cart;
} 
const ShopContextProvider=(props)=>{
  
    const [productCartItems, setProductCartItems] = useState(cartValue())

    const grandTotalAmount=()=>{
        let TotalAmount = 0;
        for(const item in productCartItems){
            if(productCartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
               
                const itemPrice = Number(itemInfo.price.replace(/,/g, ''));

                TotalAmount+= itemPrice*productCartItems[item]
                
            }
        }
        console.log(TotalAmount);
        return TotalAmount;
    }
    
    const addItem=(itemId)=>{
        setProductCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

    }

    const removeItem=(itemId)=>{
        setProductCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextValue = {grandTotalAmount,all_product,productCartItems,addItem,removeItem};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    ) 
}
export const ShopContext= createContext(null)
export default ShopContextProvider;