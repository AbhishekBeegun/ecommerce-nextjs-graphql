import React from 'react'
import Link from "next/link"


const NavbarFix = () => {
  return (
    <nav className="bg-secondary text-xs lg:text-sm font-semibold uppercase px-4 h-[30px] flex items-center justify-evenly">
    <Link href="/hotdeal">
      <p className="navfix-items">
        Hot deal
      </p>
    </Link>
    <Link href="/Shop">
    <p className="navfix-items">
      Shop
    </p>
    </Link>
    <Link href="/brands">
    <p className="navfix-items">
        Brands
      </p>
    </Link>
    <Link href="/comparepage">
    <p className="navfix-items">
      Compare
    </p>
    </Link>
   </nav>
  )
}

export default NavbarFix