import React from 'react'
import { Spinner } from "flowbite-react";
import Link from "next/link";
import CimFinance from "../Calculation/CimFinance";
import SaveSale from "../Calculation/SaveSale";
import CompareBtn from "../Compare/CompareBtn";
import SmallAddtoCartBtn from "../Cart/SmallAddtoCartBtn";
// import AddtoCartBtn from "../Cart/AddtoCartBtn";



const SingleProduct = ({products}) => {


  


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
    <div className="py-4">
        <main className="">
        <ul className="flex flex-wrap justify-center items-center gap-5">
          {products && products.length > 0 && products.map(product => {
            return (
              <div key={product.slug} className="relative w-[290px]" >
                <Link href={product.path}>
                  <div className="flex flex-col">
                  <img src={product.image[0].url} alt="Productimg" width="290" height="290" className="border hover:scale-110 transition-all ease-in-out rounded-lg"/>
                    <h3 dangerouslySetInnerHTML={{
                      __html: product.title
                    }} className="text-base font-semibold py-2 shrink" />
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
 
                <>
                  {/* <AddtoCartBtn product={product}/> bttn not activate */}
                </>

                <div 
                className="absolute top-5 left-2 flex flex-col gap-2">
                  <CompareBtn product={product}/>
                  <SmallAddtoCartBtn product={product}/>
                </div>



                <>
                {product.onsale ?
                 <div className="absolute top-5 right-0">
                  <SaveSale regularPrice={product.price} salePrice={product.sale}/>
                  </div> : 
                 <div className="hidden"></div>}


             
                </> 



                
              </div>

            

              

            );
          })}

          {!products || products.length === 0 && (
            <div className="text-center">
              {/* need to find a way to change color in flowbite */}
             <Spinner aria-label="Lording" color="failure" size="xl"/>
            </div>
          )}
        </ul> 
    </main>
    </div>
  )
}

export default SingleProduct