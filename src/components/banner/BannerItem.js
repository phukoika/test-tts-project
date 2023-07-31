import React from "react";

const BannerItem = ({ src = "", text1, text2, text3 }) => {
  return (
    <div className="h-[521px] md:h-[967px]">
      <img src={src} alt="" className="w-full h-full object-cover " />
      <div className="absolute bottom-[200px]  md:bottom-[100px] w-full">
        <div
          data-aos="fade-up"
          className="text-[42px] md:text-[127px] text-transparent font-bold content pl-[10px] pb-2 md:pl-[70px]"
        >
          <h1>{text1}</h1>
          <h1>
            <span className="text-green-700">{text2}</span> {text3}
          </h1>
        </div>
        <p
          data-aos="fade-left"
          className="absolute right-0 text-white text-xs text-justify pl-[10px] pr-[67px] md:text-lg lg:w-[448px] lg:bottom-[120px]"
        >
          We provide types of services for Wind Farm projects in Vietnam. With
          153+ MW of Wind turbines installed since established, we are confident
          to provide the best services to our customer.
        </p>
      </div>
    </div>
  );
};

export default BannerItem;
