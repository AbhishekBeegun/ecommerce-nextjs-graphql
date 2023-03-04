import Head from 'next/head'
import React, { createContext, useContext, useEffect } from "react";
import { gql } from '@apollo/client';
import { getApolloClient } from "@/lib/apollo-client";
import CimFinance from "@/components/Calculation/CimFinance"; 
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {BiHide}from "react-icons/bi"
import {BsArrowUpShort} from "react-icons/bs"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart.slice";
import AddtoCartBtn from "@/components/Cart/AddtoCartBtn";

// export const CartContext = createContext();

export default function Products({ products }) {
  

  ///redux part

  const dispatch = useDispatch();





  const [Isopen, setIsopen] = useState(true);
  const [Addtowishlist, setAddtowishlist] = useState(false);
  // const [Cartdata,setCartdata] = useState([]);
  
///cart local storage
//   useEffect(() => {
//     const newCartData = JSON.parse(localStorage.getItem("cart-data"))
//     if (newCartData)
//         setCartdata(newCartData)
// }, [])

///check if there is data in localstorage then load localstorage with required data
//   useEffect(() => {
//     localStorage.setItem("cart-data", JSON.stringify(Cartdata))
//     console.log("data saved")
//     console.log(Cartdata)
// }, [Cartdata])

//   const Addtocart = (product) => {
//    setCartdata([...Cartdata,[product.title,product.price,product.image.sourceUrl,product.id]]);
//    setIsopen(!Isopen)
//    toast.success("Added to Cart")
//   }
///cart local storage


///wishlist

const handlewish =() =>{ 
  setAddtowishlist(!Addtowishlist)
}

  return (
    <>
      <main>    
        {products.map(product => 
        <div key={product.slug} className="flex flex-col lg:flex-row justify-center lg:gap-10">
        {/* image */}
        <div className="flex items-center justify-center">
        <img className="h-[40vh] w-fit border" src={product.image[0].url} alt="ProductImage" />
        </div>

        <div>
          RELATED PRODUCTS OR IMAGES
        </div>

         {/* fixed bottom  */}

        <div className={`fixed z-10 bottom-0 left-0 w-full h-[50vh] border-t border-gray-400 rounded-t-2xl bg-white flex flex-col justify-evenly
           ${Isopen ? 'translate-y-0':'translate-y-[40vh]'} ease-in-out duration-300`}>
           {/* scroll to hide  */}
          <div className="flex justify-center">
          <button className="p-2 rounded-lg " 
          onClick={() => setIsopen(!Isopen)}>  
          {Isopen ? <BiHide size={25}/> : <BsArrowUpShort size={25} className="animate-bounce"/>}         
          </button>
          </div>
           {/* title and wishlist  */}
          <div className="flex justify-evenly items-center px-2">
           <h1 className="font-semibold text-xl shrink">{product.title}</h1>
           <button onClick={() => handlewish()}
           className="">
            {!Addtowishlist ? <AiOutlineHeart size={25}/> : <AiFillHeart size={28}/> }
             
          </button>
          </div>
          
           {/* brand logo xs  sku */}
          <div>
          {/* <p className="text-primary text-xs text-center">{product.sku}</p> */}
          </div>

           {/* product description  */}
          <div className="flex justify-center text-primary">
          <h3 dangerouslySetInnerHTML={{__html: product.content}} className="text-xs text-center py-4 h-[10vh] overflow-scroll" />            
          </div>

          {/* Cimfinace */}
          <div className="flex justify-center items-center gap-10">
          <img src="https://cimfinance.mu/images/homepage/homepage_logo.png" className="w-[60px] lg:w-[120px] h-[20px] lg:h-auto" />
          <CimFinance price={product.price}/>
          </div>

          {/* PRICE ADD TO CART */}
          <div className="flex justify-around items-center border-t pt-4">
          <div className="">
            <h3 className="text-primary text-xs">Price:</h3>
            <div className="">
                {product.onsale ? 
                <div className="flex items-baseline gap-2">
                  <p className="line-through text-sm">Rs {product.price}</p>
                  <p className="text-lg font-semibold">Rs {product.sale}</p>
                </div> :
                 <>
                  <p className="text-base font-semibold">Rs {product.price}</p>
                </>}
            </div>
          </div>

           <AddtoCartBtn product={product}/>
          </div>
        </div>
        </div>
        )}

      </main>
    </>
  )
}

export async function getStaticProps({ params = {} } = {}) {
 
 const { productSlug } = params;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
    query  product ($slug : String){      
             products(where: {slug: $slug}) {
              title
              price
              slug
              sale
              onsale
              image {
                url
              }
              content{
                text
              }
            }
         }
    `,
    variables: {
      slug: productSlug,
    }
  });


  const products = data?.data.products.map(product =>{
    return{
      ...product,
    }
  });
    return { 
      props: {
        products
      }
    }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}