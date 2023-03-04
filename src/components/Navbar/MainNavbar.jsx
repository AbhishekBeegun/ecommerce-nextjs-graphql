import React from 'react'
import { Navbar } from "flowbite-react"
import User from "../User/User"
import Cart from "../Cart/Cart"


const MainNavbar = () => {
  return (
    <>
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    <img
    // https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/zLpa3k3UQCiDZv4DBNpn
      src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/rtfRp7DLSyya3k8rBmQA"
      className="mr-3 h-6 sm:h-6"
      alt="Store Logo"
    />
  </Navbar.Brand>
  <div className="flex items-center gap-2 md:order-2">
   
   <Cart/>
   
   <User/>
    
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/hotdeal">
      HOT DEALS
    </Navbar.Link>
    <Navbar.Link href="/Newarrivals">
      NEW ARRIVALS
    </Navbar.Link>
    <Navbar.Link href="#">
      SHOP BY BRANDS
    </Navbar.Link>
    <Navbar.Link href="/Shop">
      ALL PRODUCTS
    </Navbar.Link>
    <Navbar.Link href="#">
      OTHERS
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    </>
  )
}

export default MainNavbar