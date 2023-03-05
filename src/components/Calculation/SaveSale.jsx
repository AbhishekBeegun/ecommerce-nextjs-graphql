import React from 'react'

const SaveSale = ({regularPrice,salePrice}) => {
  const save = regularPrice - salePrice; 
  const percentage = save / regularPrice ;
  const offby = Math.floor(percentage * 100) ;
return (
  <div className="font-semibold bg-red-600 text-sm text-white rounded-tl-lg rounded-bl-lg p-1">
    <p>Save Rs {save} | {offby}% Off</p>
  </div>
)
}

export default SaveSale