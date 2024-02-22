import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/Context'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import ProductDisplay from '../Components/DisplayProduct/ProductDisplay'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
import women_products from '../Components/Data/WomenProducts'


const Product = () => {
    const {all_product} = useContext(ShopContext);
    const{category,ProductId} = useParams();

    let product ={}
    if (category==='men') {
      product = all_product&&all_product.find((e)=>e.id===Number(ProductId));
    }
    else if(category==='women'){
      product = women_products&&women_products.find((e)=>e.id===Number(ProductId));
    }
    return (
    <div className='bg-white'>
        <BreadCrumbs product={product}/> 
        <ProductDisplay product={product}/>
        <RelatedProducts/>
    </div>
  )
} 

export default Product