import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // scrool useEffect decsktop only
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    // add scroll listener
    window.addEventListener("scroll", handleScroll);

    // remove scroll listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <>
      {/* 1 */}
      <li className="relative group">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold"
              : "text-black group-hover:text-green-600"
          }
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
        </NavLink>
      </li>
      {/* 2 */}
      <li className="relative group">
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold"
              : "text-black group-hover:text-green-600"
          }
        >
          Portfolio
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
        </NavLink>
      </li>
      {/* 3 */}
      <li className="relative group">
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold"
              : "text-black group-hover:text-green-600"
          }
        >
          Services
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
        </NavLink>
      </li>
      {/* 4 */}
      <li className="relative group">
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold"
              : "text-black group-hover:text-green-600"
          }
        >
          About Us
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
        </NavLink>
      </li>
      {/* 5 */}
      <li className="relative group">
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold"
              : "text-black group-hover:text-green-600"
          }
        >
          Contact Us
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`w-full fixed z-10 top-0 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto lg:px-12 px-4 lg:py-6 py-4">
        <div className="flex justify-between items-center">
          {/* left side */}
          <div>
            <h2 className="text-4xl font-bold min-h-[50px]">
              <span className="text-green-600">B</span>inary
              <span className="text-green-600">f</span>usion
            </h2>
          </div>
          {/* center */}
          <div className="hidden md:flex space-x-12 items-center list-none text-lg">
            {links}
          </div>
          {/* Right side */}
          <button className="lg:block hidden bg-green-600 hover:bg-green-700 shadow-[0px_20px_30px_rgba(18,191,124,0.3)] hover:shadow-none text-white font-semibold py-4 px-9 rounded-full transition duration-200">
            Hire Us Now
          </button>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`focus:outline-none ${
                scrolled ? "text-gray-800" : "text-black"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white px-4 space-y-1 list-none overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 shadow" : "max-h-0 opacity-0"
        }`}
      >
        {links}
      </div>
    </div>
  );
};

export default Navbar;
