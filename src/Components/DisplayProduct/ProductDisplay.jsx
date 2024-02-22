import React, { useContext } from 'react'
import '../DisplayProduct/ProductDisplay.css';
import Dropdown from '../DropDown/Dropdown';
import { ShopContext } from '../../Context/Context';


const ProductDisplay = (props) => {
  const{product} = props
  const description1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Nobis veniam excepturi obcaecati nihil, neque autem nesciunt cum inventore quas culpa '
  const description2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nobis veniam excepturi obcaecati nihil, neque autem nesciunt cum inventore quas culpa."
  const{addItem} = useContext(ShopContext)
  return (
    <div className='product-display bg-white flex justify-between mt-5'>
        <div className="product-display-left">
        <img src={product.img} alt=""  />
        <img src={product.img} alt=""  />
        <img src={product.img} alt=""  />
        <img src={product.img} alt=""  />
        <img src={product.img} alt=""  />
        <img src={product.img} alt=""  />
        </div>
        <div className="product-display-right">
          <p className='brand'>{product.brand}</p>
          <h1 className=' text-black'>{product.name}</h1>
          <p className=' '> &#8377;{product.price}</p>

          <div className="sizes flex gap-2 mt-4  flex-col align-super ">
            <p>Shoe size</p>
            <div className="sizes-container flex gap-2">
            <div className='size-container'>4</div>
            <div className='size-container'>5</div>
            <div className='size-container'>6</div>
            <div className='size-container'>7</div>
            <div className='size-container'>8</div>
            </div>
          </div>
          <button onClick={()=>{addItem(product.id)}}>Add to cart</button>
          <Dropdown Title={'Description'} description={description1}/>
          <Dropdown Title={'Product details'} description={description2}/>
        </div>
      
    </div>
  )
}

export default ProductDisplay