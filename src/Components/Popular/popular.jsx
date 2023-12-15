import React from 'react'
import data_products from '../Data/Data'
import Items from '../Items/items'
import '../Popular/Popular.css'

const popular = () => {
  return (
    <div className='main-div'>
    <h1 className=' absolute ' style={ { marginLeft:'20px',color:'black',fontWeight:'600', fontSize:'30px' }}>POPULAR</h1>
    <div className="popular-items">
     { data_products.map((item,i)=>{
          return <Items key={i} id={item.id} name={item.name} image={item.img} new_price={item.new_price}/>
      })}
    </div>  
    </div>
  )
}

export default popular