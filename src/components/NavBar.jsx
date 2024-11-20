import React from "react";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About us",
    href: "/about-us",
  },
  {
    name: "Contact us",
    href: "/contact-us",
  },
];

const NavBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center font-poppins p-4">
      <div className="flex items-center justify-between w-full md:w-auto md:gap-10">
        <div className="logo font-lobster text-3xl font-bold">
          <h1 className="text-green-500">Online Shopping</h1>
        </div>
        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <button className="text-green-500 focus:outline-none">
            Menu
          </button>
        </div>
      </div>
      <div className="links w-full md:w-auto mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row md:space-x-6">
          {links.map((link, index) => (
            <li
              key={index}
              className="my-3 hover:underline hover:text-green-400 transition-all ease-in-out duration-300 rounded-2xl"
            >
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "gap-4 flex text-green-500 underline font-bold underline-offset-2 items-center justify-center p-5 rounded-2xl"
                    : "gap-4 flex p-5 rounded-2xl"
                }
              >
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="right flex gap-6 mt-4 md:mt-0">
        <div className="search">
          <SearchBar />
        </div>
        <div className="profile flex items-center">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default NavBar;