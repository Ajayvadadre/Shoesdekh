import React, { useState } from "react";
import "./Navbar.css";
import svg from "../Assets/images/264-3.svg";
import cart from "../Assets/images/market.png"
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menus,setMenus]=useState("shop")
  return (
    <>
      <div className="navbar ">
        <div className="logo-main ">

       <div className="logo">
          <img className=" ml-5"src={svg} />
         </div>
          <h1 className="logo-heading absolute mt-11" >SHOES DEKH</h1>
        </div>

        <ul className="flex  mr-2 ">
          <li onClick={()=>{setMenus("Shop")}}> <Link to='/' >Shop</Link></li>
          <li onClick={()=>{setMenus("Men")}}> <Link to='/Men' >Men</Link></li>
          <li onClick={()=>{setMenus("Women")}}> <Link to='/Women' >Women</Link></li>
          <li onClick={()=>{setMenus("Accessories")}}> <Link to='/Accessories'>Accessories</Link></li>
        </ul>

        <div className="login-cart mr-16">
        <Link  to='/Login'><button className="loginbutton">Login</button></Link> 
          <Link to='/Cart'><img src={cart} className="cart"/></Link>
          
        </div>

      </div>
    </>
  );
};

export default Navbar;
