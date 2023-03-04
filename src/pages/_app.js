import LayoutFooter from "@/components/BasicLayout/LayoutFooter"
import MainNavbar from "@/components/Navbar/MainNavbar"
import '@/styles/globals.css'
import { Provider } from "react-redux"
import store from "../../redux/store"



export default function App({ Component, pageProps }) {
 
  return(
   <>
   <Provider store={store}>
   <MainNavbar/>
   <Component {...pageProps} />
   <LayoutFooter/>
   </Provider>
  </>
  )

}






