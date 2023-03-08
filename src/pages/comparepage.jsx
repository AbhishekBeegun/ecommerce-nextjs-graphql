import React from 'react'
import CompareItem from "@/components/Compare/CompareItem";
import Link from "next/link";
import { useSelector } from "react-redux";
import PageInfo from "@/components/BasicLayout/PageInfo";
import HeadC from "@/components/BasicLayout/Head";

const comparepage = () => {


    const compare = useSelector(state => state.compare);


  return (
    <div className="py-2">
      <HeadC title={"Compare"} description={"Compare Products"}/>
      <PageInfo Info={"Compare"} />    


        {compare.length === 0 ? (
        <div className="w-full flex flex-col justify-center gap-2 items-center">
         <p className="text-primary">No product to compare ! </p>
         <Link href="/brands">
          <p className="bg-primary text-secondary uppercase px-2 py-1 rounded-lg">Find a product</p>          
         </Link>
        </div>
      ) : (
        <>
        <div className="flex items-center lg:justify-center lg:flex-row lg:flex-wrap gap-2 max-w-screen overflow-scroll">
          {compare.map((item) => (
           <CompareItem key={item} item={item}/>
          ))}
        </div>

        </>
      )}

    </div>
  )
}

export default comparepage