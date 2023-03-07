import Link from "next/link"
import React from 'react'

const NavbarFix = () => {
  return (
    <nav className="bg-primary text-secondary text-xs lg:text-sm font-semibold uppercase px-4 h-[30px] flex items-center justify-evenly">
    <Link href="/hotdeal">
        Hot deals
    </Link>
    <Link href="/Shop">
        All Products
    </Link>
    <Link href="/brands">
        Brands
    </Link>
    <Link href="/compare">
      Compare
    </Link>
   </nav>
  )
}

export default NavbarFix