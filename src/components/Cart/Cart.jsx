import { Button } from "flowbite-react"
import React from 'react'
import { useState } from "react"
import {FiShoppingBag} from "react-icons/fi"



import { useSelector,useDispatch } from "react-redux"
import { incrementQuantity,decrementQuantity,removeFromCart } from "../../../redux/cart.slice"

const Cart = () => {


   const cart = useSelector((state) => state.cart);
   const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };


 const [CartOpen, setCartOpen] = useState(false);

 function handleCart(){
  setCartOpen(!CartOpen);
 }

  return (
    
     <>
     <Button onClick={() => handleCart()}>
      <FiShoppingBag size={25}/>
     </Button>
  

    <div >
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className="flex justify-evenly">
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div className="flex justify-evenly">
              <div >
                <img src={item.image[0].url} height="90" width="65" />
              </div>
              <p>{item.title}</p>
              <p>Rs {item.price}</p>
              <p>{item.quantity}</p>
              <div>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: Rs {getTotalPrice()} VAT included</h2>
        </>
      )}
    </div>
   


    </>
  )
}

export default Cart




// import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// // Importing actions from  cart.slice.js
// import {
//   incrementQuantity,
//   decrementQuantity,
//   removeFromCart,
// } from '../../redux/cart.slice';

// const Cartpage = () => {

//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const getTotalPrice = () => {
//     return cart.reduce(
//       (accumulator, item) => accumulator + item.quantity * item.price,
//       0
//     );
//   };

//   return (
    // <div >
    //   {cart.length === 0 ? (
    //     <h1>Your Cart is Empty!</h1>
    //   ) : (
    //     <>
    //       <div>
    //         <div>Image</div>
    //         <div>Product</div>
    //         <div>Price</div>
    //         <div>Quantity</div>
    //         <div>Actions</div>
    //         <div>Total Price</div>
    //       </div>
    //       {cart.map((item) => (
    //         <div >
    //           <div >
    //             <img src={item.image} height="90" width="65" />
    //           </div>
    //           <p>{item.product}</p>
    //           <p>$ {item.price}</p>
    //           <p>{item.quantity}</p>
    //           <div>
    //             <button onClick={() => dispatch(incrementQuantity(item.id))}>
    //               +
    //             </button>
    //             <button onClick={() => dispatch(decrementQuantity(item.id))}>
    //               -
    //             </button>
    //             <button onClick={() => dispatch(removeFromCart(item.id))}>
    //               x
    //             </button>
    //           </div>
    //           <p>$ {item.quantity * item.price}</p>
    //         </div>
    //       ))}
    //       <h2>Grand Total: $ {getTotalPrice()}</h2>
    //     </>
    //   )}
    // </div>
//   );
// };

// export default Cartpage;