import { NavLink } from "react-router-dom";
import {
  FaDashcube,
} from "react-icons/fa6";

import { FcShop } from "react-icons/fc";
import { RiStockFill } from "react-icons/ri";
import { FcSalesPerformance } from "react-icons/fc";
import { BsBox2 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <FaDashcube />,
  },
  {
    name: "Products",
    href: "/products",
    icon: <BsBox2 />,
  },
  {
    name: "Stock",
    href: "/stock",
    icon: <RiStockFill />,
  },
  {
    name: "Sales",
    href: "/sales",
    icon: <FcSalesPerformance />,
  },
  {
    name: "Log out",
    href: "/login",
    icon: <BiLogOut />,
  },
];

const SideBar = ({ onLogout }) => {
  return (
    <>
      <div className="w-1/6 p-5 bg-slate-900 rounded-2xl h-[95vh] flex flex-col gap-10 fixed">
        <div className="logo text-slate-100 font-extrabold text-3xl font-lobster mt-8 flex gap-5 items-center">
          <p className="text-6xl">
            <FcShop />
          </p>
          <p>
            XY<span className="text-lime-400">Stock</span>
          </p>
        </div>
        <div>
          <ul className="">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="grid grid-cols-1 gap-4 my-3 text-white hover:text-white  hover:bg-lime-400/20 rounded-2xl"
              >
                <NavLink
                  to={link.href}
                  onClick={link.name === "Log out" ? onLogout : undefined}
                  className={({ isActive }) =>
                    isActive
                      ? "gap-4 flex bg-lime-400 text-slate-900 p-5 rounded-2xl"
                      : "gap-4 flex p-5 rounded-2xl"
                  }
                >
                  <span className="text-2xl">{link.icon}</span>
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
