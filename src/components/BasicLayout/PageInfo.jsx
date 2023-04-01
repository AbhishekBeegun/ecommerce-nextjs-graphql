import React from 'react'

const PageInfo = ({Info}) => {
  return (
    <div className="bg-primary text-secondary h-[30px] flex w-screen items-center">
     <p className="text-sm font-semibold uppercase px-4 lg:px-48">{Info}</p>
    </div>
  )
}

export default PageInfo