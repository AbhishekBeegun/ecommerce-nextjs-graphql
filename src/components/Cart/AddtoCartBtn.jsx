import React from 'react'
import { Toaster,toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart.slice";


const AddtoCartBtn = ({product}) => {
  const dispatch = useDispatch();
  
  function click(){
    toast.success("Added to cart")
   
  }

  return (
    <div>
      <Toaster/>
    <button 
     onClick={() => {dispatch(addToCart(product)) ; click()}}
     className="border bg-primary text-secondary rounded-lg w-28 h-10 text-xs font-semibold">
     ADD TO CART
     </button>
    </div>
  )
}

export default AddtoCartBtn