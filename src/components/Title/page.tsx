import React from 'react'
import RightArrow from '../Icons/RightArrow'

const TitleHeader = () => {
  return (
    <div className="flex text-sm">
        <p className=" cursor-pointer">Home</p>
        <div className="flex items-center mx-3">
          <RightArrow />
        </div>
        <p className=" cursor-pointer">Games</p>
        <div className="flex items-center mx-3">
          <RightArrow />
        </div>
        <p className=" cursor-pointer">Best Free P2E NFT Games in 2022</p>
      </div>
  )
}

export default TitleHeader