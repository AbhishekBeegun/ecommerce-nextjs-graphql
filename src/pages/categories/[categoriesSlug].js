import React from 'react'
import { gql } from "@apollo/client";
import { getApolloClient } from "@/lib/apollo-client";
import SingleProduct from "@/components/ProductLayout/SingleProduct";


const search = ({products}) => {
    return (
      <div>
        <SingleProduct products={products}/>  
      </div>
    )
  }
  
  export default search;

  export async function getStaticProps({ params = {} } = {}) {
    const { categoriesSlug } = params;
   
  
      const apolloClient = getApolloClient();
    
      const data = await apolloClient.query({
        query: gql`query  categorie ($categorie : String){
            products(where: {categories_some : {_search: $categorie}}) {
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
          categorie : categoriesSlug
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