import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartCount= useSelector((state)=>state.cartReducer.cartValues.length)
  const totalPrice= useSelector((state)=>state.cartReducer.totalPrice)
  return (
    <div>
      <div className='navbar navbar-dark bg-dark'>
        <div className='d-inline p-2 navbar-nav' >
        <span className='btn btn-primary'>cart:{cartCount}</span>&nbsp;
        <span className='btn btn-primary'>totalitems:{totalPrice}</span>
        
      </div>
    </div>
    </div>
  )
}

export default Navbar
