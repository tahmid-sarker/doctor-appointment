import React from "react";
import { asset } from "../../utils/asset";
import { NavLink } from "react-router";

const Header = () => {
  const NavLinks = (
    <>
      <NavLink to="/" className="m-2 hover:underline">Home</NavLink>
      <NavLink to="/my-bookings" className="m-2 hover:underline">My Bookings</NavLink>
      <NavLink to="/blogs" className="m-2 hover:underline">Blogs</NavLink>
      <NavLink to="/#contact" className="m-2 hover:underline">Contact Us</NavLink>
    </>
  );
  return (
    <header className="navbar bg-[#EFEFEF]">
      <div className="navbar-start my-6">
        {/* Nav Links for smaller screens */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              {" "}
            </svg>
          </div>
          <div tabIndex={0} className="menu menu-sm bg-white text-gray-500 dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
            {NavLinks}
          </div>
        </div>
        {/* Logo and Title */}
        <div className="flex place-items-center gap-2">
          <img src={asset("icons/logo.png")} alt="Logo" className="w-10 h-10" />
          <a className="text-2xl font-bold">Appointly Health</a>
        </div>
      </div>
      {/* Nav Links for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 text-gray-500 text-lg">
          {NavLinks}
        </div>
      </div>
      {/* Emergency Button */}
      <div className="navbar-end">
        <button className="btn bg-[#176AE5] text-white text-lg font-bold hover:bg-[#0f55b4] border-0 rounded-full px-7 py-6">
          Emergency
        </button>
      </div>
    </header>
  );
};

export default Header;