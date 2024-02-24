import React, { createContext, useState } from 'react';
import all_product from '../Components/Data/AllProducts';
import women_products from '../Components/Data/WomenProducts';


const cartValue= ()=>{

    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index]=0
    }
    return cart;
} 
const ShopContextProvider=(props)=>{
  
    const [productCartItems, setProductCartItems] = useState(cartValue())
// -----Total price for the cart 
    const grandTotalAmount=()=>{
        let TotalAmount = 0;
        for(const item in productCartItems){
            if(productCartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
               
                const itemPrice = Number(itemInfo.price.replace(/,/g, ''));

                TotalAmount+= itemPrice*productCartItems[item]
                
            }
        }
            return TotalAmount;
    }
// ----------Add item in cart--------------
    const addItem=(itemId)=>{
        setProductCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

    }
// ----------Cart item remove----------
    const removeItem=(itemId)=>{
        setProductCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
// ------------Cart counter---------------
    const itemcounter =()=>{
     let count = 0;
        for(let item in productCartItems){
            if(productCartItems[item]>0){
                count+=productCartItems[item]
            }
        }
        return count
    }



    const contextValue = {itemcounter,grandTotalAmount,all_product,productCartItems,addItem,removeItem,women_products};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    ) 
}
export const ShopContext= createContext(null)
export default ShopContextProvider;