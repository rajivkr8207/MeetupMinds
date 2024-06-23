import React from 'react'
import work from "../../assets/work.png";
import certificate from "../../assets/certificate.png";
const Certificate = () => {
  return (
    <>
        <div className='container mx-auto lg:w-[78vw] w-full'>
        <div className="flex gap-3">
          <div className="w-[1.5rem] rounded-md h-[3rem] bg-[#DB4444]"></div>
          <span className="text-[#DB4444] font-semibold text-2xl my-auto">
          What we do
          </span>
        </div>

        <div className="flex justify-center lg:flex-row flex-col gap-10">
          <div className="lg:w-[30%] w-full lg:h-[40vh] h-full ">
            <img src={work} alt="" className='h-full' />
          </div>
          <div className="lg:w-1/2 w-full flex  flex-col items-start justify-center gap-5 lg:text-2xl text-lg lg:px-0 px-2">
          <h2 className='capitalize font-semibold text-3xl'> introduction</h2>
            <p className="text-left text-gray-500 text-base">
              We curate and deliver high-quality workshops tailored to meet your
              unique needs, providing practical knowledge and hands-on
              experience. Whether upskilling your team, introducing new
              technologies,
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:flex-row flex-col gap-10">
          
          <div className="lg:w-1/2 w-full flex  flex-col items-start justify-center gap-5 lg:text-2xl text-lg lg:px-0 px-2">
          <h2 className='capitalize font-semibold text-3xl'> Participation certificate</h2>
            <p className="text-left text-gray-500 text-base">
              We curate and deliver high-quality workshops tailored to meet your
              unique needs, providing practical knowledge and hands-on
              experience. Whether upskilling your team, introducing new
              technologies,
            </p>
          </div>
          <div className="lg:w-[30%] w-full lg:h-[40vh] h-full ">
            <img src={certificate} alt="" className='h-full' />
          </div>
        </div>
        </div>
    </>
  )
}

export default Certificate