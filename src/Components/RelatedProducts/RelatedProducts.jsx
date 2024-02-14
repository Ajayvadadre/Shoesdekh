import React, { useContext, useRef } from 'react';
import { ShopContext } from '../../Context/Context';
import Items from '../Items/items';
import '../RelatedProducts/RelatedProducts.css';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const RelatedProducts = () => {
    const { all_product } = useContext(ShopContext);

    const slideLeft = ()=>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = ()=>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <div>
            <div className="related-products">
                <h1>You may also like</h1>
                <div className="related-products-container scrollbar-hide"  style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    <MdChevronLeft size={300} className=' scrollbuttons mt-24  cursor-pointer' onClick={slideLeft}/>
                    <div id='slider' className="related-product-lists scroll overflow-x-scroll scrollbar-hide ">

                        {all_product.map((item, i) => {
                            return (
                                <Items key={i}id={item.id} name={item.name} image={item.img} new_price={item.price} /> );
                        })}

                   
                    </div>
                    <MdChevronRight size={300} className='scrollbuttons mt-24 cursor-pointer' onClick={slideRight}/>
                </div>
                <div className="scroll-buttons">
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;
