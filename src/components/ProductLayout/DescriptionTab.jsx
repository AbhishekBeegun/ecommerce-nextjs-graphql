import React from 'react'
import { Tabs } from "flowbite-react"
import PageInfo from "../BasicLayout/PageInfo"



///tabs under product in [Productslug.js]

const DescriptionTab = ({content}) => {
  return (
    <div>
      <PageInfo Info={"description"}/>
    <h3 dangerouslySetInnerHTML={{__html: content.html}} className="text-base text-primary font-semibold text-center py-4 h-[15vh] overflow-scroll" />            
    </div>
  )
}

export default DescriptionTab