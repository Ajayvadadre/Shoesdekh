import React from 'react';
import '../New_arrivals/New_arrivals.css';
import newArrival from '../Data/ArrivalData';
import Items from '../Items/items';

const New_arrivals = () => {
  return (
    <div>
        <div className="newarrivals">
            <h1  className=' absolute ' style={ { marginLeft:'20px',color:'black',fontWeight:'600', fontSize:'30px' }}>NEW ARRIVALS</h1>
        </div>
        <div className="collection">
         { newArrival.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.img} new_price={item.price}/>
         })
            }
        </div>
    </div>
  )
}

export default New_arrivals