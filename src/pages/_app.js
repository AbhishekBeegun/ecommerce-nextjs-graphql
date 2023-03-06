import React from "react"
import { useState } from "react"
import LayoutFooter from "@/components/BasicLayout/LayoutFooter"
import MainNavbar from "@/components/Navbar/MainNavbar"
import '@/styles/globals.css'
import { Provider } from "react-redux"
import store from "../../redux/store"



export default function App({ Component, pageProps }) {
 
  const [ThemeToggle, setThemeToggle] = useState(1);


  return(
   <div className={ThemeToggle === 1 ? "theme-galaxy" : "theme-courts"}>
   <Provider store={store}>
   <MainNavbar/>
   <Component {...pageProps} />
   <LayoutFooter/>
   </Provider>
  </div>
  )

}






