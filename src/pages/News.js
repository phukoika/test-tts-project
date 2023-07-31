import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import ButtonNavs from "../components/slider/ButtonNavs";

const News = () => {
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
  const active = Number(window.innerWidth);
  console.log(active);
  return (
    <div className="px-[10px] pt-[20px] md:px-[70px]">
      <div className="flex justify-between items-center">
        <div className="">
          <h3 className="md:text-lg text-base text-green-950 font-bold">
            NEWS
          </h3>
          <h1 className="text-[30px] md:text-[60px] font-bold text-green-600">
            Lastest News
          </h1>
        </div>
        <button className="px-4 rounded-3xl p-1 text-white font-semibold bg-green-600">
          <span className="text-base">SEE MORE</span>
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={active < 700 ? 1 : 4}
        loop={true}
        scrollbar={true}
        className="my-5"
        grabCursor={true}
        freeMode={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {listSlide.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="res-slide px-1 slider-active">
              <img src={item.imgURL} alt="" className="h-[250px] w-full" />
              <div className="slide-content">
                <p className=" text-base font-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  quae fugiat dignissimos repudiandae nihil.
                </p>
                <div className="text-right w-full p-3 font-bold text-sm">
                  SEE MORE+
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <ButtonNavs></ButtonNavs>
      </Swiper>
    </div>
  );
};

export default News;
