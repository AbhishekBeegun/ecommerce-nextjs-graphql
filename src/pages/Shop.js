import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { gql } from "@apollo/client";
import { getApolloClient } from "@/lib/apollo-client";
import SingleProduct from "@/components/ProductLayout/SingleProduct";
import PageInfo from "@/components/BasicLayout/PageInfo";


const Shop = ({products}) => {

  const [Products, setProducts] = useState([])

  useEffect(() => {
    setProducts(products)  
    console.log("product stored in state",products )
  }, [])
  
  return (
    <div>
    <PageInfo Info={"all products"}/>
    <SingleProduct products={Products}/>
    </div>
  )
}

export default Shop

export async function getStaticProps() {

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      {
        products(first: 25) {
        slug
        title
        price
        sale
        onsale
        image{
          url
        }
        content {
          html
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

