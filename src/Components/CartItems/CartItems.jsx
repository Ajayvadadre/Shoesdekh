import React, { useContext, useState } from "react";
import "../CartItems/CartItem.css";
import { ShopContext } from "../../Context/Context";
import RelatedProducts from "../RelatedProducts/RelatedProducts";




const CartItems = () => {

const{grandTotalAmount,all_product,productCartItems,women_products,addItem,removeItem} = useContext(ShopContext)
const ifnoitems = Object.values(productCartItems).every(product=>product<=0)


const formatPriceWithCommas = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


if(ifnoitems){
 return <> 
   <div className="cartItems" disabled></div>
  <div>
    <RelatedProducts/>
  </div></>

}
  
  return (

      <div className="cartItems">
        <h1 className="cartItems-h1 text-5xl font-bold">CART</h1>
        <div className="top-part">
          <h2>Product</h2>
          <h2 className="mr-6">Quantity</h2>
          <h2>Total</h2>
        </div>
        
        <div className="bottom-part">

          {/* ------mens section----- */}
        {all_product.map((product) => {            
          if (productCartItems[product.id] > 0) {
            return (
                <div className="bottom-cart-items grid justify-between" key={ product.id}>
                  <img src={product.img} alt="" />
                  <div className="cart-item-details">
                    <p>{product.brand}</p>
                    <p className="product-details-name">{product.name}</p>
                    <p>Shoe size</p>
                    <p>&#8377;{product.price}</p>
                    </div>
                  <div className="count-button flex gap-5 p-2 align-center justify-center ">
                  <h1 className="cursor-pointer text-3xl" onClick={()=>{removeItem(product.id)}} >-</h1>
                    <h1 className="text-2xl ">{productCartItems[product.id]}</h1>
                    <h1 className="cursor-pointer text-3xl  " onClick={()=>{addItem(product.id)}} >+</h1>
                  </div>
                  <div className="total-amount ml-80  ">
                      &#8377;{formatPriceWithCommas(Number(product.price.replace(/,/g,'')) * productCartItems[product.id])}
                  </div>
                </div>);}})}

          {/* ------womens section----- */}

          {women_products.map((product) => {            
          if (productCartItems[product.id] > 0) {
            return (
                <div className="bottom-cart-items grid justify-between" key={ product.id}>
                  <img src={product.img} alt="" />
                  <div className="cart-item-details">
                    <p>{product.brand}</p>
                    <p className="product-details-name">{product.name}</p>
                    <p>Shoe size</p>
                    <p>&#8377;{product.price}</p>
                    </div>
                  <div className="count-button flex gap-5 p-2 align-center justify-center ">
                  <h1 className="cursor-pointer text-3xl" onClick={()=>{removeItem(product.id)}} >-</h1>
                    <h1 className="text-2xl ">{productCartItems[product.id]}</h1>
                    <h1 className="cursor-pointer text-3xl  " onClick={()=>{addItem(product.id)}} >+</h1>
                  </div>
                  <div className="total-amount ml-80  ">
                      &#8377;{formatPriceWithCommas(Number(product.price.replace(/,/g,'')) * productCartItems[product.id])}
                  </div>
                </div>);}})}
              
        </div>
        <hr />
        <div className="grand-total">
            <p className=" text-2xl font-bold ">Total:<span className="ml-3">&#8377;{formatPriceWithCommas(grandTotalAmount())}</span> </p>
            <p className="grand-total-p">Tax included. Shipping calculated at checkout</p>
            <button>Checkout</button>
        </div>
      </div>
  );
};

export default CartItems;
