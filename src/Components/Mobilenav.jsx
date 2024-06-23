import React from 'react'
import { Link } from 'react-router-dom'
const Mobilenav = (props) => {
  return (
    <>
        <div className="lg:hidden block absolute top-[0%] py-2 left-0 w-[100vw] bg-[#0000003d] text-center  backdrop-blur-xl">
        <ul className="flex flex-col gap-12 font-semibold text-xl uppercase">
          <li onClick={props.handlechange}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={props.handlechange}>
          <Link to="/course">Courses</Link>
          </li>
          {/* <li onClick={props.handlechange}>
            <Link to="/contact">Contact us</Link>
          </li> */}
          <li onClick={props.handlechange}>
          <Link
              to="/contact"
              className="bg-[#db4444] px-5 py-1 text-white rounded-lg cursor-pointer uppercase"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Mobilenav