import React from "react";
import { asset } from "../../utils/asset";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
  const NavLinks = (
      <>
        <NavLink to="/" className="m-2 hover:underline">Home</NavLink>
        <NavLink to="/my-bookings" className="m-2 hover:underline">My-Bookings</NavLink>
        <NavLink to="/blogs" className="m-2 hover:underline">Blogs</NavLink>
        <NavLink to="/#contact" className="m-2 hover:underline">Contact Us</NavLink>
      </>
    );
  return (
    <footer className="footer footer-horizontal footer-center bg-white rounded p-10">
        {/* Logo and Title */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10">
          <img src={asset("icons/logo.png")} alt="Appointly Health" />
        </div>
        <h1 className="text-black text-2xl font-bold">Appointly Health</h1>
      </div>
      {/* Nav Links for larger screens */}
      <nav className="grid grid-flow-row md:grid-flow-col gap-4 text-gray-500 text-lg">
        {NavLinks}
      </nav>
      <hr className="w-1/2 border border-gray-200" />
      {/* Social Media Icons */}
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to='https://x.com/TheTahmidSarker'>
            <FaXTwitter className="w-9 h-9 text-black" />
          </Link>
          <Link to="https://www.linkedin.com/in/tahmid-sarker">
            <FaLinkedin className="w-9 h-9 text-[#0A66C2]" />
          </Link>
          <Link to="https://www.facebook.com/tahmid.sarker.mahi">
            <FaFacebook className="w-9 h-9 text-[#1877F2]" />
          </Link>
          <Link to="https://www.youtube.com/@tahmid-sarker">
            <FaYoutube className="w-9 h-9 text-[#FF0000]" />
          </Link>
        </div>
      </nav>
      {/* Footer Copyright Section */}
      <aside>
        <p className="text-gray-400">Copyright © {new Date().getFullYear()} - All right reserved by Appointly Health</p>
      </aside>
    </footer>
  );
};

export default Footer;