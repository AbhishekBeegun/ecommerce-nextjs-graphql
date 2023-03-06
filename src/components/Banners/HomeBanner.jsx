import React from 'react'
import { Carousel } from "flowbite-react"

const HomeBanner = () => {
  return (
    <>
      <div className="h-[150px] sm:h-64 xl:h-80 2xl:h-96">
  <Carousel indicators={false}>
    <img
      src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/rXB6lmnLTXyPUHwkyUV9"
      alt="..."
    />
    <img
      src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/lflQuitSySQZTapiUEUu"
      alt="..."
    />
    {/* <img
      src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      alt="..."
    /> */}
  </Carousel>
</div>
    </>
  )
}

export default HomeBanner