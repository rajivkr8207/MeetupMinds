import React from 'react'
import { Link } from 'react-router-dom'
import tech from '../assets/tech.webp'
const Footer = () => {
  return (
    <>
       <div className="bg-black w-full relative z-10 text-white">
        <div className="container mx-auto flex justify-around lg:flex-row flex-col py-8 ">
          <div className="mx-5 lg:my-0 my-5">
            <h1 className="text-2xl my-3 font-semibold flex gap-3">
            <img src={tech} alt="" className='w-10 h-10 my-auto ' />
            <span className="py-1"><span className="text-3xl font-medium">U</span>nfold<span className="text-3xl font-medium">S</span>teps</span>
</h1>
            
            <p className="flex  rounded-r-md">
              {/* <input
                type="text"
                placeholder="Enter your Email"
                className="outline-none bg-[#85898b]  text-white px-2 py-1 placeholder:text-white text-lg"
              /> */}
              <button className="font-semibold bg-[#db4444]  px-5 py-2 rounded-md">
                <Link to='/contact'>Contact Us</Link>
              </button>
            </p>
            
            
          </div>
          <div className="mx-5 lg:mx-0 lg:my-0 my-5  text-lg flex flex-col gap-3 ">
          <p className=" text-[#EBEBEB]">
              Email: support@weland.com
            </p>
            <p className=" text-[#EBEBEB]">
              Phone: +1 (234) 567-8901
            </p>
            <p className=" text-[#EBEBEB]">
              Address: 123 Virtual Lane, Metaverse City, VR
            </p>
          </div>
        </div>

        <div className="text-center  text-base py-2 capitalize ">
          © {new Date().getFullYear()} MeetupMinds . all right reserved
        </div>
      </div>
    </>
  )
}

export default Footer