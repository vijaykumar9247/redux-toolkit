import React from 'react'
import jsonData from "./jsonData.json"
import { useDispatch } from 'react-redux'
import { incrementcart,removecart } from './Reducer/cartReducer'
const Products = () => {
  const dispatch=useDispatch();
  return (
    <div className='container xxl-2'>
        <div className='row xll-3'>
           {jsonData.products.map(product=>
            <div className='col s-6 col s-1' key={product.id}>
                <img className='card-img-top ' src={product.src} alt="img"></img>
                <p className='card-title'>{product.name} ||{product.price}</p>
                <div className='card-body'>
                    <button className='btn btn-primary' onClick={()=>dispatch(incrementcart({
                      productName:product.name,
                      productPrice:product.price
                    }))}>add</button>&nbsp;
                     <button className='btn btn-primary' onClick={()=>dispatch(removecart({
                      productName:product.name,
                      productPrice:product.price}))}>remove</button>
                </div>
                </div>

                )}
        </div>
          
    </div>
  )
}

export default Products
