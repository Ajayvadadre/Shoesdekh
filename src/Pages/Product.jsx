import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/Context'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import ProductDisplay from '../Components/DisplayProduct/ProductDisplay'

const Product = () => {
    const {all_product} = useContext(ShopContext);

    const{ProductId} = useParams();
    const product = all_product&&all_product.find((e)=>e.id===Number(ProductId));

    return (
    <div className='bg-white'>
        <BreadCrumbs product={product}/> 
        <ProductDisplay product={product}/>
    </div>
  )
} 

export default Product