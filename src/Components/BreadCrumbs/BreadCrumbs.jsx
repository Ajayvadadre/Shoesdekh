import React from 'react'
import img from '../Assets/images/breadcrumb-arrow.png'
import '../BreadCrumbs/BreadCrumbs.css'
const BreadCrumbs = (props) => {
    const {product} = props; 
    if (!product) {
        return <div>Product not found</div>
      }
  return (
    <>
    <div className='bread-crumb' >
      <div className="breadCrumbs flex ms-20"> 
      Home <img src={img} />Shop<img src={img} className=''/>{product.category}<img src={img}/>{product.name}
      </div>
    </div>
    </>
  )
}

export default BreadCrumbs