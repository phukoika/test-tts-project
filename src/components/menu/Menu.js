import React, { useState } from "react";
import MenuItem from "./MenuItem";
import MenuModal from "./MenuModal";

const Menu = ({ active, className }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button
        onClick={() => setToggle(!toggle)}
        className={`absolute top-0 right-0 ${
          active ? "text-black" : "text-white"
        } p-6 md:hidden`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? "text-black" : "text-white"
        } menu lg:flex hidden items-center gap-x-6 justify-around ${className}`}
      >
        <MenuItem active={active}>Home</MenuItem>
        <MenuItem active={active} icon={true}>
          <p>About us</p>
          <MenuModal></MenuModal>
        </MenuItem>
        <MenuItem active={active}>Project</MenuItem>
        <MenuItem active={active}>Service</MenuItem>
        <MenuItem active={active}>Careers</MenuItem>
        <MenuItem active={active}>News</MenuItem>
        <MenuItem active={active}>Contact</MenuItem>
      </div>
      {toggle && (
        <ul class="list-group fixed left-0 top-0 bottom-0 w-full bg-green-700">
          <li className="flex items-center justify-between">
            <img src="./logo.png" alt="" />
            <span className="text-white p-5" onClick={() => setToggle(!toggle)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </li>
          <div className="ul">
            <li class="text-[20px] font-medium p-2 navigation-link mb-2 text-white">
              HOME
            </li>
            <li class="text-[20px] font-medium p-2 navigation-link mb-2 text-white">
              ABOUT US
            </li>
            <li class="text-[20px] font-medium p-2 navigation-link mb-2 text-white">
              SERVICE
            </li>
            <li class="text-[20px] font-medium p-2 navigation-link mb-2 text-white">
              PROJECT
            </li>
            <li class="text-[20px] font-medium p-2 navigation-link mb-2 text-white">
              CAREERS
            </li>
            <li class="text-[20px] font-medium p-2 navigation-link mb-2 text-white">
              NEWS & EVENT
            </li>
          </div>
        </ul>
      )}
    </>
  );
};

export default Menu;
