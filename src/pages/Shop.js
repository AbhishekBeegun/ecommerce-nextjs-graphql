import React from 'react'
import { gql } from "@apollo/client";
import { getApolloClient } from "@/lib/apollo-client";
import SingleProduct from "@/components/ProductLayout/SingleProduct";
import PageInfo from "@/components/BasicLayout/PageInfo";
import HeadC from "@/components/BasicLayout/Head";

const Shop = ({products}) => {

  return (
    <>
    <HeadC title={"Shop"} description={"All Products"}/>
    <PageInfo Info={"all products"}/>
    <SingleProduct products={products}/>
    </>
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

