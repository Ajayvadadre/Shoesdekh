import React from 'react'
import '../Pages/Css/Categories.css';
import Items from '../Components/Items/items';
import men_products from '../Components/Data/AllProducts';

const Categories = (props) => {

  return (
  <>
  <div className="category bg-white">
    <div className="sort-categories">
        <p>
          <span>1-12</span> out of 36 <products></products>
        </p>
        <div className="dropdown-sort">
          <img src="" alt="" />
        </div>
        {/* {console.log(All_products)}; */}
        <div className="product-sort">
       {      
         men_products.map((item,i)=>{
          if(props.category===item.category){
            return <Items key={i} id={item.id} name={item.name} image={item.img} new_price={item.price}/>
          }
          else{
            return null
          }
          })}
          
  
        </div>
    </div>
            <div className="Loadmore bg-white">
            <button>Explore more</button>
            </div>
  </div>
  
  </>
  )
}

export default Categories