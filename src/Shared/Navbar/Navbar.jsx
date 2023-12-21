import {  NavLink } from "react-router-dom";

const Navbar = () => {

    const navLink = <>
         <li><NavLink to='/'>Home</NavLink></li>
         <li><NavLink to='/blog'>Blog</NavLink></li>
    </>
    
  return (
    <div>
      <div className="navbar bg-[#F6F6F2]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="flex justify-around  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box "
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost  font-bold text-3xl">Task<span className="text-[#388087]">Log</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-[#388087] font-bold">Let's Explore</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;