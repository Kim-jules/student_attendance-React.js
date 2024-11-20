import React from 'react'
import image1 from "../assets/images/30.png"
import image2 from '../assets/images/headphones1.png'
import image3 from '../assets/images/speaker1.png'
import image4 from "../assets/images/29.png"

const Banner = () => {
  return (
      <div className='flex items-center gap-10 select-none'>
          {/* <div className="bg-lime-400/50 flex rounded-full w-96 h-96 -translate-y-16 -"></div> */}
          <div className="one w-[500px] h-[500px] z-50">
              <div className='bg-green-500 w-44 h-44 absolute rounded-br-full'></div>
              <img src={image1} alt="User" className='' />
              <div className='bg-green-500 w-44 h-44 absolute rounded-tr-full top-144 -translate-x-10'></div>
          </div>
          <div className="two flex flex-col gap-10">
              <div className="top flex gap-16">
                  <div className="left w-20 h-20">
                      <img src={image2} alt="" />
                  </div>
                  <div className="middle font-jetBrains font-extrabold text-4xl text-green-500">
                      <h1 className='select-none'>Best Place</h1>
                      <h1 className='flex items-center justify-center select-none'>for</h1>
                  </div>
                  <div className="right w-20 h-20">
                      <img src={image3} alt="" />
                  </div>
              </div>
              <div className="bottom font-jetBrains text-5xl text-center font-bold bg-green-500 p-4 rounded-2xl text-white">
                  <h1 className='select-none'>Online Shopping</h1>
              </div>
          </div>
          <div className="three w-[530px] h-530px">
          <div className='bg-green-500 w-44 h-44 absolute rounded-bl-full xl:translate-x-[450px] lg:translate-x-[353px] top-28'></div>
              <img src={image4} alt="" />
              <div className='bg-green-500 w-44 h-44 absolute rounded-tl-full top-144 xl:translate-x-[450px] lg:translate-x-[353px]'></div>
          </div>
    </div>
  )
}

export default Banner