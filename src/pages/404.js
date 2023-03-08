import HeadC from "@/components/BasicLayout/Head"
import React from 'react'

const Error404 = () => {
  return (
    <div className="bg-secondary flex flex-col justify-center items-center">
       <HeadC title={"404 page"} description={"Page not found"}/>
        <h1 className="text-primary uppercase text-xl py-2">Page not found</h1>
        <img src="https://media.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif" alt="lost" width="400px" /> 
    </div>
  )
}

export default Error404