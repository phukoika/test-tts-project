import React from "react";

const Footer = () => {
  return (
    <>
      <div className="hidden md:grid grid-cols-4 grid-rows-3 bg-gradient-to-t from-[#4CA757] to-[#16A571] md:px-[70px] md:py-[100px] gap-x-8">
        <div className="col-span-1">
          <img src="./logo.png" alt="" className="mx-auto object-cover" />
          <p className="md:text-xl font-bold text-white">
            Offshore Energy Installation JSC
          </p>
        </div>
        <div className="col-span-1">
          <ul className="text-white text-base">
            <li className="mb-3 cursor-pointer">ABOUT</li>
            <li className="mb-3 cursor-pointer">PROJECTS</li>
            <li className="mb-3 cursor-pointer">CLIENTS & PARTNERS</li>
            <li className="mb-3 cursor-pointer">NEWS AND EVENT</li>
            <li className="mb-3 cursor-pointer">SUBTAINABILITY</li>
            <li className="mb-3 cursor-pointer">DOWNLOAD PROFILE COMPANY</li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul className="text-white text-base">
            <li className="mb-3 cursor-pointer">CAREERS</li>
            <li className="mb-3 cursor-pointer">CONTACT</li>
            <li className="mb-3 cursor-pointer">BLOG</li>
            <li className="mb-3 cursor-pointer">FAQ</li>
            <li className="mb-3 cursor-pointer">DISCLAIMER</li>
            <li className="mb-3 cursor-pointer">PRIVACY POLICY</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="mb-3 text-white cursor-pointer uppercase">
            Sign up for email to receive the latest information
          </h2>
          <p className="text-sm text-white font-normal mb-4">
            Lorem ipsum dolor sit amet consectetur. Aliquam sed blandit rhoncus
            id dictum.
          </p>
          <input
            type=""
            className="outline-none bg-transparent border border-gray-300 my-1 text-gray-300 p-1"
            placeholder="Email"
          />
        </div>
        <div className="col-span-1 row-span-2 col-start-1 row-start-2">
          <span className="text-white">ADDRESS</span>
        </div>
        <div className="col-span-1 row-span-2 col-start-2 row-start-2">
          <span className="text-white">
            2nd floor, No.44, 30/4 Rd., Ward 9, Vung Tau City, Vietnam
          </span>
        </div>
        <div className="col-span-1 row-span-2 row-start-3 col-start-1">
          <span className="text-white">CONTACT</span>
        </div>
        <div className="col-span-1 row-span-3 col-start-2 row-start-3">
          <span className="text-white">
            2nd floor, No.44, 30/4 Rd., Ward 9, Vung Tau City, Vietnam
          </span>
        </div>
        <div className="col-span-1 row-span-3 col-start-3 row-start-3">
          <span className="text-white">
            2nd floor, No.44, 30/4 Rd., Ward 9, Vung Tau City, Vietnam
          </span>
        </div>
      </div>
      <div className="md:hidden bg-gradient-to-t from-[#4CA757] to-[#16A571] px-[10px]">
        <div className="">
          <img src="./logo.png" alt="" />
          <p className="text-white font-bold">
            Offshore Energy Installation JSC
          </p>
        </div>
        <div className="flex my-3 gap-x-12">
          <ul className="text-white text-base">
            <li className="mb-3 cursor-pointer">ABOUT</li>
            <li className="mb-3 cursor-pointer">PROJECTS</li>
            <li className="mb-3 cursor-pointer">CLIENTS & PARTNERS</li>
            <li className="mb-3 cursor-pointer">NEWS AND EVENT</li>
            <li className="mb-3 cursor-pointer">SUBTAINABILITY</li>
            <li className="mb-3 cursor-pointer">DOWNLOAD PROFILE COMPANY</li>
          </ul>
          <ul className="text-white text-base">
            <li className="mb-3 cursor-pointer">CAREERS</li>
            <li className="mb-3 cursor-pointer">CONTACT</li>
            <li className="mb-3 cursor-pointer">BLOG</li>
            <li className="mb-3 cursor-pointer">FAQ</li>
            <li className="mb-3 cursor-pointer">DISCLAIMER</li>
            <li className="mb-3 cursor-pointer">PRIVACY POLICY</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="mb-3 text-white cursor-pointer uppercase">
            Sign up for email to receive the latest information
          </h2>
          <p className="text-sm text-white font-normal mb-4 ">
            Lorem ipsum dolor sit amet consectetur. Aliquam sed blandit rhoncus
            id dictum.
          </p>
          <input
            type=""
            className="outline-none bg-transparent border border-gray-300 my-1 text-gray-300 p-1"
            placeholder="Email"
          />
        </div>
        <div className="grid grid-cols-4">
          <h2 className="mb-3 text-white cursor-pointer uppercase col-span-2 col-start-1">
            ADDRESS
          </h2>
          <p className="text-sm text-white font-normal mb-4 ">
            2nd floor, No.44, 30/4 Rd., Ward 9, Vung Tau City, Vietnam
          </p>
        </div>
        <div className="grid grid-cols-4">
          <h2 className="mb-3 text-white cursor-pointer uppercase col-span-2 col-start-1">
            CONTACT
          </h2>
          <p className="text-sm text-white font-normal mb-4 ">
            (+84) 254 6295268
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
