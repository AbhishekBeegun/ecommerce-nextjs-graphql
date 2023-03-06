import React from 'react'
import { Navbar } from "flowbite-react"
import { Dropdown } from "flowbite-react"
import User from "../User/User"
import Cart from "../Cart/Cart"
import NavbarFix from "./NavbarFix"
import Link from "next/link"


const MainNavbar = () => {
  return (
    <div className="pb-2">

      {/* //categories and other */}
      <div>
    <Navbar
  fluid={true}
  rounded={true}
>
  
    <Link href="/">
    <img
    // https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/zLpa3k3UQCiDZv4DBNpn
      src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/rtfRp7DLSyya3k8rBmQA"
      className="mr-3 h-6 sm:h-6"
      alt="Store Logo"
    />
    </Link>
  
  <div className="flex items-center gap-2 md:order-3">
   <User/>
   <Cart/>    
   <Navbar.Toggle />
  </div>


  {/* ///categories */}
  <Navbar.Collapse>
   {/* smartphones */}
   <div className="flex flex-col items-center md:flex-row gap-2 text-primary font-semibold text-base">
  <Dropdown
  label="Phones & Accessories"
  inline={true}
  placement="bottom"
>
  <Dropdown.Item className="text-primary">
    <Link href={`/categories/${"smartphone"}`}>
      Smartphones
    </Link>
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item className="text-primary">
  <Link href={`/categories/${"tablet"}`}>
     Tablets
    </Link>
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item className="text-primary">
  <Link href={`/categories/${"smartwatch"}`}>
      Smartwatch
    </Link>
  </Dropdown.Item>
</Dropdown>

<Dropdown.Divider />

{/* Televisions */}
<Dropdown
  label="Televisions & Accessories"
  inline={true}
  placement="bottom"
>
  <Dropdown.Item className="text-primary">
  <Link href={`/categories/${"television"}`}>
      Televisions
    </Link>
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item className="text-primary">
  <Link href={`/categories/${"soundbar"}`}>
      Soundbar
    </Link>
  </Dropdown.Item>
</Dropdown>



<Dropdown.Divider />
{/* Laptops */}
<Dropdown
  label="Laptops"
  inline={true}
  placement="bottom"
>
  <Dropdown.Item className="text-primary">
  <Link href={`/categories/${"laptop"}`}>
      Laptops
    </Link>
  </Dropdown.Item>
</Dropdown>


<Dropdown.Divider/>
{/* washings machines */}
<Dropdown
  label="Washing Machines"
  inline={true}
  placement="bottom"
>
  <Dropdown.Item className="text-primary">
  <Link href={`/categories/${"washer"}`}>
      Washer
    </Link>
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item className="text-primary">
  <Link href={`/categories/${"dryer"}`}>
      Dryer
    </Link>
  </Dropdown.Item>
</Dropdown>
</div>
</Navbar.Collapse>
</Navbar>
</div>

      <NavbarFix/>

    </div>
  )
}

export default MainNavbar