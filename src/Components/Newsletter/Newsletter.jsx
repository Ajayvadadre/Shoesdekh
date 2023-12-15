import React from 'react'
import '../Newsletter/Newsletter.css'
const Newsletter = () => {
  return (
    <>    

    <div className="newsletter">
        <h1 className=' font-semibold text-2xl '>Subscribe to our newsletter</h1>
        <input type="text" placeholder=' Email Address'/>
        <button>Subscribe</button>
    </div>

    </>

  )
}

export default Newsletter