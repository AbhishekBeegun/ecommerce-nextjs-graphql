import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { gql } from "@apollo/client";
import { getApolloClient } from "@/lib/apollo-client";
import SingleProduct from "@/components/ProductLayout/SingleProduct";



const Newarrivals = ({products}) => {


    const [Products, setProducts] = useState([])

    useEffect(() => {
      setProducts(products)  
      console.log("product stored in state",products )
    }, [])

    
  return (
    <div>
    Our latest Products
    <SingleProduct products={Products}/>
    </div>
  )
}

export default Newarrivals


export async function getStaticProps() {

    const apolloClient = getApolloClient();
  
    const data = await apolloClient.query({
      query: gql`
        {   products(where: {}, orderBy: publishedAt_DESC) {
            title
            price
            slug
            sale
            onsale
            image {
              url
            }
          }
        }
      `,
    });
  
    const products = data?.data.products.map(product =>{
      return{
        ...product,
        path: `/products/${product.slug}`
      }
    });
      return { 
        props: {
          products
        }
      }
  }