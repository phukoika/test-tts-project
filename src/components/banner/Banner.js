import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerItem from "./BannerItem";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const bannerList = [
  {
    imgURL: "./bg-1.png",
    text1: "Buiding For",
    text2: "Green",
    text3: "Energy",
  },
  {
    imgURL: "./bg-2.png",
    text1: "Victory",
    text2: "Park",
    text3: "",
  },
  {
    imgURL: "./bg-3.png",
    text1: "Site",
    text2: "Conditions",
    text3: "",
  },
];

const Banner = () => {
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressContent.current) {
      const progressBarWidth = (1 - progress) * 100;
      progressContent.current.style.width = `${progressBarWidth}%`;
    }
  };

  return (
    <section className="banner w-full  relative ">
      <Swiper
        grabCursor="true"
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {bannerList.length > 0 &&
          bannerList.map((item, index) => (
            <SwiperSlide key={index}>
              <BannerItem
                src={item.imgURL}
                text1={item.text1}
                text2={item.text2}
                text3={item.text3}
              ></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="swiper-pagination w-full"></div>
      <div className="w-full h-1 bg-gray-200">
        <div className="h-full bg-green-500 w-[0]" ref={progressContent}></div>
      </div>
    </section>
  );
};

export default Banner;
