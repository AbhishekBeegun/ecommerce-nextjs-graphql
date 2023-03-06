import React from 'react'
import Link from "next/link"
import { useState } from "react"

const Searchbar = () => {

  const [Input, setInput] = useState("");

  return (
    <div className="py-1 px-4">
    <form>   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-secondary">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search"
        onChange={(e) => setInput(e.target.value)}
        id="default-search" 
        className="block w-full p-4 pl-10 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="SAMSUNG , TV" required />
        <Link href={`/search/${Input}`}>
        <button type="submit" className="text-secondary absolute right-2.5 bottom-2 bg-primary hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary dark:hover:bg-red-700 dark:focus:ring-red-800"><svg aria-hidden="true" className="w-5 h-5 text-secondary dark:text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        </Link>
    </div>
   </form>
    </div>
  )
}

export default Searchbar