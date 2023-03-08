import React from 'react'
import { Accordion } from "flowbite-react"
import HeadC from "@/components/BasicLayout/Head"

const Issues = () => {
  return (
    <>
    <HeadC title={"Issues"} description={"Problems"}/>
        <h1 className="text-2xl uppercase text-primary">issues to fix / features to setup</h1>
    
        <Accordion collapseAll={true}>

        <Accordion.Panel>
    <Accordion.Title>
       Local Storage
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Not set up 
      </p>   
    </Accordion.Content>
  </Accordion.Panel>

  <Accordion.Panel>
    <Accordion.Title>
    User Auth
    </Accordion.Title>
    <Accordion.Content>

      <p className="text-gray-500 dark:text-gray-400">
        Next Auth install But No setup --- check Thoe-t3
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
      Search Improvement
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Search can be Improve by correcting Categories + search in search page and user input check img below-- current search p return eg: si ena tv dn title return products with tv inside title
      <img src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/bXgZS56hRrGcHl9QVcwp" alt="searchimprouve" width="500px" height="300px"/>
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  
  <Accordion.Panel>
    <Accordion.Title>
        Theme Courts Mammoud
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Using context--true--false to control theme galaxy or 361 ... may be check on Switch case for 3rd options...
      </p>   
    </Accordion.Content>
  </Accordion.Panel>

    
  <Accordion.Panel>
    <Accordion.Title>
        Flowbite react
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
       Navbar not well optimise for md-screen--
       do not add tags between its components result= hydration problems switch from ssr to csr V=not good 
      </p>   
    </Accordion.Content>
  </Accordion.Panel>
    
  <Accordion.Panel>
    <Accordion.Title>
        Redux
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Easy to use learn more ... useDispatch = pu make action  useSelector = select state to work with. .. 
      </p>   
    </Accordion.Content>
  </Accordion.Panel>

    
  <Accordion.Panel>
    <Accordion.Title>
        PWA
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Not setup --  -- -
      </p>   
    </Accordion.Content>
  </Accordion.Panel>

  <Accordion.Panel>
    <Accordion.Title>
        Wishlist
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Not setup --  -- -
      </p>   
    </Accordion.Content>
  </Accordion.Panel>

  <Accordion.Panel>
    <Accordion.Title>
      Sort Products
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Nedd to sort product in pages = step 1 : put query request in a state---step 2: javascript the satet for ordering by high low price , lastest
      step 3 : put all in a component & to page
      </p>   
    </Accordion.Content>
  </Accordion.Panel>

  <Accordion.Panel>
    <Accordion.Title>
       Dependencies
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
 See in Package.json
       </p>   
    </Accordion.Content>
  </Accordion.Panel>

  <Accordion.Panel>
    <Accordion.Title>
        Apollo client
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      use this insead of other choice -- easy to set u p:::: need env & boilerplate folder lib == 
      </p>   
    </Accordion.Content>
  </Accordion.Panel>

  <Accordion.Panel>
    <Accordion.Title>
        Next Image
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      not working need toi find more resources but images in webp format
      </p>   
    </Accordion.Content>
  </Accordion.Panel>

 


       </Accordion> 
    </>
  )
}

export default Issues