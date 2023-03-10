import React from 'react'
import { Button } from "flowbite-react"
import Link from "next/link"
import { useState } from "react"
import {AiOutlineClose} from "react-icons/ai"
import {MdOutlineShoppingCart} from "react-icons/md"
import { useSelector } from "react-redux"
import CartItem from "./CartItem"


const Cart = () => {

///redux
   const cart = useSelector((state) => state.cart);
  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  //redux end


 const [CartOpen, setCartOpen] = useState(false);

 function handleCart(){
  setCartOpen(!CartOpen);
 }

  return (
    
     <>
     {!CartOpen ?
     <>  
      <button title="Cart" 
      className="relative" 
      onClick={() => handleCart()}>
      {cart.length === 0 ? <></>:<p className="absolute -top-3 -right-4 text-xs font-semibold bg-primary px-2 py-1 rounded-full text-secondary">{cart.length}</p>}
      <MdOutlineShoppingCart size={22}/>
     </button>
     </>
 : <Button onClick={() => handleCart()}><AiOutlineClose/></Button>}
  

     <div className={`-top-1 z-50 right-0 flex flex-col rounded-b-lg border-b border bg-secondary fixed w-full h-[75vh] py-5 
       ${CartOpen ? '-translate-y':'-translate-y-full'}
       ease-in-out duration-300
       }`}>
      <div>
      <button className="text-primary p-1 border shadow rounded-lg ml-5 lg:ml-10" 
      onClick={() => handleCart()}><AiOutlineClose size={20}/>
      </button>
      {cart.length === 0 ? (
        <div className="flex flex-col gap-5 justify-center items-center">
          <p className="text-primary">Your Cart is Empty!</p>
          <Link href="/brands">
          <p typeof="button" onClick={() => handleCart()} className="bg-primary text-secondary uppercase px-2 py-1 rounded-lg">Find a product</p>          
         </Link>
        </div>
      ) : (
        <>
        <div className="flex flex-col justify-center items-center gap-2 py-2">
        <h2 className="text-sm font-semibold">TOTAL : Rs {getTotalPrice()}</h2>
        <Link href="/404">
        <button onClick={() => handleCart()} 
        className="px-2 py-1 bg-primary text-secondary rounded-lg"
        >Proceed to checkout
        </button>
        </Link>
        </div>
        <div className="flex flex-col items-center lg:justify-center lg:flex-row lg:flex-wrap gap-2 max-h-[55vh] overflow-scroll">

          {cart.map((item) => (
            
           <CartItem key={item} item={item}/>
          ))}
        </div>

        </>
      )}
    </div>


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