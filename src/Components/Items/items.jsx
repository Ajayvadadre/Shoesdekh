import React from "react";
import "../Items/items.css";
import { Link } from "react-router-dom";

const items = (props) => {
  return (
    <>
       <div className="main2">
          <div className="item">
            <Link to={`/Product/${props.id}`} > <img className="product-image" src={props.image} alt="" /></Link>
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
  