import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

// import required modules
const ServicePage = () => {
  const listSlide = [
    {
      imgURL: "./1.png",
    },
    {
      imgURL: "./2.jfif",
    },
    {
      imgURL: "./3.jfif",
    },
    {
      imgURL: "./5.jfif",
    },
    {
      imgURL: "./6.jfif",
    },
  ];
  return (
    <>
      <div className="hidden overflow-x-hidden md:grid grid-cols-12 grid-rows-6 px-[10px] md:px-[70px] gap-3  h-[800px]">
        <div className="col-span-3 row-span-2">
          <h3 className="text-green-700 font-bold md:text-lg">
            Our Comprehensive Service
          </h3>
          <span className="lg:text-[40px] font-bold text-green-500">
            Empowring Sustainability
          </span>
        </div>
        <div data-aos="fade-right" className="col-span-3 row-span-2 ">
          <img src="./2.jfif" alt="" className="w-full h-full object-cover" />
        </div>
        <div data-aos="fade-right" className="col-span-3 row-span-2">
          <img src="./2.jfif" alt="" className="w-full h-full object-cover" />
        </div>
        <div data-aos="fade-left" className="col-span-2 row-span-2">
          <img src="./3.jfif" alt="" className="w-full h-full object-cover" />
        </div>
        <div
          data-aos="fade-right"
          className="col-span-4 row-span-4 col-start-1"
        >
          <img src="./2.jfif" alt="" className="w-full h-full object-cover" />
        </div>
        <div data-aos="fade-right" className="col-span-3 row-span-2">
          <img src="./4.jfif" alt="" className="w-full h-full object-cover" />
        </div>
        <div data-aos="fade-left" className="col-span-3 row-span-2">
          <img src="./5.jfif" alt="" className="w-full h-full object-cover" />
        </div>
        <div
          data-aos="fade-left"
          className="col-span-2 row-span-3 bg-green-100"
        >
          <img src="./5.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div
          data-aos="fade-right"
          className="col-span-2 row-span-2 flex items-center justify-center bg-gradient-to-t from-[#4CA757] to-[#16A571]"
        ></div>
        <div data-aos="fade-left" className="col-span-4 row-span-6">
          <img src="./6.jfif" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-2 row-span-3 col-start-11 row-start-6 bg-gradient-to-t from-[#4CA757] to-[#16A571]  flex items-center justify-center">
          <p>SEE MORE</p>
        </div>
      </div>
      <div className="w-full max-h-[330px] mt-7 px-[10px] md:hidden">
        <div className="">
          <h3 className="uppercase text-sm font-bold text-green-950 tracking-wide">
            we provide service
          </h3>
          <p className="text-3xl font-bold text-green-600">
            Epowring Sustainability
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView="1"
          loop={true}
          scrollbar={true}
          className="my-5"
        >
          {listSlide.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="res-slide relative">
                <img src={item.imgURL} alt="" className="" />
                <p className="absolute bottom-5 text-white text-base font-bold px-3">
                  Project Management, Engineering and Construction
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ServicePage;
