// import React, { useRef } from 'react';
// import './Scroll.css'; // Import your CSS file
// import Items from '../Items/items';




// const Scroll = () => {
//   const containerRef = useRef(null);

//   const scrollAmount = 200;

//   const handleScroll = (direction) => {
//     const container = containerRef.current;

//     if (container) {
//       container.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className="scroll-container" ref={containerRef}>
//       <div className="products">
//       {items.map((item,i) => (
//           <Item key={i} id={item.id} name={item.name} image={item.img} new_price={item.price} />
//         ))}
//       </div>
//       <div className="scroll-arrow left" onClick={() => handleScroll('left')}>
//         &lt;
//       </div>
//       <div className="scroll-arrow right" onClick={() => handleScroll('right')}>
//         &gt;
//       </div>
//     </div>
//   );
// };

// export default Scroll;
