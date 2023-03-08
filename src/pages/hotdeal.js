import React from 'react'
import { gql } from "@apollo/client";
import { getApolloClient } from "@/lib/apollo-client";
import SingleProduct from "@/components/ProductLayout/SingleProduct";
import PageInfo from "@/components/BasicLayout/PageInfo";
import HeadC from "@/components/BasicLayout/Head";


const hotdeal = ({products}) => {
  return (
    <>
    <HeadC title={"Hot Deals"} description={"Product on Promo"} />
      <PageInfo Info={"hot deals"} />
      <SingleProduct products={products}/>
    </>
  )
}

export default hotdeal

export async function getStaticProps() {

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      {  products(where: {onsale: true}) {
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