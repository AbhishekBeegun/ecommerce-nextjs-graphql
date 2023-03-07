import React, { createContext } from "react"
import { useState } from "react"
import LayoutFooter from "@/components/BasicLayout/LayoutFooter"
import MainNavbar from "@/components/Navbar/MainNavbar"
import '@/styles/globals.css'
import { Provider } from "react-redux"
import store from "../../redux/store"

export const ThemeContext = createContext();


export default function App({ Component, pageProps }) {
 
  const [ThemeToggle, setThemeToggle] = useState(true);


  return(
   <ThemeContext.Provider value={[ThemeToggle,setThemeToggle]}>
   <div className={ThemeToggle ? "theme-galaxy" : "theme-361"}>
   <Provider store={store}>
   <MainNavbar/>
   <Component {...pageProps} />
   <LayoutFooter/>
   </Provider>
  </div>
  </ThemeContext.Provider>
  )

}






