import React from "react";
import "../Items/items.css";
import { Link } from "react-router-dom";

const items = (props) => {
  return (
    <>
       <div className="main2">
          <div className="item">
<<<<<<< HEAD
            <Link to={`/Product/${props.category}/${props.id}`} >
               <img className="product-image" src={props.image} alt="" onClick={window.scrollTo(0,0)} />
            </Link>
=======
            <Link to={`/Product/${props.category}/${props.id}`} > <img className="product-image" src={props.image} alt="" onClick={window.scrollTo(0,0)} /></Link>
>>>>>>> ba7e2edc501c31524250fd29cc6b8f38e6eb3893
            <p>{props.name}</p>
            <div className="item-prices">
              <div className="item-price-new">&#x20B9; {props.new_price}</div>
            </div>
          </div>
        </div>
    </>
  );
};

export default items;
  