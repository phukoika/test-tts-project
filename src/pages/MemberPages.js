import React, { useState } from "react";
import Slide from "../components/slider/Slide";

const MemberPages = () => {
  const slides = [
    { imageUrl: "./slide-1.png", slideText: "Slide 1" },
    { imageUrl: "./slide-2.png", slideText: "Slide 2" },
    { imageUrl: "./slide-3.png", slideText: "Slide 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  return (
    <div className="bg-gradient-to-t from-[#4CA757] to-[#16A571] p-[60px] md:pt-[147px] md:px-[70px] px-[10px]">
      <div className="md:flex justify-between items-center ">
        <div className="lg:w-[564px] text-white font-bold">
          <h3 className="text-lg">WE ARE</h3>
          <h1 className="md:text-[60px]">A Member Of</h1>
          <p className="font-normal">
            A business development organisation helping to make valuable
            connections between businesses in the global energy sector.
          </p>
          <div className="flex gap-x-2 py-3">
            <button
              className="w-6 h-6 p-1 mb-4 md:w-10 md:h-10 bg-white text-green-700 flex items-center justify-center rounded-full"
              onClick={handlePrevSlide}
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="w-6 h-6 p-1 md:w-10 md:h-10 bg-white text-green-700 flex items-center justify-center rounded-full"
              onClick={handleNextSlide}
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="lg:w-2/4 flex justify-between">
          <div className="slider-container">
            <div className="slides flex lg:gap-x-10 gap-x-5">
              {slides.map((slide, index) => (
                <Slide
                  key={index}
                  isActive={currentIndex === index}
                  imageUrl={slide.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="lg:text-[40px] text-2xl leading-10 text-white font-bold mt-10">
          Company value reflects its ability to generate future profits,
          management, and market position.
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4">
        <div className="layout">
          <h1 className="text-[80px] md:text-[100px] font-bold content text-gradient ">
            2+
          </h1>
          <p className="text-white">FOUNDED YEAR</p>
        </div>
        <div className="layout">
          <h1 className="text-[80px] md:text-[100px] font-bold content text-gradient ">
            2+
          </h1>
          <p className="text-white">FOUNDED YEAR</p>
        </div>
        <div className="layout">
          <h1 className="text-[80px] md:text-[100px] font-bold content text-gradient ">
            2+
          </h1>
          <p className="text-white">FOUNDED YEAR</p>
        </div>
        <div className="layout">
          <h1 className="text-[80px] md:text-[100px] font-bold content text-gradient ">
            2+
          </h1>
          <p className="text-white">FOUNDED YEAR</p>
        </div>
      </div>
    </div>
  );
};

export default MemberPages;
