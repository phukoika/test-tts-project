import React from "react";

const TextScrolling = ({ text1, text2, text3 }) => {
  return (
    <div className="text-slide-container py-[20px]">
      <p className="text-slide uppercase text-[48px] md:text-[100px] content text-white font-bold ">
        {text1} <span className="text-green-700">{text2}</span> {text3}
      </p>
    </div>
  );
};

export default TextScrolling;
