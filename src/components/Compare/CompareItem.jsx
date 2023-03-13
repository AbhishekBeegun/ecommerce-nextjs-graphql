import React from 'react'
import { useDispatch } from "react-redux"
import { removeFromCompare } from "../../../redux/compare.slice";
import { FiTrash } from "react-icons/fi";
import { toast, Toaster } from "react-hot-toast";
const CompareItem = ({item}) => {

  const dispatch = useDispatch();

  function remove(){
    toast.success("Item removed")
  }


  return (
    <>
      <Toaster/>
      <div key={item.slug} className="w-[250px] border gap-5 rounded-lg px-2 flex flex-col py-2">
      <div className="flex flex-col items-center gap-5">
        <img className="rounded-lg" 
        src={item.image[0].url} alt="CompareItem" height="150" width="150"/>

        <div className="flex flex-col gap-2 text-center">
        <p className="text-xs">{item.title}</p>
        <p className="font-semibold">Rs {item.price}</p>
        <p className="text-xs">Need to fetch prod description</p>
        </div>
      </div>

         <button onClick={() => {dispatch(removeFromCompare(item.slug)) ; remove()}}
          className="flex border bg-primary text-secondary text-sm items-center gap-2 rounded-lg p-1">
        <FiTrash size={15}/> Remove
        </button>
      </div>

 
    </>
  )
}

export default CompareItem