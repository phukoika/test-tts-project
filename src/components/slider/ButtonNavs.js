import React from "react";
import { useSwiper } from "swiper/react";

const ButtonNavs = () => {
  const swiper = useSwiper();
  return (
    <div className="flex gap-x-2 py-3">
      <button
        className="w-6 h-6 p-1 mb-4 md:w-10 md:h-10 bg-white text-green-700 flex items-center justify-center rounded-full shadow-md"
        onClick={() => swiper.slidePrev()}
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
        className="w-6 h-6 p-1 md:w-10 md:h-10 bg-green-700 text-white flex items-center justify-center rounded-full"
        onClick={() => swiper.slideNext()}
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
  );
};

export default ButtonNavs;
