import React from 'react'
import { Toaster,toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart.slice";
import {MdOutlineShoppingCart} from "react-icons/md"


const SmallAddtoCartBtn = ({product}) => {
  const dispatch = useDispatch();
  
  function click(){
    toast.success("Added to cart")
  }

  return (
    <div title="Add to Cart">
      <Toaster/>
      <div className="bg-secondary p-1 rounded-lg flex items-center justify-center">
     <button className="text-primary hover:scale-110"
     onClick={() => {dispatch(addToCart(product)) ; click()}}
     >
     <MdOutlineShoppingCart size={25}/>
     </button>

     </div>
    </div>
  )
}

export default SmallAddtoCartBtn
