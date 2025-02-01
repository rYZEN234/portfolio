import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Function to handle clicking a menu item
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center text-white px-10 py-6 md:px-20 z-20 bg-black bg-opacity-30 backdrop-blur-md">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      {/* Navbar Menu */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } absolute top-16 left-0 w-full md:static md:w-auto bg-black bg-opacity-50 md:bg-transparent px-4 md:px-0 text-center md:flex gap-6 rounded-lg`}
      >
        <a href="#About">
          <li
            className={`text-md p-2 md:p-0 hover:text-yellow-400 transition duration-200 ease-in-out ${
              activeLink === "About" ? "text-yellow-400" : ""
            }`}
            onClick={() => handleLinkClick("About")}
          >
            About
            {activeLink === "About" && (
              <div className="h-1 bg-yellow-400 w-full mt-1 transition-all duration-300"></div>
            )}
          </li>
        </a>
        <a href="#Experience">
          <li
            className={`text-md p-2 md:p-0 hover:text-yellow-400 transition duration-200 ease-in-out ${
              activeLink === "Experience" ? "text-yellow-400" : ""
            }`}
            onClick={() => handleLinkClick("Experience")}
          >
            Experience
            {activeLink === "Experience" && (
              <div className="h-1 bg-yellow-400 w-full mt-1 transition-all duration-300"></div>
            )}
          </li>
        </a>
        <a href="#Projects">
          <li
            className={`text-md p-2 md:p-0 hover:text-yellow-400 transition duration-200 ease-in-out ${
              activeLink === "Projects" ? "text-yellow-400" : ""
            }`}
            onClick={() => handleLinkClick("Projects")}
          >
            Projects
            {activeLink === "Projects" && (
              <div className="h-1 bg-yellow-400 w-full mt-1 transition-all duration-300"></div>
            )}
          </li>
        </a>
        <a href="#Footer">
          <li
            className={`text-md p-2 md:p-0 hover:text-yellow-400 transition duration-200 ease-in-out ${
              activeLink === "Footer" ? "text-yellow-400" : ""
            }`}
            onClick={() => handleLinkClick("Footer")}
          >
            Contact
            {activeLink === "Footer" && (
              <div className="h-1 bg-yellow-400 w-full mt-1 transition-all duration-300"></div>
            )}
          </li>
        </a>
      </ul>

      {/* Menu Button */}
      <button
        className="md:hidden hover:text-yellow-400 active:text-yellow-500 transition duration-200 ease-in-out"
        onClick={() => openMenu(!menu)}
      >
        {menu ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
      </button>
    </nav>
  );
};

export default Navbar;
