import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full px-3 md:pl-[70px] pt-[60px] md:pt-[200px] md:flex md:gap-x-10 justify-between items-start">
      <div className="md:w-2/3 lg:w-[521px]">
        <h1 className="text-lg font-bold text-green-700">ABOUT US</h1>
        <div className="">
          <p className="text-2xl md:text-[46px] font-bold text-left text-green-500 my-4">
            Offshore Energy
          </p>
          <p className="text-2xl md:text-[46px] font-bold text-left text-green-500 my-4">
            Installation
          </p>
          <p className="text-2xl md:text-[46px] font-bold text-left text-[#3A5469] my-4 md:leading-[56px]">
            OEI is your gateway to renewable energy and Oil & Gas solutions.
          </p>
          <p className="md:hidden text-2xl md:text-[46px] font-bold text-left text-[#3A5469] my-4 md:leading-[56px]">
            We fuse expertise and innovation to deliver top-tier Project
            Management, Engineering, and Construction services. Join us in
            powering a sustainable future.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-6 grid-rows-5 gap-3 lg:w-2/3">
        <div
          className="bg-green-700 col-start-6 col-span-1"
          data-aos="fade-right"
        ></div>
        <div className="" data-aos="fade-right">
          <img
            src="./img-1.jfif"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div
          className="col-span-4 row-span-2 grid grid-cols-1 grid-row-2"
          data-aos="fade-right"
        >
          <img
            src="./img-2.jfif"
            className="w-full h-full object-cover "
            alt=""
          />
        </div>

        <div className="" data-aos="fade-right">
          <img
            src="./img-3.jfif"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div
          className="bg-gray-400 col-start-1 col-span-1 row-span-1 row-start-4"
          data-aos="fade-right"
        ></div>
        <div
          className="col-span-2 row-span-1 col-start-4 row-start-4"
          data-aos="fade-right"
        >
          <img
            src="./img-4.jfif"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div
          className="bg-gray-400 col-start-6 col-span-1 row-span-1 row-start-5"
          data-aos="fade-right"
        ></div>
      </div>
    </div>
  );
};

export default AboutPage;
