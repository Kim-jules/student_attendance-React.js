import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Shoes",
    href: "/",
  },
  {
    name: "Mobile",
    href: "/",
  },
  {
    name: "Laptop",
    href: "/",
  },
  {
    name: "Women - Gown",
    href: "/",
  },
  {
    name: "Watch",
    href: "/",
  },
  {
    name: "Book",
    href: "/",
  },
  {
    name: "Headphone",
    href: "/",
  },
  {
    name: "Bed",
    href: "/",
  },
];

const SideBar = () => {
  return (
    <>
      <div className="w-80 border border-green-500 rounded-2xl flex-col mx-8">
        <div>
          <ul>
            <li className="text-white bg-green-500 rounded-t-2xl gap-4 flex p-5">All Categories</li>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="grid grid-cols-1 text-green-500 hover:text-white  hover:bg-green-400/20"
              >
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    isActive
                      ? "gap-4 flex text-green-500 hover:text-white p-5 rounded-2xl"
                      : "gap-4 flex p-5 rounded-2xl"
                  }
                >
                  <span className="">{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
