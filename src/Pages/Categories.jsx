import React from 'react'
import '../Pages/Css/Categories.css';
import Items from '../Components/Items/items';
import men_products from '../Components/Data/AllProducts';
import underConstruction from '../Components/Assets/images/under-construction2.jpg'
import women_products from '../Components/Data/WomenProducts';


const Categories = (props) => {

  let categoryFound = false

  return (
  <>
  <div className={`category bg-white${ props.category!==men_products.category? ' empty-container' : ''}`}>

  
    <div className="sort-categories ">
        <div className="product-sort ">
       {      
         men_products.map((item,i)=>{
          if(props.category===item.category){
            categoryFound = true
            return <Items key={i} id={item.id} name={item.name} image={item.img} new_price={item.price} category={item.category}/>
          }
          else{
            return null
          }})}
                 {      
         women_products.map((item,i)=>{
          if(props.category===item.category){
            categoryFound = true
            return <Items key={i} id={item.id} name={item.name} image={item.img} new_price={item.price} category={item.category}/>
          }
          else{
            return null
          }})}



          <div className="underConstruct flex"> 
          {props.category !== men_products.category && !categoryFound && (
             <>
             <img src={underConstruction} alt="To be made" className="under-construct" />
            
            </>
          )} </div>
             
        </div>
    </div>
            {/* <div className="Loadmore ">
            <button>Explore more</button>
            </div> */}
  </div>
  
  </>
  )
}

export default Categories