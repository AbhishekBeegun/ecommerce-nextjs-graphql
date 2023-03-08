import React from 'react'
import Head from "next/head"

const HeadC = ({title,description}) => {

  return (
    <>
   <Head>
   <title>{title}</title>
   <link rel="icon" href="Icon"/>
   <meta charset="UTF-8" />
   <meta name="description"
    content={description} />
   <meta name="keywords"
    content="NEXT JS, GRAPHQL ,ECOMMERCE" />
   <meta name="author"
    content="Abhishek Beegun" />
   <meta name="viewport"
   content="width=device-width, initial-scale=1.0" />
    </Head>
    
    </>
  )
}

export default HeadC