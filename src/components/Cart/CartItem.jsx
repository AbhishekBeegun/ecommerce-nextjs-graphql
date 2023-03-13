import React from 'react'
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { incrementQuantity,decrementQuantity,removeFromCart } from "../../../redux/cart.slice"


const CartItem = ({item}) => {
  const dispatch = useDispatch();

  return (
    <div key={item.slug} className="w-[350px] border gap-2 rounded-lg px-2 flex flex-col  py-2">
      <div className="flex justify-between items-center">
        <img className="rounded-lg" 
        src={item.image[0].url} alt="CartItem" height="150" width="150"/>

        <div className="flex flex-col gap-2 text-end">
        <p className="text-xs">{item.title}</p>
        <p className="text-sm font-semibold"> Rs {item.quantity * item.price}</p>
        </div>
      </div>

      <div className="flex justify-around items-center">
        <div className="border p-1 text-sm flex justify-center items-center gap-2 rounded-lg">
          <button onClick={() => dispatch(incrementQuantity(item.slug))}>
          <FiPlus/>
          </button>

          {item.quantity}
          <button onClick={() => dispatch(decrementQuantity(item.slug))}>
          <FiMinus/>
          </button>

        </div>
         

         <button onClick={() => dispatch(removeFromCart(item.slug))}
          className="flex border text-sm items-center gap-2 rounded-lg p-1">
        <FiTrash size={15}/> Remove
        </button>
      </div>

    </div>
  )
}

export default CartItem