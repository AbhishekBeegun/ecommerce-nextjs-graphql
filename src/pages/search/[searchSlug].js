import React from 'react'
import { gql } from "@apollo/client";
import { getApolloClient } from "@/lib/apollo-client";
import SingleProduct from "@/components/ProductLayout/SingleProduct";
import HeadC from "@/components/BasicLayout/Head";


const search = ({products}) => {
    return (
      <>
      <HeadC title={"Search Page"} description={"Result for search query"}/>
        <SingleProduct products={products}/>  
      </>
    )
  }
  
  export default search;

  export async function getStaticProps({ params = {} } = {}) {
    const { searchSlug } = params;
   
  
      const apolloClient = getApolloClient();
    
      const data = await apolloClient.query({
        query: gql`query  search ($slug : String){
            products(where: {_search: $slug}) {
                slug
                title
                onsale
                price
                sale
                image {
                  url
                }
            }           
          }
        `,
        variables : {
          slug : searchSlug
        }
  
      });
    
      const products = data?.data.products.map(product =>{
        return {
          ...product,
          path: `/products/${product.slug}`
        }
      });

  
      return {
        props: {
          products,   
        }
      }
    }
    
  
    export async function getStaticPaths() {
      return {
        paths: [],
        fallback: 'blocking'
      }
    }