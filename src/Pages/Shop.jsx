import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Components/Popular/popular';
import Offer from '../Components/Offer/Offer';
import New_arrivals from '../Components/New_arrivals/New_arrivals';
import Newsletter from '../Components/Newsletter/Newsletter';
import Fotter from '../Components/Footer/Fotter';
// import Scroll from '../Components/Scroll/Scroll';



const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <New_arrivals/>
    </div>
  )
}

export default Shop