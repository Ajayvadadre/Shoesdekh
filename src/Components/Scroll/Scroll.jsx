import React, { useRef } from 'react';
import './Scroll.css'; // Import your CSS file
import Items from '../Items/items';
import newArrival from '../Data/ArrivalData';
import p1 from '../Assets/images/Products/Air force 1 LV8.webp'
import p2 from '../Assets/images/Products/Air force 1.webp'
import p3 from '../Assets/images/Products/Air jordan 1.webp'
import p4 from '../Assets/images/Products/Chuk 70 high.webp'


const Scroll = () => {
  const containerRef = useRef(null);

  const scrollAmount = 200;

  const handleScroll = (direction) => {
    const container = containerRef.current;

    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="products">
        <img src="p1"  />
        <img src="p2"  />
        <img src="p3"  />
        <img src="p4"  />
      </div>
      <div className="scroll-arrow left" onClick={() => handleScroll('left')}>
        &lt;
      </div>
      <div className="scroll-arrow right" onClick={() => handleScroll('right')}>
        &gt;
      </div>
    </div>
  );
};

export default Scroll;
