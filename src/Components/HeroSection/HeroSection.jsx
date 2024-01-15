import React, { useState } from "react";
import "./HeroSection.css";
import { GoDotFill } from "react-icons/go";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { GoArrowUp } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";

export const HeroSection = ({ heroData, heroCount, setHeroCount }) => {
  const [play, setPlay] = useState(true);
  return (
    <div className="header-section mt-[30vh] lg:mt-[28vh]">
      <div className="title flex h-fit  hero-title relative max-w-fit gap-4 mx-auto mb-5 lg:mb-14 z-[-1]">
        <p className=" text-4xl lg:text-[70px]  font-Inter font-extrabold bg-fade-in text-white ">
          {heroData.title1}
        </p>
        <p className="text-4xl  lg:text-[70px] relative  font-Inter font-extrabold bg-fade-in text-white">
          {heroData.title2}
        </p>
        <div className="line bg-Line-in border-b-[10px] left-0   right-0 bottom-0 w-[220px] lg:w-[540px] lg:-mb-6  absolute z-[-1] border-[#37fcf2]"></div>
      </div>
      <div className="hero-body items-center justify-center min-h-fit max-w-fit mx-auto mt-5">
        <p className=" text-[20px] lg:text-[38px]  text-center leading-[32px]  lg:leading-[48px] bg-fade-body font-light text-white">
          {heroData.body1}
        </p>
        <p className="text-[20px] lg:text-[38px]  text-center leading-[32px] lg:leading-[48px] bg-fade-body font-light text-white">
          {heroData.body2}
        </p>
        <p className="text-[20px] lg:text-[38px]  text-center leading-[32px] lg:leading-[48px] bg-fade-body font-light text-white">
          {heroData.body3}
        </p>
      </div>
      <div className="bottom-part flex gap-[80vh] items-center h-[60px] max-w-[1000px]   absolute bottom-[80px] left-0 right-0 lg:left-[70px] lg:right-[40px]">
        <div className="icons max-w-[40vh] mx-auto -mt-28 lg:mt-0 lg:w-full lg:mx-0   lg:ml-0 flex gap-3 text-white items-center">
          <button onClick={() => setHeroCount(0)}>
            {heroCount === 1 ? (
              <GoDotFill className=" text-gray-500" size={18} />
            ) : (
              <FaRegCircleDot size={18} />
            )}
          </button>
          <button onClick={() => setHeroCount(1)}>
            {heroCount === 1 ? (
              <FaRegCircleDot size={18} />
            ) : (
              <GoDotFill className=" text-gray-500" size={18} />
            )}
          </button>
          <button onClick={() => setPlay(!play)}>
            {play ? <FaPlay size={15} /> : <FaPause size={15} />}
          </button>
          <button
            className="hidden md:block"
            onClick={() => setHeroCount((prev) => (prev === 1 ? 0 : 1))}
          >
            <IoIosArrowBack size={18} />
          </button>
          <button
            className="hidden md:block"
            onClick={() => setHeroCount((prev) => (prev === 1 ? 0 : 1))}
          >
            <IoIosArrowForward size={18} />
          </button>
        </div>
        <div className="middle-toggle relative hidden min-w-[30px] -ml-[25vh]  lg:block  text-white ">
          <div className="border px-[7px] py-[12px] p rounded-3xl">
            <BsDot className="dot" />
          </div>
          <div className=" absolute ml-[7px] mt-1">
            <FaChevronDown />
          </div>
        </div>
      </div>
      <div className="chat z-[-1] absolute gap-4 bottom-10 right-5 flex flex-col  shadow-lg  items-center ">
        <AiFillMessage
          className="text-blue-800  bg-white h-14 w-14  p-2 rounded-3xl"
          size={50}
        />
        <GoArrowUp className=" bg-white h-14 w-14 rounded-3xl" size={10} />
      </div>
    </div>
  );
};
