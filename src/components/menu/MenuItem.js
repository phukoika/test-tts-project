import React from "react";

const MenuItem = ({ children, icon = false, active }) => {
  return (
    <div
      className={`text-base font-bold w-full bg-green-700 md:bg-transparent md:w-[187px] pt-3 cursor-pointer menu-item flex items-center justify-between relative ${
        active
          ? "active after:bg-green-500 hover:text-green-500 before:bg-black"
          : "after:bg-white before:bg-gray-400"
      }`}
    >
      <h5 className="">{children}</h5>
      {icon && (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      )}
    </div>
  );
};

export default MenuItem;
