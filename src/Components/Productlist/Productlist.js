import React from 'react'
import Product from '../Product/Product'
import "./Productlist.css"
function Productlist() {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">web developer the</h1>
            <p className="pl-desc">ucdcvdvcducvwducvdwucvwducvdwucvwducvwducvuwdvcuwdvcwuicvwudcvwducvwkdvcwudcvdwhkavckadhvckwudhvckduhvc kduwvcdkuh

            </p>
        </div>
        <div className="pl-list">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
      
    </div>
  )
}

export default Productlist
