import React, { useEffect, useState } from "react";
import Menu from "../menu/Menu";

const Heading = ({ className = "" }) => {
  const [active, setActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setPrevScrollPos(scrollPosition);
      if (scrollPosition >= 60) {
        setScrollingUp(scrollPosition > prevScrollPos);
        setActive(true);
      }
      if (scrollPosition === 0) {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <>
      <div
        className={`shadow-md  fixed z-50 left-0 right-0 md:px-[70px] px-[10px] heading md:${
          scrollingUp ? "hidden" : ""
        } ${active ? "bg-white text-b" : ""}`}
      >
        <div className="flex items-center justify-between py-3">
          <div className="">
            <img
              className="w-[122px] h-[74px]"
              src={`${active ? "./logo-2.png" : "./logo.png"}`}
              alt=""
            />
          </div>
          <div
            className="hidden md:flex items-center justify-center rounded-3xl  py-2 px-8"
            style={{
              cursor: "pointer",
              border: active ? "" : "1px solid #fff",
              color: active ? "#000" : "#fff",
            }}
          >
            <span className="">+00 9875466</span>
          </div>
        </div>
        <Menu className="md:hidden" active={active}></Menu>
      </div>
    </>
  );
};

export default Heading;
