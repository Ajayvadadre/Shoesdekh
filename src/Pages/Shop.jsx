import React, { useRef } from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Components/Popular/popular';
import Offer from '../Components/Offer/Offer';
import New_arrivals from '../Components/New_arrivals/New_arrivals';

const Shop = () => {

  const targetComponentRef = useRef();
  
  const scrollToComponent2 = () => {
    targetComponentRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <Hero scrollToRef={scrollToComponent2} />
      <Popular ref={targetComponentRef} />
      <Offer/>
      <New_arrivals/>
    </div>
  )
}

export default Shop