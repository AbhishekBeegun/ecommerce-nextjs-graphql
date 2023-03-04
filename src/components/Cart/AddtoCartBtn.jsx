import React from 'react'
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart.slice";


const AddtoCartBtn = ({product}) => {
  const dispatch = useDispatch();

  function click(){
    console.log(product)
  }
  return (
    <div>
    <button 
     onClick={() => dispatch(addToCart(product))}
     className="border bg-red-600 text-white rounded-lg w-28 h-10 text-xs font-semibold">
     ADD TO CART
     </button>
    </div>
  )
}

export default AddtoCartBtn