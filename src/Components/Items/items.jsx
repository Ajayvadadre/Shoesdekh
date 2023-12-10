import React from "react";
import "../Items/items.css";
const items = (props) => {
  return (
    <>
       <div className="main2">
          <div className="item">
            <img className="product-image" src={props.image} alt="" />
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
