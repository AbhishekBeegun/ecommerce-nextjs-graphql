import React from 'react'

const PageInfo = ({Info}) => {
  return (
    <div className="bg-red-600 h-[30px] flex items-center">
     <p className="text-white text-sm font-semibold uppercase px-4">{Info}</p>
    </div>
  )
}

export default PageInfo