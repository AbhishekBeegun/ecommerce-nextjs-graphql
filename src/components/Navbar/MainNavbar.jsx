import React, { useContext } from 'react'
import { Navbar } from "flowbite-react"
import { Dropdown } from "flowbite-react"
import {BsToggleOff} from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import {GoAlert} from "react-icons/go"
import Cart from "../Cart/Cart"
import NavbarFix from "./NavbarFix"
import Link from "next/link"
import { ThemeContext } from "@/pages/_app";
import { toast, Toaster } from "react-hot-toast";

// import User from "../User/User"


const MainNavbar = () => {

  const [ThemeToggle , setThemeToggle] = useContext(ThemeContext);


  function themeSwitch(){
    setThemeToggle(!ThemeToggle)
    toast.success("Theme changed")
  }

  return (
    <div className="pb-2">
      <Toaster/>

      {/* //categories and other */}
      <div className="lg:px-4">
    <Navbar
  fluid={true}
  rounded={true}
>
  
    <Link href="/">
      {ThemeToggle ? 
      <img
    // galaxy
      src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/rtfRp7DLSyya3k8rBmQA"
      width="100px"
      height="20px"
      alt="Store Logo"/>:
      <img
      // 361
        src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/zLpa3k3UQCiDZv4DBNpn"
        width="50px"
        height="20px"
       alt="Store Logo"/>}
    </Link>
  
  <div className="flex items-center gap-2 md:order-3">

   {/* UserAuth not setup I dont know to do that need to learn */}
   {/* <User/> */}
   <button title="Issues">
   <Link href="/Issues">
   <GoAlert size={20} className="text-primary"/>
   </Link>
   </button>
   <Cart/>    
   <Navbar.Toggle />
  </div>


  {/* ///categories */}
  <Navbar.Collapse>
   {/* smartphones */}
   <div className="flex flex-col items-center md:flex-row gap-2 text-primary bg-secondary font-semibold text-base">
  <Dropdown
  label="Phones & Accessories"
  inline={true}
  placement="bottom"
>
  <Dropdown.Item className="text-primary bg-secondary">
    <Link href={`/categories/${"smartphone"}`}>
      Smartphones
    </Link>
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item className="text-primary bg-secondary">
  <Link href={`/categories/${"tablet"}`}>
     Tablets
    </Link>
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item className="text-primary bg-secondary">
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
  <Dropdown.Item className="text-primary bg-secondary">
  <Link href={`/categories/${"television"}`}>
      Televisions
    </Link>
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item className="text-primary bg-secondary">
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
  <Dropdown.Item className="text-primary bg-secondary">
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
  <Dropdown.Item className="text-primary bg-secondary">
  <Link href={`/categories/${"washer"}`}>
      Washer
    </Link>
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item className="text-primary bg-secondary">
  <Link href={`/categories/${"dryer"}`}>
      Dryer
    </Link>
  </Dropdown.Item>
</Dropdown>

<Dropdown.Divider />
<>
<div className="flex items-center gap-2">Switch Theme
{ThemeToggle ? 
      <img
      // 361
        src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/zLpa3k3UQCiDZv4DBNpn"
        className="h-6 sm:h-6"
        alt="Store Logo"/>:
        <img
        // galaxy
          src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/rtfRp7DLSyya3k8rBmQA"
          className="h-3 sm:h-3"
          alt="Store Logo"/>
        }
</div>
{ThemeToggle ? 
<button onClick={() => themeSwitch()}>
<BsToggleOff size={25}/>
</button> : 
<button onClick={() => themeSwitch()}>
<BsToggleOn size={25}/>
</button>}
</>

<div>

</div>


</div>
</Navbar.Collapse>
</Navbar>
</div>

      
      
      <NavbarFix/>

    </div>
  )
}

export default MainNavbar