import React from 'react'

const CartItem = ({image,name}) => {
  return (
    <div>
      <img width="200px" src={image}/>
      <h3>{name}</h3>
      <p>Shop Now</p>
    </div>
  )
}

export default CartItem