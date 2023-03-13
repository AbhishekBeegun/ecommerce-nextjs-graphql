import React from 'react'
import { Toaster,toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCompare } from "../../../redux/compare.slice";
import {IoMdGitCompare} from "react-icons/io"
const CompareBtn = ({product}) => { 
  const dispatch = useDispatch();
  
  function click(){
    toast.success("Added to compare")
  }
  
  return (
    <div title="Add to Compare">
   
    <Toaster/>

    <div className="bg-secondary p-1 rounded-lg flex items-center justify-center">
      <button onClick={() => {dispatch(addToCompare(product)) ; click()}}
        className="text-primary hover:scale-110">
       <IoMdGitCompare size={25}/>
      </button>
    </div>

    </div>
  )
}

export default CompareBtn