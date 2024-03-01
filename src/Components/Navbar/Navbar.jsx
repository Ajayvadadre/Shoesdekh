import React, { useContext, useState } from "react";
import "./Navbar.css";
import svg from "../Assets/images/264-3.svg";
import cart from "../Assets/images/market.png"
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/Context";
import { useRef } from "react";
import menuIcon from '../Assets/images/hamburger-menu.svg';


const Navbar = () => {
  const {itemcounter} = useContext(ShopContext)
  const [menu,setMenu]=useState("Shop")
  const menuref = useRef()

  const togglefunction = ()=>{

  }
  return (
    <>
      <div className="navbar ">
      <img className="menu-button" src={menuIcon} alt="" />
          <div className="logo">
          <img className=" ml-5"src={svg} />
          <h1 className="logo-heading absolute mt-11" >SHOES DEKH</h1>
         </div>
      <div className="navigatons">       
        <ul ref={menuref} className="flex  mr-2 ">
          <li onClick={()=>{setMenu("Shop")}}> <Link to='/' >Shop{menu === 'Shop' ? <span className="line" /> : null}</Link></li>
          <li onClick={()=>{setMenu("Men")}}> <Link to='/Men' >Men{menu === 'Men' ? <span className="line" /> : null}</Link></li>
          <li onClick={()=>{setMenu("Women")}}> <Link to='/Women' >Women{menu === 'Women' ? <span className="line" /> : null}</Link></li>
          <li onClick={()=>{setMenu("Accessories")}}> <Link to='/Accessories'>Accessories{menu === 'Accessories' ? <span className="line" /> : null}</Link></li>
        </ul></div>
 

        <div className="login-cart ">
        <Link  to='/Login'><button className=" button-50">Login</button></Link> 
          <Link to='/Cart'><img src={cart} className="cart"/></Link>
          <div className="nav-cart-counter">{itemcounter()}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
