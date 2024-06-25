import React, { useState } from "react";
import { Link } from "react-router-dom";
import tech from '../assets/tech.webp'

import { CiMenuFries } from "react-icons/ci";
import Mobilenav from "./Mobilenav";

const Header = () => {
    const [toggle, setToggle] = useState(false);


  function handlechange() {
    setToggle(!toggle);
  }
  return (
    <>
        <header>
        <div className="mx-auto flex lg:justify-around justify-between lg:px-0 px-3 py-5 z-10 relative border-b border-black">
        <div>
          <Link to="/" className="text-2xl font-bold  flex gap-3 my-auto">
          <img src={tech} alt="" className='w-10 h-10 my-auto ' />
          <span className="py-1"><span className="text-3xl font-medium">U</span>nfold<span className="text-3xl font-medium">S</span>teps</span></Link>
        </div>
        <div className="my-auto hidden lg:block">
          <ul className="flex gap-12 font-semibold text-lg uppercase">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/course">Courses</Link>
            </li>
            {/* <li>
              <Link to="/contact">Contact us</Link>
            </li> */}
            <li>
              <Link
                to="/contact"
                className="bg-[#db4444] px-5 py-2 text-white rounded-lg cursor-pointer uppercase"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="lg:hidden block text-3xl cursor-pointer mr-2"
          onClick={handlechange}
        >
          <CiMenuFries className="text-3xl" />
        </div>
        <div className={toggle ? "block absolute top-[4rem] left-0" : "hidden"}>
          <Mobilenav handlechange={handlechange} />
        </div>
      </div>
        </header>
    </>
  )
}

export default Header