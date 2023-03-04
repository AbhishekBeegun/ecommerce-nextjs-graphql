import React from 'react'
import { useEffect } from 'react'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CimFinance from "../Calculation/CimFinance";
import SaveSale from "../Calculation/SaveSale";
import {IoMdGitCompare} from "react-icons/io"


import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart.slice";

const SingleProduct = ({products}) => {


  const dispatch = useDispatch();


  const [compare, setcompare] = useState([]);
      ///cart local storage
      // useEffect(() => {
      //   const newCartData = JSON.parse(localStorage.getItem("compare-data"))
      //   if (newCartData)
      //       setcompare(newCartData)
      // }, [])
    
    ///check if there is data in localstorage then load localstorage with required data
    //   useEffect(() => {
    //     localStorage.setItem("compare-data", JSON.stringify(compare))
    //     console.log("data saved")
    //     console.log(compare)
    // }, [compare])
    
    //   const handleClick = (product) => {
    //         setcompare([...compare,[product.title,product.image.sourceUrl,product.content,product.price]])
    //         alert("Added to Compare") 
    //     }

  return (
    <div className="">
        <main className="">
        <ul className="flex flex-wrap justify-center items-center gap-5">
          {products && products.length > 0 && products.map(product => {
            return (
              <div key={product.slug} className="relative w-[250px]" >
                <Link href={product.path}>
                  <div className="flex flex-col">
                  <img src={product.image[0].url} alt="Productimg" width="250" height="250" className="border hover:scale-110 transition-all ease-in-out rounded-lg"/>
                    <h3 dangerouslySetInnerHTML={{
                      __html: product.title
                    }} className="text-base font-semibold py-4 shrink" />
                  </div>
                </Link>
                
               <div className="border-b py-2">
                {product.onsale ? 
                <div className="flex items-baseline gap-2">
                  <p className="line-through text-sm">Rs {product.price}</p>
                  <p className="text-lg font-semibold text-[#303030]">Rs {product.sale}</p>
                </div> :
                 <div>
                  <p className="text-lg font-semibold text-[#303030]">Rs {product.price}</p>
                </div>}

              </div>

                <div className="flex flex-col gap-4 py-2">
                <CimFinance price={product.price}/>

                </div>
                <div title="Compare" 
                className="absolute top-5 left-2">
                  <div className="bg-white p-1 rounded-lg flex items-center justify-center">
                   <button onClick={() => handleClick(product)}
                    className="text-primary">
                    <IoMdGitCompare size={25}/>
                   </button>
                  </div>
                </div>

                <button 
                 onClick={() => dispatch(addToCart(product))}
                 className="border rounded-lg border-primary w-28 h-10 text-xs bg-primary text-secondary">
                 ADD TO CART
                 </button>


                <div>
                {product.onsale ?
                 <div className="absolute top-5 right-0">
                  <SaveSale regularPrice={product.price} salePrice={product.sale}/>
                  </div> : 
                 <div className="hidden"></div>}


             
                </div> 



                
              </div>

            

              

            );
          })}

          {!products || products.length === 0 && (
            <div>
              <p>
                Oops, no Product found!
              </p>
            </div>
          )}
        </ul> 
    </main>
    </div>
  )
}

export default SingleProduct