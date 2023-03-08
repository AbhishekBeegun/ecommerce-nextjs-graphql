import React from 'react'
import Link from "next/link"
import HeadC from "@/components/BasicLayout/Head"

const brands = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center py-4">
        <HeadC title={"Shop By Brands"} description={"Brands"}/>
        <Link href={`/categories/${"samsung"}`}>
            <img src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/EnwweEybQSlr8sC2UOmp"
            className="brandimg"
            alt="Brand" />
        </Link>

        <Link href={`/categories/${"skyworth"}`}>
            <img src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/aXk7puWoTXa4RFf8SjVB"
            className="brandimg "
            alt="Brand" />
        </Link>

        <Link href={`/categories/${"lg"}`}>
            <img src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/sKvLh2XtQp2P2jk6mNuC"
            className="brandimg "
            alt="Brand" />
        </Link>

        <Link href={`/categories/${"huawei"}`}>
            <img src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/GZtI6ZNrT5CPKP9U4Pp8"
            className="brandimg "
            alt="Brand"/>
        </Link>

        <Link href={`/categories/${"apple"}`}>
            <img src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/nwSHt79SnGU9sUr0hjzb"
            className="brandimg "
            alt="Brand"/>
        </Link>

        <Link href={`/categories/${"asus"}`}>
            <img src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/xhJNYCGQeTAxhcjxtJdQ"
            className="brandimg "
            alt="Brand"/>
        </Link>
        
        <Link href={`/categories/${"hp"}`}>
            <img src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/c0x2yElnTfeu4zODVKAb"
            className="brandimg "
            alt="Brand"/>
        </Link>

        <Link href={`/categories/${"jbl"}`}>
            <img src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/neaOG20uTe2GUdDrMskH"
            className="brandimg "
            alt="Brand"/>
        </Link>




    </div>
  )
}

export default brands