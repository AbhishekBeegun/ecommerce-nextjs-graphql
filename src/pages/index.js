import Head from 'next/head'
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HomeBanner from "@/components/Banners/HomeBanner"
import { gql } from "@apollo/client";
import { getApolloClient } from "@/lib/apollo-client";
import PageInfo from "@/components/BasicLayout/PageInfo";
import SingleProduct from "@/components/ProductLayout/SingleProduct";
import Searchbar from "@/components/Search/Searchbar";
import HeadC from "@/components/BasicLayout/Head";


        //  {DOTW.map(item => {   how to map through an arry
        //   return (
        //   <p>{item.title}</p>
        //   )
        // })}
        // <p>deals of the week end</p>
///MainPageproducts is the resquest from graphql then the data is stored in state MainPageProduct
export default function Home({MainPageproducts}) {
  
  const [MainPageProduct, setMainPageProduct] = useState([]);

  useEffect(() => {
    setMainPageProduct(MainPageproducts)
  },[MainPageProduct])

  //allow to get n number in an aary pu latest products asuuming query in Decendin g order
  const latest = MainPageProduct.slice(10,15);


  //deals of the week check if Onsale = true display 1st 5 of the
  
  function onSale(Product){
    return Product.onsale == true;
  }
  const deals = MainPageProduct.filter(onSale);

  const DOTW = deals.slice(0,5);

 
  return (
    <>
      <HeadC title={"HomePage"} description={"Main page"}/>

   
      <main>
        <HomeBanner/>
        <Searchbar/>
        <div className="py-2">
        <PageInfo Info={"Deal of the week"}/>
        <SingleProduct products={DOTW} />
        </div>


        <div className="py-2">
          <PageInfo Info={"Newly added"}/>
          <SingleProduct products={latest} />
        </div>
        
      </main>
    </>
  )
}


export async function getStaticProps() {

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      {  
          products(first: 20, orderBy: createdAt_DESC) {
              slug
              title
              onsale
              price
              sale
              image {
                url
              }
              categories {
                title
              }
            }
      }
    `,
  });

  const MainPageproducts = data?.data.products.map(product =>{
    return{
      ...product,
      path: `/products/${product.slug}`
    }
  });
    return { 
      props: {
        MainPageproducts
      }
    }
}

