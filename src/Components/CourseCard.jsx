import React from 'react'
// import image from '../assets/image.webp'
//  import image from '../assets/image.webp'

const CourseCard = ({ image, title, description, online, onEnroll }) => {
  return (
    <>
        <div className="max-w-sm rounded-lg shadow-lg m-4 relative border ">
      <img className="w-full h-[12rem]" src={image} alt='safd' />
      <div className="absolute top-[-1rem] left-[2rem] w-[45%]  bg-[#db4444] text-white text-center h-[2rem]  rounded-lg shadow-black text-2xl px-3  overflow-hidden">
                    {online}
                  </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description }
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button 
        onClick={onEnroll}
        className="bg-[#eb5050] hover:bg-[#db4444] text-white font-bold py-2 px-4 rounded">

          Enroll Now
        </button>
      </div>
    </div>
    </>
  )
}

export default CourseCard