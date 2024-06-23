import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
        <div className="w-full h-[90vh] grid place-content-center">
        <div>
          <h1 className="lg:text-[8rem] md:text-[5rem] text-[3rem] font-bold ">404 Not Found</h1>
          <p className="text-center">
            you visit page not found. you may go home page
          </p>
          <div className="text-center">
          <button className="font-semibold bg-[#db4444] capitalize px-5 py-2 rounded-md text-white my-3">
                <Link to='/'>Back to main page</Link>
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error404