import React from "react";

const Slide = ({ isActive, imageUrl }) => {
  return (
    <div
      className={`flex p-3 cursor-pointer transition-transform duration-300 ${
        isActive ? "scale-125 bg-white" : "bg-neutral-200"
      }`}
    >
      <img src={imageUrl} alt="Slide" className=" object-cover h-full w-full" />
    </div>
  );
};

export default Slide;
