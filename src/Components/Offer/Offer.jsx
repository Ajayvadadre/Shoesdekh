import React from 'react';
import '../Offer/Offer.css';
import image from '../Assets/images/main.png';

const Offer = () => {
  return (
    <>
      <div className="offer">
        <div className="offer_product">
          <img src={image} height="400px" width="480px" className="lastshoe" />
          <div className="writing">
            <p>
              Exclusively Available on <span style={{ fontWeight:'bold' }}>Shoesdekh</span>.
            </p>
            <h1>Nike Air Max 97 Air Presto</h1>
            <small className='text-gray-400'>
              The Nike Air Max 97 helps Giannis create space with his massive strides and misdirecting Euro-step;
              <br />
              The moulded midfoot strap and external overlay provide side-to-side stability.
            </small>
          </div>
          <a className="btn2">
            Buy now &#8594;
          </a>
        </div>
      </div>
    </>
  );
};

export default Offer;
