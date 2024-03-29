import React from 'react'
import { Carousel } from "flowbite-react"

const HomeBanner = () => {
  return (
    <>
      <div className="h-[200px] m-auto w-[95vw] xl:h-80 2xl:h-96 lg:w-[70vw]">
  <Carousel indicators={false}>
    {/* <img
      src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/rXB6lmnLTXyPUHwkyUV9"
      alt="banner-one"
    /> */}
    <img
      src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/lflQuitSySQZTapiUEUu"
      alt="banner-two"
    />
    <img
      src="https://images.samsung.com/is/image/samsung/assets/us/home/02132023/HOME_DM3_KV_Main-KV_1440x640_pc.jpg?imwidth=1366"
      alt="banner-three"
    />
  </Carousel>
</div>
    </>
  )
}

export default HomeBanner